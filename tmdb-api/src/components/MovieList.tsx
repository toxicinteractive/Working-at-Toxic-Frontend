import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useGetMoviesQuery } from "../store/rtkApi";
import { getSearchQuery, setSearchQuery } from "../store/search";
import { IApiResponse, IMovie } from "../store/types/Api";
import SearchBox from "./SearchBox";

function MovieList(): JSX.Element {
  const { searchQuery } = useSelector(getSearchQuery);

  const dispatch = useDispatch();

  const { data } = useGetMoviesQuery<IApiResponse>(); // API response

  const link = "https://image.tmdb.org/t/p/w500/";

  const filteredMovies = data?.results.filter((movie: IMovie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  };

  if (!data) {
    return <h1 style={{ color: "white" }}>Loading...</h1>;
  }

  return (
    <>
      <SearchBox onSearch={handleSearch} searchQuery={searchQuery} />
      <Container>
        {filteredMovies.map((movie: IMovie) => (
          <div key={movie.id}>
            <ul style={{ all: "unset" }}>
              <StyledLi>{movie.title}</StyledLi>
            </ul>
            <StyledImgContainer>
              <StyledImgContainerHover>
                <Link style={{ all: "unset" }} to={`/movie/${movie.id}`}>
                  <StyledImg src={link + movie.poster_path} />
                </Link>
              </StyledImgContainerHover>
              <span className="fa-solid fa-star">
                <span>{movie.vote_average}</span>
              </span>
            </StyledImgContainer>
          </div>
        ))}
      </Container>
    </>
  );
}

export default MovieList;

const Container = styled.div`
  margin-left: 8px;
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-flow: row dense;
  grid-gap: 20px;
`;

const StyledLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bolder;
`;

const StyledImgContainer = styled.div`
  width: 250px;
  height: 350px;
  padding: 10px;
  margin: 10px;
  object-fit: cover;
  position: relative;

  &:hover {
    & > span {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 1;
      color: #fbff00;
      font-size: 32px;
      transform: translate(-50%, -50%);
      user-select: none;
      pointer-events: none;
    }
    span:nth-child(1) {
      font-weight: bold;
      margin-left: 8px;
      color: white;
    }
  }
`;

const StyledImgContainerHover = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  transition: transform 0.1s ease-in-out;
  cursor: pointer;

  &:hover {
    filter: brightness(40%);
    transform: scale(1.1);
  }
`;

const StyledImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;
