import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrending = async () => {
  const trendingData = axios.get('trending/all/day', {
    params: {
      api_key: process.env.REACT_APP_MOVIES_API_KEY,
    },
  });
  return (await trendingData).data.results;
};

export const searchMovies = async movie => {
  const foundMovies = axios.get('search/movie', {
    params: {
      api_key: process.env.REACT_APP_MOVIES_API_KEY,
      query: movie,
      language: 'en-US',
      page: 1,
      include_adult: false,
    },
  });
  return (await foundMovies).data.results;
};
