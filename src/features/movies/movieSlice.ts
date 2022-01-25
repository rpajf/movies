import { createSlice } from '@reduxjs/toolkit';
import {  IState } from './types';

import moviesData from '../../mocks/topTatedMovies.json';

const initialState: IState = {
  movies: moviesData,
};
let moviesRating = moviesData.map(({ vote_average }) => vote_average);
console.log(moviesRating);
// const fetchMovies = createAsyncThunk(`/movies`, async () => {
//   return moviesData;
// });
const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    // export const getMovies = state => state.movieLib.movies
    listAll: (state: IState, { payload }) => {
      console.log('ratingasd', moviesRating);
      console.log('payload', payload);
      return {
        ...state,
        movies: [...state.movies, payload],
      };
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(
  //     fetchMovies.fulfilled,
  //     (state, action) => (state.movies = action.payload)
  //   );
  // },
});
export const { listAll } = movieSlice.actions;
export default movieSlice.reducer;
