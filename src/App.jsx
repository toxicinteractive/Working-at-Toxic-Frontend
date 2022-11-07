'use strict';
import React from "react";
import movies from "./data.json"
import MovieList from "./components/MovieList";

const App = () => {
    console.log(movies);
    return (
      <>
      <MovieList list={movies.results} />
      </> 
    )
}

export default App;