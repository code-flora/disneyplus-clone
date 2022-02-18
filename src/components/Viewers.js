import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux';
import { selectViewers } from '../features/home/viewersSlice';
import HoverVideoPlayer from 'react-hover-video-player';

function Viewers() {
    let viewersContent = useSelector(selectViewers);
    let viewersCode = viewersContent.map((item) => {
        return (
            <Wrap key={item.id}>
                <HoverVideoPlayer
                    videoSrc={item.vidUrl}
                    style={{
                        width: '100%',
                        paddingTop: '56.25%',
                    }}
                    restartOnPaused={true}
                    unloadVideoOnPaused={true}
                    sizingMode="container"
                    pausedOverlay={
                        <img src={item.imgUrl} alt={item.alt}
                        />
                    }
                    hoverOverlay={
                        <img src={item.imgUrl} alt={item.alt}
                        />
                    }
                    overlayTransitionDuration={500}
                />
            </Wrap>
        )
    })

    return (
        <Container>
            {viewersCode}
        </Container>
    )
}

export default Viewers

const Container = styled.div`
    margin-top: 30px;
    padding: 30px 0 26px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr))
    
;`

const Wrap = styled.div`
    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(.25,.45,.46,.94);
    box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px, rgb(0 0 0/73%) 0px 16px 10px -10px;

    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 2;
    }

    &:hover {
        box-shadow: rgb(0 0 0/80%) 0px 40px 58px -16px, rgb(0 0 0/72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249,249,249,0.6);
    }

   
`