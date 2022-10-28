import { useQuery } from 'react-query';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const fetchUsers = (pageNumber) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${pageNumber}`,
  );
};

export const useMoviesData = (pageNumber) => {
  return useQuery(['movies', pageNumber], () => fetchUsers(pageNumber));
};
