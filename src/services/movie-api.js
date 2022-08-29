import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrending = async () => {
  const results = axios.get('trending/all/day', {
    params: {
      api_key: process.env.REACT_APP_MOVIES_API_KEY,
    },
  });
  return results;
};
