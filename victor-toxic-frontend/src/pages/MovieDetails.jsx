import React from "react";
import { useLocation } from "react-router-dom";

const MovieDetails = () =>{
    const location = useLocation();

    return(
        <div className="detailedCard">
            <div className="detailedMoviePoster">
                <img src={`https://image.tmdb.org/t/p/original${location.state.movie.poster_path}` ===
                `https://image.tmdb.org/t/p/originalnull`
                ? `https://dummyimage.com/200x300/000000/fff.jpg&text=NO+IMAGE`
                : `https://image.tmdb.org/t/p/original${location.state.movie.poster_path}`} alt=""/>
            </div>

            <div className="detailedMovieTitle">
                <h2>{location.state.movie.title}</h2>
            </div>
            <div className="detailedMovieDescription">
                <h3>{location.state.movie.overview}</h3>
            </div>
        </div>
    )
}

export default MovieDetails