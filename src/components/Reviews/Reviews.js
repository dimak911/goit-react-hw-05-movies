import { Box } from 'components/Box';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsByMovieId } from 'services/movie-api';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    (async () => {
      setReviews(await getReviewsByMovieId(movieId));
    })();
  }, [movieId]);

  return (
    <Box>
      {!reviews ? (
        <p>No reviews</p>
      ) : (
        <ul>
          {reviews.map(
            ({
              id,
              author,
              author_details: { rating, avatar_path },
              content,
              created_at,
              updated_at,
            }) => {
              return (
                <li key={id}>
                  <p>
                    <b>Author:</b> {author}
                  </p>
                  <p>
                    <b>Rating:</b> {rating}
                  </p>
                  <p>
                    <b>Created at</b> {created_at}
                  </p>
                  <p>
                    <b>Review:</b>
                  </p>
                  <p>{content}</p>
                  <p>
                    <b>Last updated:</b> {updated_at}
                  </p>
                </li>
              );
            }
          )}
        </ul>
      )}
    </Box>
  );
};

// {
// "author": "r96sk",
// "author_details": {
// "name": "",
// "username": "r96sk",
// "avatar_path": "/https://www.gravatar.com/avatar/96c2e0e4ac98450f9e8e3c0a0a40aad8.jpg",
// "rating": 9
// },
// "content": "What an excellent sequel - I, in fact, like it more than its predecessor.\r\n\r\n<em>'Top Gun: Maverick'</em> is fantastic, simply put. I was expecting it to be good, but it's actually much more enjoyable than I had anticipated. The callbacks to the original are expertly done, the new characters are strong/well cast, it has plenty of meaning, music is fab and the action is outstanding - the aerial stuff is sensational.\r\n\r\nThe story is superb, with each high stake coming across as intended - parts even gave me slight goosebumps, which is a surprise given I'm not someone who has a connection to the 1986 film. It's all super neatly put together, I honestly came close to giving it a higher rating.\r\n\r\nTom Cruise is brilliant as he reprises the role of Maverick, while Miles Teller comes in and gives a top performance. Jennifer Connelly is another positive, though her role does kinda feel a tiny bit forced in order to have a love interest; given Kelly McGillis' [unexplained] absence.\r\n\r\nMonica Barbaro stands out most from the fresh faces, though I actually did enjoy watching them all - which is something I thought the film may struggle with, adding new people, but it's done nicely; sure Jon Hamm and Glen Powell are a little cliché, though overall I approve.\r\n\r\nA great watch - I'd highly recommend it, though naturally would suggest watching the previous film first if you haven't already.",
// "created_at": "2022-05-25T18:48:11.776Z",
// "id": "628e79eb1a32483b62466c62",
// "updated_at": "2022-05-25T18:48:11.776Z",
// "url": "https://www.themoviedb.org/review/628e79eb1a32483b62466c62"
// },
