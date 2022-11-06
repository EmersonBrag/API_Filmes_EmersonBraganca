import { Container, MovieList, Movie } from "./styles";
import { APIKey } from '../../config/key';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { searchText } from "../Home";


function Search() {

    const [movies, setMovies] = useState([])
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/search/movie?query=Parasite&api_key=${APIKey}&language=en-US&page=1&include_adult=true`)
            .then(response => response.json())
            .then(data => setMovies(data.results))

    }, [])

    const [search, setSearch] = useState("")

    return (
        <Container>
            <h1>Movies</h1>
            <Link to="/"><button>Go Back</button></Link>  
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

export default Search;