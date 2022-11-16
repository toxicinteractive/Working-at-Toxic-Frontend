import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import './App.css';

/*TODO: 
show imgs [x] 
hover show rating (make comonent?) [x]
search functionality []
filter language? []
list shows latest air date []



*/

function App() {
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async () => {
    //TODO: Remove search parameters
    const url = `https://api.themoviedb.org/3/tv/popular?api_key=59b4bf87e337717965103693e06ba19c`;
    const response = await fetch(url);
    //Data converts response to JSON
    const data = await response.json();

    console.log('data ', data);
    setMovies(data.results);
  };

  //useEffect react hook calls function when page loads, renders
  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
}
export default App;
