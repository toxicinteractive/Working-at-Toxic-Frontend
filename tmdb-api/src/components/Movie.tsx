import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useGetMovieQuery } from "../store/rtkApi";
import { IApiResponseSingle } from "../store/types/Api";

function Movie(): JSX.Element {
  const { id } = useParams();

  const { data: movie } = useGetMovieQuery<IApiResponseSingle>(id); // the API

  // release year in year only
  const releaseYear = movie?.release_date?.slice(0, 4);

  // movie genres
  const genres = movie?.genres.map((g) => g.name);

  // movie languages
  const languages = movie?.spoken_languages.map((lang) => lang.english_name);

  const movieVotes = movie?.vote_average;

  const link = "https://www.themoviedb.org/t/p/original/";

  if (!movie) {
    return <h1 style={{ color: "white" }}>Loading...</h1>;
  }

  return (
    <Container>
      <Poster src={link + movie?.poster_path} alt="movie" />
      <InfoContainer link={link} movie={movie}>
        <Title>
          {movie?.title} ({releaseYear})
          <span className="fa-solid fa-star">
            <span>{movieVotes} / 10 Rating</span>
          </span>
        </Title>
        <Genre> {"Genre | " + genres}</Genre>
        <Overview>{movie?.overview}</Overview>
        <Language>{"Language: " + languages}</Language>
      </InfoContainer>
    </Container>
  );
}

export default Movie;

interface MovieProps {
  link: string;
  movie: any;
}

const Container = styled.div`
  display: flex;
  margin-top: 32px;
  margin-right: 16px;
`;

const Poster = styled.img`
  width: 30%;
  height: 500px;
  margin-left: 24px;
  border-radius: 8px;
`;

const InfoContainer = styled.div<MovieProps>`
  position: relative;
  margin-left: 8px;
  width: 70%;
  padding: 24px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${({ link, movie }) => link + movie?.backdrop_path});
    filter: brightness(30%) saturate(100%);
    border-radius: 8px;
    background-size: cover;
    z-index: -1;
    box-shadow: inset 0 0 100px black;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
  color: white;

  .fa-solid.fa-star {
    color: gold;
    margin-left: 8px;
    font-size: 16px;
  }

  .fa-solid.fa-star span:first-child {
    margin-left: 8px;
    color: white;
    font-size: 16px;
    font-style: italic;
  }
`;

const Genre = styled.p`
  margin-top: 24px;
  color: hsla(0, 0%, 100%, 0.718);
  font-style: italic;
`;

const Overview = styled.p`
  margin-top: 48px;
  font-size: 1.2rem;
  line-height: 1.5;
  color: white;
  border-radius: 24px;
`;

const Language = styled.p`
  margin-top: 100px;
  color: hsla(0, 0%, 100%, 0.718);
  font-style: italic;
`;
