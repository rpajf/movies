import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/movies/movieSlice';

export const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
//export the type of the function store.dispatch to be reused
export type RootState = ReturnType<typeof store.getState>;
//rootstate is using TS inference
