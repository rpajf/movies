import React from 'react';

import { IMovie } from '../../features/movies/types';
import { Container, Content, MovieImg, OverviewButton } from './styles';
import { CustomText } from '../Text';

interface MovieItem extends IMovie {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const MovieItem: React.FC<MovieItem> = ({
  title,
  src,
  vote_average,
}) => {
  return (
    <Container>
      <MovieImg
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${src})`,
        }}
      />
      <Content>
        <CustomText
          spacing="0.5px"
          weight={400}
          textColor="#e5e5e5"
          size="14px"
        >
          Movie Rating: {vote_average}
        </CustomText>
        <CustomText spacing="0.5px" weight={500} textColor="#fff" size="18px">
          {title}
        </CustomText>
        <OverviewButton>
          
          <CustomText spacing="0.75px" weight={600} size="18px">
            Overview
          </CustomText>
        </OverviewButton>
      </Content>
    </Container>
  );
};

export default MovieItem;
