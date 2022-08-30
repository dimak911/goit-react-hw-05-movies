import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { getTrending, searchMovies } from 'services/movie-api';
import { MoviesGallery } from './MoviesGallery/MoviesGallery';
import { Container, Header, Link } from './App.styled';

export const App = () => {
  const [trendingMovies, setTrendingMovies] = useState(() => []);
  const [searchValue, setSearchValue] = useState(() => '');

  useEffect(() => {
    (async () => {
      setTrendingMovies(await getTrending());
    })();
  }, []);

  useEffect(() => {
    if (!searchValue) {
      return;
    }

    (async () => {
      const foundMovies = await searchMovies(searchValue);
      console.log(foundMovies);
    })();
  }, [searchValue]);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Header>
        <Routes>
          <Route
            path="/"
            element={<MoviesGallery trendingMovies={trendingMovies} />}
          ></Route>
        </Routes>
      </Container>
    </>
  );
};
