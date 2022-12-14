import React from "react";
import { Link } from 'react-router-dom';

//Deconstructing the movie prop so I don't have to use props.move.whatever and instead can just use movie.
const MovieCard = ({movie}) => {
    return(
        <div className="card">
            {/* Link so everytime you press a movie the page redirects the url to /movie.id without refreshing the page */}
            <Link to={{pathname: `/movie/${movie.id}`}} state={{movie: movie}}>
                <div className="moviePoster">
                    {/* Check if image poster exists, otherwise get a dummy poster that says no image */}
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
            </Link>
        </div>
    )
}

export default MovieCard