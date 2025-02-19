import React, { useState } from 'react';


import {
  Container,
  Content,
  MovieImg,
  OverviewButton,
  ModalBox,
  ModalHeader,
} from './styles';
import { CustomText } from '../../../../components/Text';
import MovieModal from '../Modal';

interface MovieItem  {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  src?: string;
  vote_count?: string;
  id?: string;
  video?: boolean;
  vote_average?: string;
  title?: string;
  popularity?: string;
  poster_path?: string;
  original_language?: string;
  original_title?: string;
  genre_ids?: string[];
  backdrop_path?: string;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  key?: string | undefined;

}

const MovieItem: React.FC<MovieItem> = ({
  title,
  src,
  vote_average,
  overview,
  release_date,
  original_language,
  popularity,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => setOpenModal(false);
  return (
    <Container>
      <MovieImg
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${src})`,
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
        <CustomText spacing="0.5px" weight={500} textColor="#fff" lineHeight='28px' size="18px">
          {title}
        </CustomText>
        <OverviewButton onClick={() => setOpenModal(true)}>
          <CustomText spacing="0.75px" weight={600} size="18px">
            Overview
          </CustomText>
        </OverviewButton>
      </Content>
      {openModal && (
        <MovieModal onClose={handleClose} open={openModal}>
          <ModalBox>
            <CustomText
              spacing="1px"
              weight={600}
              textColor="#f6ab0c;"
              size="20px"
            >
              {title}
            </CustomText>
            <ModalHeader>
              <CustomText
                spacing="1px"
                weight={600}
                textColor="#e5e5e5"
                size="14px"
              >
                Popularity:
                {'  '}
                {popularity}
              </CustomText>
              <CustomText
                spacing="1px"
                weight={600}
                textColor="#e5e5e5"
                size="14px"
              >
                Release date:
                {'  '}
                {release_date}
              </CustomText>
              <CustomText
                spacing="1px"
                weight={600}
                textColor="#e5e5e5"
                size="14px"
              >
                Original language:
                {'  '}
                {original_language}
              </CustomText>
            </ModalHeader>

            <CustomText
              spacing="0.5px"
              weight={500}
              textColor="#f6ab0c;"
              size="16px"
            >
              About:
              {'  '}
              {overview}
            </CustomText>
          </ModalBox>
        </MovieModal>
      )}
    </Container>
  );
};

export default MovieItem;