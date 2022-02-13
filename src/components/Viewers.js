import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import { selectViewers } from '../features/home/viewersSlice';

function Viewers() {
    let viewersContent = useSelector(selectViewers);
    let viewersCode = viewersContent.map((item) => {
        return (
            <Wrap>
                <img src={item.imgUrl} alt={item.alt} key={item.id} />
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
    cursor: pointer;
    transition: all 0.3s cubic-bezier(.25,.45,.46,.94);
    box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px, rgb(0 0 0/73%) 0px 16px 10px -10px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        box-shadow: rgb(0 0 0/80%) 0px 40px 58px -16px, rgb(0 0 0/72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249,249,249,0.6);
    }
`