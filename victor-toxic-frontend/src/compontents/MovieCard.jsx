import React from "react";

const MovieCard = ({movie}) => {
    return(
        <div className="card">
            <div className="moviePoster">
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}` ===
                `https://image.tmdb.org/t/p/originalnull`
                  ? `https://dummyimage.com/400x600/000000/fff.jpg&text=NO+IMAGE`
                  : `https://image.tmdb.org/t/p/original${movie.poster_path}`} alt=""/>
                    <div className="movieRating">
                        <p>Average score:{movie.vote_average}</p>
                    </div>
            </div>

            <div className="movieTitle">
                <h2>{movie.title}</h2>
            </div>
        </div>
    )
}

export default MovieCard