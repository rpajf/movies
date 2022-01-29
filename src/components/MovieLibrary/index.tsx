import React, { useState, useEffect, useRef } from 'react';
import {
  getMovies,
  sortByAz,
  sortByRating,
  sortByZa,
} from '../../features/movies/movieSlice';
import Spinner from '../Spinner';
import ErrorMessage from '../Error';

import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import MovieItem from '../MovieItem';
import Select from '../Select';
import { Container, Content } from './styles';

const MovieLibrary: React.FC = () => {
  const [selectValue, setSelectValue] = useState<string>();

  const data = useAppSelector((state) => {
    console.log('estado', state.total_results);
    return state;
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (selectValue === 'asc') {
      dispatch(sortByAz());
    } else if (selectValue === 'desc') {
      dispatch(sortByZa());
    } else {
      dispatch(sortByRating());
    }
  }, [selectValue]);

  useEffect(() => {
    if (data.status === 'idle') {
      dispatch(getMovies({ page: 1 }));
      dispatch(getMovies({ page: 2 }));
      dispatch(getMovies({ page: 3 }));
    }
  }, []);

  return (
    <Container>
      <Select setValue={setSelectValue} />

      <Content>
        {data.status === 'loading' ? (
          <Spinner status={data.status} />
        ) : data.status === 'success' ? (
          
          data.value.map(
            ({
              id,
              title,
              release_date,
              poster_path,
              vote_average,
              overview,
              original_language,
              popularity,
            }) => (
              <MovieItem
                key={`${id}`}
                src={`${poster_path}`}
                title={`${title}`}
                vote_average={`${vote_average}`}
                release_date={`${release_date}`}
                overview={`${overview}`}
                original_language={`${original_language}`}
                popularity={`${popularity}`}
              />
            )
          )
        ) : data.status === 'idle' ? null : (
          <ErrorMessage content={`${data.error}`} />
        )}
      </Content>
    </Container>
  );
};

export default MovieLibrary;
