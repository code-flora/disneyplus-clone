import { configureStore } from '@reduxjs/toolkit';
import headerMenuReducer from '../features/header/menuSlice';

export const store = configureStore({
  reducer: {
    headerMenu: headerMenuReducer,
  },
});
