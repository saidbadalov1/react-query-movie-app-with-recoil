import { useQuery } from 'react-query';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const fetchUser = ({ queryKey }) => {
  const movieId = queryKey[1];
  return axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US/`,
  );
};

export const useMovieData = (movieId) => {
  return useQuery(['movie', movieId], fetchUser);
};
