import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMovieData } from '../hooks/useMovieData';

const MovieDetails = () => {
  const { movieId } = useParams();
  const { isLoading, isError, data, error } = useMovieData(movieId);
  const navigate = useNavigate();

  if (isLoading) {
    return <h2>Loading</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div className='movie-details'>
      <img
        alt='back'
        src={`https://image.tmdb.org/t/p/w500/${data?.data.backdrop_path}`}
      />
      <h2 className='movie-title'>{data?.data.original_title}</h2>
      <p className='movie-overview'>{data?.data.overview}</p>
      <p className='movie-release'>
        Movie Release Date - {data?.data.release_date}
      </p>
      <p className='movie-release'>
        Movie Vote Average - {data?.data.vote_average}
      </p>
      <button className='go-back' onClick={() => navigate(-1)}>
        Back to movies
      </button>
    </div>
  );
};

export default MovieDetails;
