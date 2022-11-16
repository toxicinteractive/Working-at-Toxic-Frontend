import React from 'react';

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div>
          //TODO: CHANGE TO IMAGE
          <div>{movie.poster_path}</div>
        </div>
      ))}
    </>
  );
};
export default MovieList;
