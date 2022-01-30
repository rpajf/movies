import React from 'react';
import GlobalStyle from '../styles/global';
import MovieLibrary from '../components/MovieLibrary';
import Header from '../components/Header';
import { Container } from './styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <MovieLibrary />
      </Container>
    </>
  );
}

export default App;
