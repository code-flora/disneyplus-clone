import { configureStore } from '@reduxjs/toolkit';
import headerMenuReducer from '../features/header/menuSlice';
import sliderLibraryReducer from '../features/home/sliderSlice';
import viewersLibraryReducer from '../features/home/viewersSlice';
import moviesLibraryReducer from '../features/home/movieSlice';
import userSliceReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    headerMenu: headerMenuReducer,
    sliderLibrary: sliderLibraryReducer,
    viewersLibrary: viewersLibraryReducer,
    moviesLibrary: moviesLibraryReducer,
    userInfo: userSliceReducer,
  },
});
