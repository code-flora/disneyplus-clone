import { configureStore } from '@reduxjs/toolkit';
import headerMenuReducer from '../features/header/menuSlice';
import sliderLibraryReducer from '../features/home/sliderSlice';
import viewersLibraryReducer from '../features/home/viewersSlice';

export const store = configureStore({
  reducer: {
    headerMenu: headerMenuReducer,
    sliderLibrary: sliderLibraryReducer,
    viewersLibrary: viewersLibraryReducer
  },
});
