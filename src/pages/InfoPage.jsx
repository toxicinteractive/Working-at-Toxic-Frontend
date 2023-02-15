import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { API_KEY, IMAGE_LINK } from "../service/apiConstants";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { MediaContext } from "../context/mediaContext";

export default function InfoPage() {
  const { isTvShow } = useContext(MediaContext);
  const [movieInfo, setMovieInfo] = useState();
  const [movieCast, setMovieCast] = useState([]);

  const params = useParams();
  const { id: movieId } = params;

  const fetchMovieDetails = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${
        isTvShow ? "tv" : "movie"
      }/${movieId}?api_key=${API_KEY}&language=en-US`
    );

    setMovieInfo(data);
  };

  const fetchMovieCast = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${
        isTvShow ? "tv" : "movie"
      }/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    setMovieCast(data.cast);
  };

  useEffect(() => {
    fetchMovieDetails();
    fetchMovieCast();
  }, [movieId]);

  return (
    <>
      <Container>
        <div className='wrapper mt-4'>
          <div id='movie-data' className=' d-flex gap-5'>
            <img
              style={{
                borderRadius: 5,
                boxShadow: "rgb(46 255 14 / 10%) -1px -1px 57px 1px",
                width: 350,
                height: 500,
                objectFit: "cover",
              }}
              src={`${IMAGE_LINK}${movieInfo?.backdrop_path}`}
              alt='movie thumnail'
            />
            <div
              className='mt-5'
              style={{
                backgroundColor: "#5f051f",
                padding: "1rem",
                borderRadius: "5px",
              }}
            >
              <h3 style={{ fontSize: 33, color: "white" }}>
                {movieInfo?.title}
              </h3>

              <p style={{ color: "#f3f3f3", marginTop: 15, lineHeight: 1.8 }}>
                {movieInfo?.overview}
              </p>
              <p style={{ color: "#f3f3f3", fontWeight: "bold" }}>
                Release Date: {movieInfo?.release_date}
              </p>
              <p style={{ color: "#f3f3f3", fontWeight: "bold" }}>
                Rating: {movieInfo?.vote_average}
              </p>
            </div>
          </div>
          <div className='mt-5'>
            <h2 style={{ color: "white" }}>Cast</h2>
            <div className='d-flex flex-wrap gap-5 mt-5'>
              {movieCast?.map((cast) => (
                <div
                  key={cast.id}
                  style={{ display: "grid", placeItems: "center" }}
                >
                  <LazyLoadImage
                    width={100}
                    height={100}
                    style={{
                      objectFit: "cover",
                    }}
                    src={`${IMAGE_LINK}${cast.profile_path}`}
                    alt='user'
                  />
                  <p
                    className='m-0 mt-2 mb-1 '
                    style={{ color: "white", textAlign: "center" }}
                  >
                    {cast.name}
                  </p>
                  <p style={{ color: "white", textAlign: "center" }}>
                    {cast.character}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
