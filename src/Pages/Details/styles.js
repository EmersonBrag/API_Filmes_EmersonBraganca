import styled from "styled-components";

export const Container = styled.div`

    padding: 4rem 0;

    h1 {
        margin: 3rem 0;
    }

    .movie {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        width: 300px;
        border-radius: 1rem;
    }

    .details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 3rem;
        max-width: 50%;
    }

    .details button {
        background: #d829c6;
        border: none;
        cursor: pointer;
        border-radius: 1.5rem;
        color: black;
        padding: 0.8rem 2rem;
        margin-top: 2rem;
        font-size: 100%;
        transition: all 0.3s;
    }

    button:hover {
        background: #b71EA7;
    }

    span {
        line-height: 150%;
        margin-bottom: 1rem;
    }

    .release-date {
        opacity: 0.5;
    }

`