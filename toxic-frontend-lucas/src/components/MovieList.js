import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieList = ({ movies }) => {
  const [isShown, setIsShown] = useState(false);
  const noImage =
    'https://via.placeholder.com/300x500.png?text=No+Image+For+This+Title';
  if (!movies.length) {
    return (
      <>
        <h1>No movies found</h1>
        <img src={noImage} alt="no image" />
      </>
    );
  }
  return (
    <>
      {movies.map((movie, index) => (
        <div key={index}>
          <h1>{movie.name ?? movie.original_title}</h1>
          <button
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            <img
              className="image"
              src={
                `https://image.tmdb.org/t/p/w500/${movie.poster_path}` ===
                `https://image.tmdb.org/t/p/w500/null`
                  ? noImage
                  : `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              }
              alt="Movie"
            ></img>
          </button>
          {isShown && (
            <div className="container movie-info-container">
              <div className="row">
                <div className="col">
                  <p className="fw-bold">Description: </p>
                  {movie.overview}
                </div>
                <div className="col">
                  {' '}
                  <p className="fw-bold">Average movie rating:</p>
                  {movie.vote_average}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};
export default MovieList;
