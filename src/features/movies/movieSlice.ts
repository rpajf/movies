import { createSlice, current, createAsyncThunk } from '@reduxjs/toolkit';
import { IState } from './types';
import api from '../../services/api';

const initialState: IState = {
  value: [],
  page: 1,
  status: 'idle',
  total_results: 0,
  total_pages: 1,
  error: '',
};

const api_key = '54ffed57deb5a7a8688be4de3007e578';

// export const getMovies = createAsyncThunk<IState>(
export const getMovies = createAsyncThunk<IState, { page: number }>(
  'movies/getMovies',
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await api.get(
        `movie/now_playing?api_key=${api_key}&page=${payload.page}`
      );
      console.log('payload page', payload.page);
      return {
        value: data['results'],
        total_results: data['total_results'],
        page: payload.page,
        total_pages: data['total_pages'],
      };
    } catch (error) {
      return rejectWithValue('Error');
    }
  }
);

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

export const movieSlice = createSlice({
  name: 'movies',
  initialState,

  reducers: {
    sortByAz: (state) => {
      const parsedState = current(state);

      state.value = parsedState.value.slice().sort(_sortByAz);
    },
    sortByZa: (state) => {
      const parsedState: IState = current(state);

      state.value = parsedState.value.slice().sort(_sortByZa);
    },
    sortByRating: (state) => {
      const parsedState = current(state);

      state.value = parsedState.value.slice().sort(_sortByRating);
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getMovies.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getMovies.fulfilled, (state, { payload }) => {
      state.status = 'success';
      state.value = [...new Set(state.value.concat(payload.value))];
      state.total_results = payload.total_results;
      state.total_pages = payload.total_pages;
      state.page = payload.page;
    });

    builder.addCase(getMovies.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export const { sortByAz, sortByZa, sortByRating } = movieSlice.actions;

export {};
