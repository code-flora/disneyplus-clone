import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { doc, getDoc } from 'firebase/firestore';
import db from '../firebase'
import { Link } from 'react-router-dom';
import { auth } from '../firebase'
import CircularProgress from '@mui/material/CircularProgress';

function Watchlist() {
    let [data, setData] = useState([]);
    let [isLoading, setLoading] = useState(true);
    let watchlistRender;

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                let userId = user.uid
                const snapshot = await getDoc(doc(db, "users", userId));
                if (snapshot.data()) {
                    setData(snapshot.data().watchList);
                    setLoading(false);
                } else {
                    setLoading(false);
                }

            }
        })
    }, []);

    if (data.length > 0) {
        watchlistRender = data.map((movie) => {
            return (
                <Wrap>
                    <Link to={`/detail/${movie.movieId}`} key={movie.movieId}>
                        <img src={movie.thumbnailUrl} alt={movie.name} />
                    </Link>
                </Wrap>
            )
        })
    } else {
        watchlistRender =
            <div>
                <p>You do not have any movies in your watch list for now.</p>
                <Link to="/">Browse Library Now</Link>
            </div>
    }

    return (
        <Container>
            {isLoading ?
                <LoaderWrap>
                    <Loader />
                </LoaderWrap>
                : (
                    <>
                        <h4>Your watch list</h4>
                        {
                            data.length > 0 &&
                            <Content>
                                {watchlistRender}
                            </Content>
                        }
                        {
                            !data.length &&
                            <TextOnly>
                                {watchlistRender}
                            </TextOnly>
                        }
                    </>
                )
            }

        </Container >
    )
}

export default Watchlist

const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    padding-bottom: 100px;
    overflow-x: hidden;
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

const TextOnly = styled.div`
    p {
        margin-bottom: 30px;
    }
    a {
        padding: 10px 30px;
        text-transform: uppercase;
        text-decoration: none;
        color: white;
        letter-spacing: 1px;
        border-radius: 5px;
        background-color: rgba(249,249,249,0.2);
        transition: all 0.3s ease-in-out;
    }

    a:hover {
        color: black;
        background-color: rgba(249,249,249,0.8)
        
    }
`

const LoaderWrap = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;
`

const Loader = styled(CircularProgress)`

`;