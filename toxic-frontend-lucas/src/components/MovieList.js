import React from 'react';

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div key={index}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="Mövie"
          ></img>
        </div>
      ))}
    </>
  );
};
export default MovieList;
