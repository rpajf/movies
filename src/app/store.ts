import { configureStore, Action } from '@reduxjs/toolkit';
import {movieSlice} from '../features/movies/movieSlice';

export const store = configureStore({
  reducer: movieSlice.reducer,
});


export type AppDispatch = typeof store.dispatch;
//export the type of the function store.dispatch to be reused
export type RootState = ReturnType<typeof store.getState>;
//rootstate is using TS inference
