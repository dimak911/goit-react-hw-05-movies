import { Outlet, useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Section } from 'components/Section/Section';
import { getMovieById } from 'services/movie-api';
import { Box } from 'components/Box';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(() => null);

  useEffect(() => {
    (async () => {
      setMovie(await getMovieById(movieId));
    })();
  }, [movieId]);

  return (
    <>
      {movie && (
        <Section>
          <Link to="/">
            <button type="button">Go back</button>
          </Link>
          <Box display="flex" gridGap={4} mb={5}>
            <Box width="400px">
              <img
                src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
                alt={movie.title}
              />
            </Box>
            <div>
              <h1>
                {movie.title} <span>({movie.release_date.slice(0, 4)})</span>
              </h1>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <p>User score: {(movie.vote_average / 10) * 100}%</p>
              <h4>Genres</h4>
              <p>{movie.genres.map(({ name }) => name).join(', ')}</p>
            </div>
          </Box>
          <div>
            <h4>Additional information</h4>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </div>
          <Outlet />
        </Section>
      )}
    </>
  );
};

// {
// "adult": false,
// "backdrop_path": "/9n5e1vToDVnqz3hW10Jdlvmzpo0.jpg",
// "belongs_to_collection": {
// "id": 531330,
// "name": "Top Gun Collection",
// "poster_path": "/pG4LGdxjNBHbsjMKnPWtkRSJcUv.jpg",
// "backdrop_path": "/eNupRRVv0a4dkVTxOMvG7LhNBaq.jpg"
// },
// "budget": 170000000,
// "genres": [
// {
// "id": 28,
// "name": "Action"
// },
// {
// "id": 18,
// "name": "Drama"
// }
// ],
// "homepage": "https://www.topgunmovie.com",
// "id": 361743,
// "imdb_id": "tt1745960",
// "original_language": "en",
// "original_title": "Top Gun: Maverick",
// "overview": "After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
// "popularity": 3015.587,
// "poster_path": "/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
// "production_companies": [
// {
// "id": 4,
// "logo_path": "/gz66EfNoYPqHTYI4q9UEN4CbHRc.png",
// "name": "Paramount",
// "origin_country": "US"
// },
// {
// "id": 10288,
// "logo_path": null,
// "name": "Don Simpson/Jerry Bruckheimer Films",
// "origin_country": "US"
// },
// {
// "id": 82819,
// "logo_path": "/zlFa3VNua4hJyGEI4X2sqDrtEH9.png",
// "name": "Skydance Media",
// "origin_country": "US"
// }
// ],
// "production_countries": [
// {
// "iso_3166_1": "US",
// "name": "United States of America"
// }
// ],
// "release_date": "2022-05-24",
// "revenue": 1422385348,
// "runtime": 131,
// "spoken_languages": [
// {
// "english_name": "English",
// "iso_639_1": "en",
// "name": "English"
// }
// ],
// "status": "Released",
// "tagline": "Feel the need... The need for speed.",
// "title": "Top Gun: Maverick",
// "video": false,
// "vote_average": 8.376,
// "vote_count": 3098
// }
