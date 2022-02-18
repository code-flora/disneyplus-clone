import React from 'react'
import styled from 'styled-components';
import { selectMovie } from '../features/home/movieSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Movies() {
    const movies = useSelector(selectMovie);
    let renderMovies;
    if (movies) {
        renderMovies = movies.map((movie) => {
            return (
                <Wrap key={movie.id}>
                    <Link to={`/detail/${movie.id}`}>
                        <img src={movie.thumbnailUrl} alt={movie.name} />
                    </Link>
                </Wrap>

            )
        })
    }

    return (
        <Container>
            <h4>Recommended for You</h4>
            {movies && (
                <Content>
                    {renderMovies}
                </Content>
            )}
        </Container>
    )
}

export default Movies

const Container = styled.div`

`
const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(6, minmax(0, 1fr));

    @media (max-width: 1600px) {
        grid-template-columns: repeat(5, minmax(0, 1fr));
    }

    @media (max-width: 1200px) {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    @media (max-width: 900px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    @media (max-width: 600px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`

const Wrap = styled.div`
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgba(249,249,249,0.1);
    box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px, rgb(0 0 0/73%) 0px 16px 10px -10px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(.25,.45,.46,.94);

    img {
        width: 100%;
        height: 100%;
        object-fit: fill;
    }

    &:hover {
        box-shadow: rgb(0 0 0/80%) 0px 40px 58px -16px, rgb(0 0 0/72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249,249,249,0.6);
    }
`