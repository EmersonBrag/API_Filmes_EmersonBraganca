import { Container, MovieList, Movie } from "./styles";
import { APIKey } from '../../config/key';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

function Home() {

    const [movies, setMovies] = useState([])
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKey}&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => setMovies(data.results))

    }, [])

    const [search, setSearch] = useState("")

    return (
        <Container>
            <h1>Movies</h1>
            <form action="">
                <input 
                    type="text" 
                    name="query" 
                    id="query" 
                    onChange={ e => setSearch(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <MovieList>
                {movies.map(movies => {
                    return (
                        <Movie key={movies.id}>
                            <Link to={`/details/${movies.id}`}><img src={`${image_path}${movies.poster_path}`} alt={movies.title}/></Link>
                            <span>{movies.title}</span>
                        </Movie>
                    )
                })}
            </MovieList>
        </Container>
    )
}


export default Home;