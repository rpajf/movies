import React from 'react';
import { CustomText } from '../Text';
import { Container, Loading } from './styles';

interface SpinnerProps {
  status: string;
}

const Spinner: React.FC<SpinnerProps> = ({ status }) => {
  return (
    <>
      {status === 'loading' ? (
        <Container>
          <Loading />
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};

export default Spinner;
