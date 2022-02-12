import { configureStore } from '@reduxjs/toolkit';
import headerMenuReducer from '../features/header/menuSlice';
import sliderLibraryReducer from '../features/home/sliderSlice';

export const store = configureStore({
  reducer: {
    headerMenu: headerMenuReducer,
    sliderLibrary: sliderLibraryReducer
  },
});
