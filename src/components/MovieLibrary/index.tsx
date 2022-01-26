import React, { useState, useEffect } from 'react';
import {
  sortByAz,
  sortByRating,
  sortByZa,
} from '../../features/movies/movieSlice';

import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import MovieItem from '../MovieItem';
import Select from '../Select';
import { Container, Content } from './styles';

const MovieLibrary: React.FC = () => {
  const [selectValue, setSelectValue] = useState<string>();
  const data = useAppSelector((state) => state.movie);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(selectValue);
    if (selectValue === 'asc') {
      dispatch(sortByAz());
    } else if (selectValue === 'desc') {
      dispatch(sortByZa());
    } else {
      dispatch(sortByRating());
    }
    console.log('value', selectValue);
  }, [selectValue]);

  return (
    <Container>
      <Select setValue={setSelectValue} />

      <Content>
        {data.movies.map(
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
              key={id}
              src={`${poster_path}`}
              title={`${title}`}
              vote_average={`${vote_average}`}
              release_date={`${release_date}`}
              overview={`${overview}`}
              original_language={`${original_language}`}
              popularity={`${popularity}`}
            />
          )
        )}
      </Content>
    </Container>
  );
};

export default MovieLibrary;
