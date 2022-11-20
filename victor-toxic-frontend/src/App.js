import { useEffect, useState } from "react";
import MovieCard from "./compontents/MovieCard";
import './App.css'

const API_KEY = '5a6781654589d72c72ce70c1932d38f2'


const App = () =>{
  
  const [movies, setMovies] = useState([])
  
  useEffect(() =>{
    getPopularMovies()
  }, [])

  const getPopularMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
    const jsonData = await response.json()
    const movies = jsonData.results
    setMovies(movies)
  }

  return (
    <div className="container">
      {movies.map((movie) => 
        <MovieCard movie={movie} />
      )}
    </div>
  );
}

export default App;
