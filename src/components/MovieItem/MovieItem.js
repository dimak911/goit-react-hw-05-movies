// import { Box } from 'components/Box';
import { Image, Card, ImageWrapper, ContentWrapper } from './MovieItem.styled';

export const MovieItem = ({
  movie: { title, name, poster_path, vote_average },
}) => {
  return (
    <Card href="#">
      <ImageWrapper>
        <Image
          src={'https://image.tmdb.org/t/p/w500' + poster_path}
          alt={title}
        />
      </ImageWrapper>
      <ContentWrapper>
        <p>{title || name}</p>
        <p>Rating: {vote_average.toFixed(2)}</p>
      </ContentWrapper>
    </Card>
  );
};

// "adult": false,
// "backdrop_path": "/hYZ4a0JvPETdfgJJ9ZzyFufq8KQ.jpg",
// "id": 629176,
// "title": "Samaritan",
// "original_language": "en",
// "original_title": "Samaritan",
// "overview": "Thirteen year old Sam Cleary  suspects that his mysteriously reclusive neighbor Mr. Smith is actually the legendary vigilante Samaritan, who was reported dead 20 years ago. With crime on the rise and the city on the brink of chaos, Sam makes it his mission to coax his neighbor out of hiding to save the city from ruin.",
// "poster_path": "/zgH8Ej50n2cvJCMJrxd4twEwSqz.jpg",
// "media_type": "movie",
// "genre_ids": [
// 28,
// 18,
// 878,
// 14
// ],
// "popularity": 686.637,
// "release_date": "2022-08-25",
// "video": false,
// "vote_average": 6.649,
// "vote_count": 291

// https://image.tmdb.org/t/p/w500
