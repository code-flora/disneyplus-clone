import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import db from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState();

    useEffect(() => {
        async function fetchData() {
            // Grab movie info from DB
            const docSnap = await getDoc(doc(db, "movies", id))
            if (docSnap.data()) {
                let data = { ...docSnap.data() };
                setMovie(data);
            } else {
                // redirect to homepage
            }
        };
        fetchData();
    }, []) // [] dependency array, tells useeffect to trigger only when the dependency array changes

    return (
        <Container>
            {movie && (
                <>
                    <Background>
                        <img src={movie.bgImgUrl} alt="" />
                    </Background>
                    <ImageTitle>
                        <img src={movie.logoUrl} alt={movie.name} />
                    </ImageTitle>
                    <Controls>
                        <PlayButton>
                            <img src="/images/play-icon-black.png" alt="" /> <span>PLAY</span>
                        </PlayButton>
                        <TrailerButton>
                            <img src="/images/play-icon-white.png" alt="" /> <span>TRAILER</span>
                        </TrailerButton>
                        <AddButton>
                            <span>+</span>
                        </AddButton>
                        <GroupWatchButton>
                            <img src="/images/group-icon.png" alt="" />
                        </GroupWatchButton>
                    </Controls>
                    <Subtitle>
                        <span>
                            {movie.year} ● {movie.duration} ● {movie.genre.join(', ')}
                        </span>
                    </Subtitle>
                    <Description>
                        <span>
                            {movie.description}
                        </span>
                    </Description>
                </>
            )}
        </Container >
    )
}

export default Detail

const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    overflow-x: hidden;

`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const ImageTitle = styled.div`
    margin-top: 70px;
    margin-bottom: 30px;
    height: 20vh;
    min-height: 170px;
    min-width: 200px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: left;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
`

const PlayButton = styled.button`
    display: flex;
    align-items: center;
    padding: 0 24px;
    margin-right: 22px;
    height: 48px;
    border: none;
    border-radius: 4px;
    letter-spacing: 1.8px;
    text-transform: uppercase;
    background-color: rgb(249,249,249);
    cursor: pointer;

    &:hover{
        background-color: rgb(198,198,198);
    }
`

const TrailerButton = styled(PlayButton)`
    background-color: rgba(0,0,0,0.3);
    border: 1px solid rgb(249,249,249);
    color: rgb(249,249,249);
`

const AddButton = styled.button`
    margin-right: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: rgba(0,0,0,0.3);
    border: 1px solid rgb(249,249,249);
    cursor: pointer;

    span {
        font-size: 28px;
        color: white;
    }

`

const GroupWatchButton = styled(AddButton)`
    background-color: rgb(0,0,0);

`

const Subtitle = styled.div`
    margin-top: 26px;
    color: rgb(249,249,249);
    font-size: 15px;
    min-height: 20px;
`

const Description = styled.div`
    width: 33vw;
    margin-top: 5px;
    line-height: 1.4;
    font-size: 20px;
    color: rgb(249,249,249);

    @media(max-width: 1400px){
        width: 60vw;
    }

    @media(max-width: 800px){
        width: 70vw;
    }

    @media(max-width: 576px){
        width: 90vw;
    }
`