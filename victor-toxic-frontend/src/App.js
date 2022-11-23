import { useEffect, useState } from "react";
import MovieCard from "./compontents/MovieCard";
import NavBar from "./compontents/NavBar";
import SearchBar from "./compontents/SearchBar";
import './App.css'

const API_KEY = '5a6781654589d72c72ce70c1932d38f2'

const App = () =>{
  
  const [movies, setMovies] = useState([])
  const [searchedMovie, setSearchedMovies] = useState([])
  const [searchWord, setSearchWord] = useState("")
  const [isSearch, setisSearch] = useState(false)
  
  useEffect(() =>{
    getPopularMovies()
  }, [])
  
  useEffect(() =>{
    getSearchedMovie()
  }, [searchWord])
  
  const getPopularMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
    const jsonData = await response.json()
    const movies = jsonData.results
    setMovies(movies)
  }
  
  const getSearchedMovie = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchWord}`)
    const jsonData = await response.json()
    const searchedMovie = jsonData.results
    if(searchedMovie){
      setSearchedMovies(searchedMovie)
    }else{
      setSearchedMovies([])
    }
  }

  return (
    <div className="container">
      <NavBar 
      isSearch={isSearch}
      setisSearch={setisSearch}
      />
      {isSearch ? (
      <>
      <SearchBar
      searchWord={searchWord}
      setSearchWord={setSearchWord}
      />
      {searchedMovie.length ? (
        <>
        {searchedMovie.map((movie) => 
          <MovieCard movie={movie} />
        )}
        </>
      ):
      (<><h3>No results</h3></>)

      }
      </>
      )
      :
      (
        <>        
        {movies.map((movie) => 
          <MovieCard movie={movie} />
        )}
        </>
      )}
    </div>
  )
}

export default App;
