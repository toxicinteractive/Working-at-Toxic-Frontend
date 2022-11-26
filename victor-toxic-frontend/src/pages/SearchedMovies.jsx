import { useEffect, useState } from "react";
import MovieCard from "../compontents/MovieCard";
import SearchBar from "../compontents/SearchBar";

const API_KEY = '5a6781654589d72c72ce70c1932d38f2'

const SearchedMovies = () =>{
  
  const [searchedMovie, setSearchedMovies] = useState([])
  const [searchWord, setSearchWord] = useState("")
  
  //Gets run every time the searchWord gets updated in the SearchBar
  useEffect(() =>{
    getSearchedMovie()
  }, [searchWord])
  
  //Fetch all the movies that math the searchWord if isSearch is true to prevent it from sending a request when the page first loads
  const getSearchedMovie = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchWord}`)
    const jsonData = await response.json()
    const searchedMovie = jsonData.results
    if(searchedMovie){
    setSearchedMovies(searchedMovie.sort((x, y) => new Date(y.release_date) - new Date(x.release_date)))
    }else{
    setSearchedMovies([])
    }
  }

  return (
    <>
        <SearchBar
        searchWord={searchWord}
        setSearchWord={setSearchWord}
        />
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
}

export default SearchedMovies;
