import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { searchMovies } from 'services/movie-api';
import { MoviesGallery } from './MoviesGallery/MoviesGallery';
import { Movies } from '../pages/Movies';
import { MovieDetails } from '../pages/MovieDetails';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  const [searchValue, setSearchValue] = useState(() => '');

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
          <Route index element={<MoviesGallery />}></Route>
          <Route
            path="movies"
            element={<Movies onSearchMovie={onSearchMovie} />}
          ></Route>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
          <Route path="*" element={<Navigate to="/" replace />}></Route>
        </Route>
      </Routes>
    </>
  );
};
