import { useEffect, useState } from 'react';
import { getTrending } from 'services/movie-api';
import { MovieItem } from '../MovieItem/MovieItem';
import { Heading, Card } from './MoviesGallery.styled';
import { Box } from 'components/Box';
import { Section } from 'components/Section/Section';

export const MoviesGallery = () => {
  const [trendingMovies, setTrendingMovies] = useState(() => []);

  useEffect(() => {
    (async () => {
      setTrendingMovies(await getTrending());
    })();
  }, []);

  return (
    <Section>
      <Heading>Trending today</Heading>
      <Box
        as="ul"
        display="grid"
        gridTemplateColumns="repeat(5, 1fr)"
        gridGap="20px"
        gridAutoRows="auto"
      >
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Card to={`movies/${movie.id}`}>
              <MovieItem movie={movie} />
            </Card>
          </li>
        ))}
      </Box>
    </Section>
  );
};
