import React from 'react'
import styled from 'styled-components';

function Detail() {
    return (
        <Container>
            <Background>
                <img src="/movies/startrek_bg.jpg" />
            </Background>
            <ImageTitle>
                <img src="/movies/startrek_logo.jpg" />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" /> <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" /> <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" />
                </GroupWatchButton>
            </Controls>
            <Subtitle>
                <span>
                    2009 ● 127m ● Sci-Fi Movies, US Movies, Action & Adventure
                </span>
            </Subtitle>
            <Description>
                <span>
                    On their first voyage aboard the starship Enterprise, cocky rebel James T. Kirk and logic-driven Vulcan Spock try to defeat a vengeful Romulan commander.
                </span>
            </Description>
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
        width: 50vw;
    }

    @media(max-width: 768px){
        width: 70vw;
    }

    @media(max-width: 576px){
        width: 90vw;
    }
`