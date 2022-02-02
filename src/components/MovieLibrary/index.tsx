import React, { useState, useEffect } from 'react';
import {
  getMovies,
  sortByAz,
  sortByRating,
  sortByZa,
} from '../../features/movies/movieSlice';

import ErrorMessage from '../Error';
import InfiniteScroll from 'react-infinite-scroll-component';
import Pagination from '../Pagination';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import MovieItem from '../MovieItem';
import Select from '../Select';
import { Container, Content } from './styles';

const MovieLibrary: React.FC = () => {
  const data = useAppSelector((state) => {
    return state;
  });
  const [selectValue, setSelectValue] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

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
    dispatch(getMovies({ page: currentPage }));
  }, [currentPage]);

  return (
    <Container>
      <Select setValue={setSelectValue} />
      <Pagination pageNum={currentPage} totalPages={data.total_pages} />

      <Content>
        {data.status === 'failed' && (
          <ErrorMessage status={`${data.status}`} content="Error" />
        )}
        <InfiniteScroll
          pullDownToRefresh={false}
          pullDownToRefreshContent={false}
          dataLength={currentPage * 20} //This is important field to render the next data
          next={() => setCurrentPage((prev) => prev + 1)}
          hasMore={currentPage < data.total_pages}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}
          loader={<h2>Loading....</h2>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>You have seen all Movies </b>
            </p>
          }
        >
          {data.value.map(
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
          )}
        </InfiniteScroll>
      </Content>
    </Container>
  );
};

export default MovieLibrary;
