import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { getTrending, searchMovies } from 'services/movie-api';
import { MoviesGallery } from './MoviesGallery/MoviesGallery';
import { Movies } from '../pages/Movies';
import { SharedLayout } from './SharedLayout/SharedLayout';

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

  const onSearchMovie = value => {
    setSearchValue(value);
  };

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={<MoviesGallery trendingMovies={trendingMovies} />}
          ></Route>
          <Route
            path="movies"
            element={<Movies onSearchMovie={onSearchMovie} />}
          ></Route>
        </Route>
      </Routes>
    </>
  );
};
