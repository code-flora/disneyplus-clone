import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    viewersContent: [
        {
            id: 'viewers0',
            alt: 'Disney',
            imgUrl: '/images/viewers-disney.png',
            vidUrl: '/videos/1564674844-disney.mp4'
        },
        {
            id: 'viewers1',
            alt: 'Pixar',
            imgUrl: '/images/viewers-pixar.png',
            vidUrl: '/videos/1564676714-pixar.mp4'
        },
        {
            id: 'viewers2',
            alt: 'Marvel',
            imgUrl: '/images/viewers-marvel.png',
            vidUrl: '/videos/1564676115-marvel.mp4'
        },
        {
            id: 'viewers3',
            alt: 'Star Wars',
            imgUrl: '/images/viewers-starwars.png',
            vidUrl: '/videos/1608229455-star-wars.mp4'
        },
        {
            id: 'viewers5',
            alt: 'National Geographic',
            imgUrl: '/images/viewers-national.png',
            vidUrl: '/videos/1564676296-national-geographic.mp4'
        },
    ]
}

export const viewersSlice = createSlice({
    name: 'viewersLibrary',
    initialState,
    reducers: {}
})

export const selectViewers = state => state.viewersLibrary.viewersContent

export default viewersSlice.reducer