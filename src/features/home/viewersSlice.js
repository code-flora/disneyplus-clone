import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    viewersContent: [
        {
            id: 'viewers0',
            alt: 'Disney',
            url: '/category/disney',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/disney-plus-clone-e2d5c.appspot.com/o/DisneyClone_Assets%2Fviewers%2Fviewers-disney.png?alt=media&token=81ed3b0e-acc9-4a2f-87da-fac46f5901db',
            vidUrl: 'https://firebasestorage.googleapis.com/v0/b/disney-plus-clone-e2d5c.appspot.com/o/DisneyClone_Assets%2Fviewers%2F1564674844-disney.mp4?alt=media&token=4e27ee86-4069-4fca-a8c8-7e863fc53ba5'
        },
        {
            id: 'viewers1',
            alt: 'Pixar',
            url: '/category/pixar',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/disney-plus-clone-e2d5c.appspot.com/o/DisneyClone_Assets%2Fviewers%2Fviewers-pixar.png?alt=media&token=72cc2f8e-daac-4dca-94e0-8119c31c10e5',
            vidUrl: 'https://firebasestorage.googleapis.com/v0/b/disney-plus-clone-e2d5c.appspot.com/o/DisneyClone_Assets%2Fviewers%2F1564676714-pixar.mp4?alt=media&token=5451efec-df08-462a-9a14-aeb102d2a4aa'
        },
        {
            id: 'viewers2',
            alt: 'Marvel',
            url: '/category/marvel',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/disney-plus-clone-e2d5c.appspot.com/o/DisneyClone_Assets%2Fviewers%2Fviewers-marvel.png?alt=media&token=612c800e-8735-430f-ae36-9e440691e7a0',
            vidUrl: 'https://firebasestorage.googleapis.com/v0/b/disney-plus-clone-e2d5c.appspot.com/o/DisneyClone_Assets%2Fviewers%2F1564676115-marvel.mp4?alt=media&token=7b6bb08b-9dbb-423d-bb32-727adf870157'
        },
        {
            id: 'viewers3',
            alt: 'Star Wars',
            url: '/category/star-wars',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/disney-plus-clone-e2d5c.appspot.com/o/DisneyClone_Assets%2Fviewers%2Fviewers-starwars.png?alt=media&token=d55f7aea-5d76-4e4b-bbd2-e7e07e3e7f7f',
            vidUrl: 'https://firebasestorage.googleapis.com/v0/b/disney-plus-clone-e2d5c.appspot.com/o/DisneyClone_Assets%2Fviewers%2F1608229455-star-wars.mp4?alt=media&token=5cae6e63-a1d2-4559-a1b3-0d8e2f6bd366'
        },
        {
            id: 'viewers5',
            alt: 'National Geographic',
            url: '/category/nat-geo',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/disney-plus-clone-e2d5c.appspot.com/o/DisneyClone_Assets%2Fviewers%2Fviewers-national.png?alt=media&token=1a160a41-f184-42f7-a6c1-8351dd28d953',
            vidUrl: 'https://firebasestorage.googleapis.com/v0/b/disney-plus-clone-e2d5c.appspot.com/o/DisneyClone_Assets%2Fviewers%2F1564676296-national-geographic.mp4?alt=media&token=44ed9d6f-8262-4fe8-9b28-d2c3ed7c9755'
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