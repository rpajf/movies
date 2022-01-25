import React from 'react';

import { useAppSelector } from '../../hooks/redux';

import MovieItem from '../MovieItem';

import { Container } from './styles';

const MovieLibrary: React.FC = () => {
  const data = useAppSelector((state) => state.movie);

  console.log(data);
  return (
    <Container>
      {data.movies.map(
        ({ id, title, release_date, poster_path, vote_average }) => (
          <MovieItem
            key={id}
            src={`${poster_path}`}
            title={`${title}`}
            vote_average={`${vote_average}`}
            release_date={`${release_date}`}
          />
        )
      )}
    </Container>
  );
};

export default MovieLibrary;
