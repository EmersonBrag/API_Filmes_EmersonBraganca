import styled from 'styled-components'

export const Container = styled.div`

    justify-content: center;
    align-items: center;

    h1 {
        text-align: center;
        margin: 4rem 0;
    }

    button {
        background: #d829c6;
        border: none;
        cursor: pointer;
        border-radius: 1.5rem;
        color: black;
        padding: 0.7rem 1.8rem;
        font-size: 100%;
        transition: all 0.3s;
        margin-bottom: 2rem;
    }

    form {
        width: 100%;
        justify-content: center;
        align-items: center;
        display: flex;
        margin: 2rem 0;
    }

    #query {
        margin-right: 1rem;
        border-radius: 1.5rem;
        color: black;
        padding: 0.8rem 2rem;
        background: papayawhip;
        border: none;
        justify-content: center;
        width: 40%;

    }

`

export const MovieList = styled.ul`

    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;
`

export const Movie = styled.li`

    display: flex;
    flex-direction: column;
    align-items : center;

    img {
        width: 180px;
        Height: 240px;
        object-fit: cover;
        border-radius: 1rem;
        margin-bottom: 1rem;
    }

    span {
        font-weight: bold;
        font-size: 120%;
        text-align: center;
    }

    a {
        transition: all 0.3s;
    }

    a:hover {
        transform: scale(1.1);
    }
        
`