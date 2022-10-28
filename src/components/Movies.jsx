import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useMoviesData } from '../hooks/useMoviesData';
import { pageNumberState } from '../store/atoms/pageNumberState';

const Movies = () => {
  const [pageNumber, setPageNumber] = useRecoilState(pageNumberState);
  const { isLoading, data, isError, error } = useMoviesData(pageNumber);
  console.log(data);

  if (isLoading) {
    return <h2>Loading</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div className='movies'>
      <h1 className='popular-movies'>Popular Movies</h1>
      <div className='movies-grid'>
        {data?.data.results.map((user) => {
          return (
            <div className='movie-card' key={user.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${user.backdrop_path}`}
                alt='s'
              />
              <h4 className='movie-name'>{user.original_title}</h4>
              <h5 className='movie-average'>{user.vote_average}</h5>
              <Link style={{ color: 'white' }} to={`${user.id}`}>
                <button className='movie-button'>See more</button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className='pagination'>
        <button
          onClick={() => setPageNumber(pageNumber - 1)}
          disabled={pageNumber === 1}
        >
          Prev Page
        </button>

        {data?.data.page > 3 ? (
          <>
            <button onClick={() => setPageNumber(data?.data.page - 3)}>
              {data?.data.page - 3}
            </button>
            <button onClick={() => setPageNumber(data?.data.page - 2)}>
              {data?.data.page - 2}
            </button>
            <button onClick={() => setPageNumber(data?.data.page - 1)}>
              {data?.data.page - 1}
            </button>
          </>
        ) : (
          <></>
        )}

        <button
          style={{
            backgroundColor: 'blue',
            color: 'white',
            border: '2px solid blue',
          }}
        >
          {data?.data.page}
        </button>
        <button onClick={() => setPageNumber(data?.data.page + 1)}>
          {data?.data.page + 1}
        </button>
        <button onClick={() => setPageNumber(data?.data.page + 2)}>
          {data?.data.page + 2}
        </button>
        <button onClick={() => setPageNumber(data?.data.page + 3)}>
          {data?.data.page + 3}
        </button>

        <button
          onClick={() => setPageNumber(pageNumber + 1)}
          disabled={!data.data.results.length}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Movies;
