import { MovieItem } from '../MovieItem/MovieItem';
import { Section, Heading } from './MoviesGallery.styled';
import { Box } from 'components/Box';

export const MoviesGallery = ({ trendingMovies }) => {
  return (
    <Section>
      <Heading>Today Trending Movies</Heading>
      <Box
        as="ul"
        display="grid"
        gridTemplateColumns="1fr 1fr 1fr 1fr 1fr"
        gridGap="20px"
        gridAutoRows="auto"
        // gridAutoColumns="auto"
      >
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <MovieItem movie={movie} />
          </li>
        ))}
      </Box>
    </Section>
  );
};
