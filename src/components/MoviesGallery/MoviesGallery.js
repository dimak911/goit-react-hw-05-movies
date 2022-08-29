import { MovieItem } from '../MovieItem/MovieItem';

export const MoviesGallery = ({ trendingMovies }) => {
  return (
    <>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <MovieItem movie={movie} />
          </li>
        ))}
      </ul>
    </>
  );
};
