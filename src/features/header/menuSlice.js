import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    menuItems: [
        {
            id: 0,
            name: 'Home',
            iconUrl: '/images/home-icon.svg',
            linkUrl: '/'
        },
        {
            id: 1,
            name: 'Search',
            iconUrl: '/images/search-icon.svg',
            linkUrl: '/search'
        },
        {
            id: 2,
            name: 'Watchlist',
            iconUrl: '/images/watchlist-icon.svg',
            linkUrl: '/watchlist'
        },
        {
            id: 3,
            name: 'Originals',
            iconUrl: '/images/original-icon.svg',
            linkUrl: '/originals'
        },
        {
            id: 4,
            name: 'Movies',
            iconUrl: '/images/movie-icon.svg',
            linkUrl: '/movies'
        },
        {
            id: 5,
            name: 'Series',
            iconUrl: '/images/series-icon.svg',
            linkUrl: '/series'
        }
    ]
}

export const menuSlice = createSlice({
    name: 'headerMenu',
    initialState,
    reducers: {}
})

export const selectHeaderMenu = state => state.headerMenu.menuItems

export default menuSlice.reducer