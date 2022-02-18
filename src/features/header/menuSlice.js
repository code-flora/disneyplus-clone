import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    menuItems: [
        {
            id: 0,
            name: 'Home',
            iconUrl: 'https://firebasestorage.googleapis.com/v0/b/disney-plus-clone-e2d5c.appspot.com/o/DisneyClone_Assets%2Fgeneral%2Fhome-icon.svg?alt=media&token=8acbc44e-006b-4b3a-a9d0-38bc93e76876',
            linkUrl: '/'
        },
        {
            id: 1,
            name: 'Search',
            iconUrl: 'https://firebasestorage.googleapis.com/v0/b/disney-plus-clone-e2d5c.appspot.com/o/DisneyClone_Assets%2Fgeneral%2Fsearch-icon.svg?alt=media&token=0ef614c9-b5ee-492a-a2e2-e6e1d97b0dcd',
            linkUrl: '/search'
        },
        {
            id: 2,
            name: 'Watchlist',
            iconUrl: 'https://firebasestorage.googleapis.com/v0/b/disney-plus-clone-e2d5c.appspot.com/o/DisneyClone_Assets%2Fgeneral%2Fwatchlist-icon.svg?alt=media&token=1a3f6b2a-63af-44d2-9796-d288e50d8a2c',
            linkUrl: '/watchlist'
        },
        {
            id: 3,
            name: 'Originals',
            iconUrl: 'https://firebasestorage.googleapis.com/v0/b/disney-plus-clone-e2d5c.appspot.com/o/DisneyClone_Assets%2Fgeneral%2Foriginal-icon.svg?alt=media&token=d7d0967a-26af-45ac-a678-dfd4ab8d6535',
            linkUrl: '/originals'
        },
        {
            id: 4,
            name: 'Movies',
            iconUrl: 'https://firebasestorage.googleapis.com/v0/b/disney-plus-clone-e2d5c.appspot.com/o/DisneyClone_Assets%2Fgeneral%2Fmovie-icon.svg?alt=media&token=52c8a1fc-645f-475d-872c-05528ea29c93',
            linkUrl: '/movies'
        },
        {
            id: 5,
            name: 'Series',
            iconUrl: 'https://firebasestorage.googleapis.com/v0/b/disney-plus-clone-e2d5c.appspot.com/o/DisneyClone_Assets%2Fgeneral%2Fseries-icon.svg?alt=media&token=5bdcfb6c-875a-4d8e-9020-a0210d293c81',
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