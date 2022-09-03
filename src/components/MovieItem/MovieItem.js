import {
  Image,
  ImageWrapper,
  ContentWrapper,
  Rating,
} from './MovieItem.styled';

export const MovieItem = ({
  movie: { title, poster_path, vote_average: rating },
}) => {
  return (
    <>
      <ImageWrapper>
        <Image
          src={
            poster_path
              ? 'https://image.tmdb.org/t/p/w500' + poster_path
              : 'https://dummyimage.com/216x361/000/fff&text=No+poster'
          }
          alt={title}
        />
      </ImageWrapper>
      <ContentWrapper>
        <p>{title}</p>
        <p>
          Rating:{' '}
          <Rating rating={rating.toFixed(2)}>{rating.toFixed(2)}</Rating>
        </p>
      </ContentWrapper>
    </>
  );
};
