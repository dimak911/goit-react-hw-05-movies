import { MovieItem } from '../MovieItem/MovieItem';
import { Card } from './MoviesGallery.styled';
import { Box } from 'components/Box';

export const MoviesGallery = ({ movies }) => {
  return (
    <Box
      as="ul"
      display="grid"
      gridTemplateColumns="repeat(5, 1fr)"
      gridGap="20px"
      gridAutoRows="auto"
    >
      {movies.map(movie => (
        <li key={movie.id}>
          <Card to={`/movies/${movie.id}`}>
            <MovieItem movie={movie} />
          </Card>
        </li>
      ))}
    </Box>
  );
};
