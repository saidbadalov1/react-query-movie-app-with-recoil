import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useMoviesData } from '../hooks/useMoviesData';
import { pageNumberState } from '../store/atoms/pageNumberState';
import ReactPaginate from 'react-paginate';

const Movies = () => {
  const [pageNumber, setPageNumber] = useRecoilState(pageNumberState);
  const { isLoading, data, isError, error } = useMoviesData(pageNumber);
  const pageCount = 500;

  const handlePageClick = ({ selected: selectedPage }) => {
    setPageNumber(selectedPage + 1);
  };

  console.log(data);

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div className='movies'>
      <h1 className='popular-movies'>Popular Movies</h1>
      <div className='movies-grid'>
        {!isLoading ? (
          data?.data.results.map((user) => {
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
          })
        ) : (
          <p style={{ color: 'white' }}>Loading..</p>
        )}
      </div>

      <ReactPaginate
        breakLabel='...'
        nextLabel='next >'
        previousLabel='< previous'
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        containerClassName='paging'
        activeLinkClassName='active-paging'
      />
    </div>
  );
};

export default Movies;
