import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieList = (props) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      {props.movies.map((movie, index) => (
        <div key={index}>
          <h1>{movie.name}</h1>
          <button
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
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
