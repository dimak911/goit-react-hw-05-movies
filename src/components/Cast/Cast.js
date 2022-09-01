import { Box } from 'components/Box';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCreditsById } from 'services/movie-api';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  useEffect(() => {
    (async () => {
      const credits = await getMovieCreditsById(movieId);
      setCast(credits.cast);
    })();
  }, [movieId]);

  return (
    <Box
      as="ul"
      display="grid"
      gridTemplateColumns="repeat(5, 1fr)"
      gridGap="10px"
    >
      {cast &&
        cast.slice(0, 20).map(({ id, name, character, profile_path }) => (
          <Box as="li" key={id} width="200px">
            <img
              src={
                profile_path
                  ? 'https://image.tmdb.org/t/p/w500' + profile_path
                  : 'https://dummyimage.com/200x300/000/fff&text=No+photo'
              }
              alt={name}
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </Box>
        ))}
    </Box>
  );
};
