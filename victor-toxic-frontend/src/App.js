import { useState } from "react";
import {Routes, Route} from "react-router-dom"
import MovieDetails from "./pages/MovieDetails"
import NavBar from "./compontents/NavBar";
import './App.css'
import PopularMovies from "./pages/PopularMovies";
import SearchedMovies from "./pages/SearchedMovies";

const App = () =>{
  
  const [isSearch, setisSearch] = useState(false)

  return (
    //"Base" router for the Links inside MovieCard, unfortunantly i did not have the time to finish the routing
      <div className="container">
        <NavBar 
        isSearch={isSearch}
        setisSearch={setisSearch}
        />
        <Routes>
          <Route path="/" element={<PopularMovies />} />
          <Route path="/movie/:id" element={<MovieDetails/>}/>
          <Route path="/Search/*" element={<SearchedMovies />} />
        </Routes>
      </div>
  )
}

export default App;
