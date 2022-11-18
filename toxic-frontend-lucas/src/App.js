import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import './App.css';
import SearchBar from './components/SearchBar';

/*TODO: 
show imgs [x] 
hover show rating (make comonent?) [x]
search functionality []
filter language? []
list shows latest air date []



*/

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [listPopular, setListPopular] = useState(false);

  const getMovieRequest = async () => {
    //TODO: Remove search parameters

    const url = listPopular
      ? `https://api.themoviedb.org/3/tv/popular?api_key=59b4bf87e337717965103693e06ba19c`
      : `https://api.themoviedb.org/3/search/movie?api_key=59b4bf87e337717965103693e06ba19c&query=${searchValue}}`;
    const response = await fetch(url);
    //Data converts response to JSON
    const data = await response.json();

    console.log('data ', data.results);
    setMovies(data.results);
  };

  //useEffect react hook calls function when page loads, renders
  useEffect(() => {
    setSearchValue('');
    getMovieRequest();
  }, []);

  useEffect(() => {
    getMovieRequest();
    console.log(searchValue);
  }, [listPopular, searchValue]);

  return (
    <div className="root-container">
      {/* for development only */}
      <h1>{!listPopular ? 'search mode' : 'popular tv'}</h1>
      {/* rememeber delete */}
      <div className="test">
        <SearchBar
          className="search-box"
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        <button
          onClick={() =>
            !listPopular ? setListPopular(true) : setListPopular(false)
          }
        >
          Show most popular
        </button>
        {/* {!listPopular ?
        <button
          onClick={() =>
            !listPopular ? setListPopular(true) : setListPopular(false)
          }
        >
          Show most popular
        </button>:<div></div>
        } */}
      </div>
      <MovieList movies={movies} />
    </div>
  );
}
export default App;
