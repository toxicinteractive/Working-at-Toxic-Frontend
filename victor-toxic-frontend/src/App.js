import { useEffect, useState } from "react";
import {BrowserRouter} from "react-router-dom"
import MovieDetails from "./MovieDetails"
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
  
  //When the page renders it goes to the get getPopularMovies function
  useEffect(() =>{
    getPopularMovies()
  }, [])
  
  //Gets run every time the searchWord gets updated in the SearchBar
  useEffect(() =>{
    getSearchedMovie()
  }, [searchWord])
  
  //Fetch all the popular movies and sort them by release date
  const getPopularMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
    const jsonData = await response.json()
    const movies = jsonData.results.sort((x, y) => new Date(y.release_date) - new Date(x.release_date))
    setMovies(movies)
  }
  
  //Fetch all the movies that math the searchWord if isSearch is true to prevent it from sending a request when the page first loads
  const getSearchedMovie = async () => {
    if(isSearch){
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchWord}`)
      const jsonData = await response.json()
      const searchedMovie = jsonData.results
      if(searchedMovie){
        setSearchedMovies(searchedMovie.sort((x, y) => new Date(y.release_date) - new Date(x.release_date)))
      }else{
        setSearchedMovies([])
      }
    }
  }

  return (
    //"Base" router for the Links inside MovieCard, unfortunantly i did not have the time to finish the routing
    <BrowserRouter>
      <div className="container">
        <NavBar 
        isSearch={isSearch}
        setisSearch={setisSearch}
        />
        {/* Check if isSearch is true, if it is render the searchbar */}
        {isSearch ? (
        <>
        <SearchBar
        searchWord={searchWord}
        setSearchWord={setSearchWord}
        />
        {/* Check if the results from the query gave any results, if not render "no results" otherwise render all movies in cards */}
        {searchedMovie.length ? (
          <>
            {searchedMovie.map((movie, index) => 
              <div key={index}>
                    <MovieCard movie={movie} />
              </div>
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
            {/*Map all movies to an index and render each with the MovieCard component passing in the movie*/}
            {movies.map((movie, index) => 
              <div key={index}>
                <MovieCard movie={movie} />
              </div>
            )}
          </>
        )}
      </div>
    </BrowserRouter>
  )
}

export default App;
