import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    movies: []
}

export const movieSlice = createSlice({
    name: 'moviesLibrary',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        }
    }
})

export const selectMovie = state => state.moviesLibrary.movies

export const { setMovies } = movieSlice.actions;

export default movieSlice.reducer