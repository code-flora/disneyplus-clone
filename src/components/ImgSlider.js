import React from 'react'
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux';
import { selectSlider } from '../features/home/sliderSlice';

function ImgSlider() {

    let sliderContent = useSelector(selectSlider);
    let contentCode = sliderContent.map((elem) => {
        return (
            <Wrap key={elem.id}>
                <img src={elem.imgUrl} alt={elem.name} />
            </Wrap>
        )
    });

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <Carousel {...settings}>
            {contentCode}
        </Carousel>
    )
}

export default ImgSlider

const Carousel = styled(Slider)`
    margin-top: 20px;

    .slick-list {
        overflow: visible;
    }

    ul li button {
        :before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before {
        color: white;
    }

    button {
        z-index: 1;
    }

`
const Wrap = styled.div`
    cursor: pointer;
    img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
        border: 4px solid transparent;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;

        :hover {
            border: 4px solid rgba(249, 249, 249, 0.8);
        }

    }
`