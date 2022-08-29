import { useEffect, useState } from 'react';
import { Box } from 'components/Box';
import { GlobalStyle } from './GlobalStyle';
import { getTrending } from 'services/movie-api';
import { MoviesGallery } from './MoviesGallery/MoviesGallery';

export const App = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const trending = await getTrending();
      setTrendingMovies(trending.data.results);
    })();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Box>
        <MoviesGallery trendingMovies={trendingMovies} />
      </Box>
    </>
  );
};
