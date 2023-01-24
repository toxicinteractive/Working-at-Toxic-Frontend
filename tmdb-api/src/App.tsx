import { Route, BrowserRouter, Routes } from "react-router-dom";
import styled from "styled-components";
import Movie from "./components/Movie";
import MovieList from "./components/MovieList";

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/movie/:id" element={<Movie />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;

const Container = styled.div`
  margin-top: 8px;
`;
