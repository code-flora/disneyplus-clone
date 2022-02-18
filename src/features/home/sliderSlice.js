import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sliderContent: [
        {
            id: 'slider0',
            alt: 'Movie name',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/disney-plus-clone-e2d5c.appspot.com/o/DisneyClone_Assets%2Fslider%2Fslider-badag.jpg?alt=media&token=06a4e225-3ea6-422e-bb7a-6fc5a9cb14a7',
        },
        {
            id: 'slider1',
            alt: 'Movie name 2',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/disney-plus-clone-e2d5c.appspot.com/o/DisneyClone_Assets%2Fslider%2Fslider-badging.jpg?alt=media&token=ce20330b-2242-4b65-8b02-3f575f3868ba',
        },
        {
            id: 'slider2',
            alt: 'Movie name 3',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/disney-plus-clone-e2d5c.appspot.com/o/DisneyClone_Assets%2Fslider%2Fslider-scale.jpg?alt=media&token=e5dda142-856c-44cd-9946-58b17a07ef65',
        },
        {
            id: 'slider3',
            alt: 'Movie name 4',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/disney-plus-clone-e2d5c.appspot.com/o/DisneyClone_Assets%2Fslider%2Fslider-scales.jpg?alt=media&token=77b7f884-31fa-480f-9d5b-1d2467d591da',
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