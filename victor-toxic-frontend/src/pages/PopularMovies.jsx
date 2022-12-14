import { useEffect, useState } from "react";
import MovieCard from "../compontents/MovieCard";


const API_KEY = '5a6781654589d72c72ce70c1932d38f2'

const PopularMovies = () =>{
  
  const [movies, setMovies] = useState([])
  
  //When the page renders it goes to the get getPopularMovies function
  useEffect(() =>{
    getPopularMovies()
  }, [])


  //Fetch all the popular movies and sort them by release date
  const getPopularMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
    const jsonData = await response.json()
    const movies = jsonData.results.sort((x, y) => new Date(y.release_date) - new Date(x.release_date))
    setMovies(movies)
  }



  return (
        <>
        {movies.map((movie, index) => 
            <div key={index}>
                <MovieCard movie={movie} />
            </div>
        )}
        </>)
}

export default PopularMovies;
