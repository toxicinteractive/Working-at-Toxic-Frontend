import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieList = ({ movies }) => {
  const [isShown, setIsShown] = useState(false);
  const noImage =
    'https://via.placeholder.com/300x500.png?text=No+Image+For+This+Title';
  if (!movies.length) {
    return (
      <>
        <h2>No results</h2>
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
          <hr />
          {isShown && (
            <div className="container movie-info-container">
              <div className="row">
                <div className="col">
                  <p className="fw-bold">Description: </p>
                  {!movie.overview.length
                    ? 'There are no words that can describe this movie/series.'
                    : movie.overview}
                </div>
                <div className="col">
                  <p className="fw-bold">Average movie rating:</p>
                  {movie.vote_average ?? '--'}
                  <p className="fw-bold">Released:</p>
                  {movie.first_air_date ?? '--'}
                  {/* This backdrop would be awesome as a background but i realised this too late and have no time for it */}
                  {movie.backdrop_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                    ></img>
                  )}
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
