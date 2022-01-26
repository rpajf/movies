import { createSlice, current } from '@reduxjs/toolkit';
import { IState } from './types';

import moviesData from '../../mocks/topTatedMovies.json';

const initialState: IState = {
  movies: moviesData,
};

const _sortByAz = (a: any, b: any) => {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
};
const _sortByZa = (a: any, b: any) => {
  if (a.title < b.title) {
    return 1;
  }
  if (a.title > b.title) {
    return -1;
  }
  return 0;
};
const _sortByRating = (a: any, b: any) => {
  if (a.vote_average < b.vote_average) {
    return -1;
  }
  if (a.vote_average > b.vote_average) {
    return 1;
  }
  return 0;
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    sortByAz: (state) => {
      const parsedState = current(state);

      state.movies = parsedState.movies.slice().sort(_sortByAz);
    },
    sortByZa: (state) => {
      const parsedState = current(state);

      state.movies = parsedState.movies.slice().sort(_sortByZa);
    },
    sortByRating: (state) => {
      const parsedState = current(state);

      state.movies = parsedState.movies.slice().sort(_sortByRating);
    },
  },
});
export const { sortByAz, sortByZa, sortByRating } = movieSlice.actions;
export default movieSlice.reducer;
