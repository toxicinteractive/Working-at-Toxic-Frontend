import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import './App.css';
import SearchBar from './components/SearchBar';

/*TODO: 
show imgs [x] 
hover show rating (make comonent?) [x]
search functionality [x]
filter language? []
list shows latest air date [x]
movie page []



*/

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [listPopular, setListPopular] = useState(false);

  const getMovieRequest = async () => {
    //TODO: Remove search parameters

    //It feels like i could just modify the one string instead of doing it with two differen...
    const url = listPopular
      ? `https://api.themoviedb.org/3/tv/popular?api_key=59b4bf87e337717965103693e06ba19c`
      : `https://api.themoviedb.org/3/search/movie?api_key=59b4bf87e337717965103693e06ba19c&query=${searchValue}}`;
    const response = await fetch(url);
    //Data converts response to JSON
    const data = await response.json();

    //Sorty by release date descending
    const sortedData = data.results.sort(
      (a, b) => new Date(b.first_air_date) - new Date(a.first_air_date)
    );
    setMovies(sortedData);
  };

  //useEffect react hook calls function when page loads, renders
  useEffect(() => {
    setSearchValue('');
    getMovieRequest();
  }, []);

  useEffect(() => {
    getMovieRequest();
  }, [listPopular, searchValue]);

  return (
    <div className="root-container">
      <div>
        {!listPopular ? (
          <SearchBar
            className="search-box"
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        ) : (
          <div></div>
        )}

        <button
          onClick={() =>
            !listPopular ? setListPopular(true) : setListPopular(false)
          }
        >
          {!listPopular ? 'Show most popular' : 'Search'}
        </button>
      </div>
      <h1>{!listPopular ? 'Search' : 'Most popular tv right now'}</h1>
      <hr />
      <MovieList movies={movies} />
    </div>
  );
}
export default App;
