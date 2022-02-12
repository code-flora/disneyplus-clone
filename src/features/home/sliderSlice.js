import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sliderContent: [
        {
            id: 'slider0',
            alt: 'Movie name',
            imgUrl: '/images/slider-badag.jpg',
        },
        {
            id: 'slider1',
            alt: 'Movie name 2',
            imgUrl: '/images/slider-badging.jpg',
        },
        {
            id: 'slider2',
            alt: 'Movie name 3',
            imgUrl: '/images/slider-scale.jpg',
        },
        {
            id: 'slider3',
            alt: 'Movie name 4',
            imgUrl: '/images/slider-scales.jpg',
        }
    ]
}

export const sliderSlice = createSlice({
    name: 'sliderLibrary',
    initialState,
    reducers: {}
})

export const selectSlider = state => state.sliderLibrary.sliderContent

export default sliderSlice.reducer