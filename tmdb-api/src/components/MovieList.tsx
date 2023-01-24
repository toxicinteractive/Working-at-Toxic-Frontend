import { useGetMoviesQuery } from "../store/rtkApi";

function MovieList(): JSX.Element {
  const { data } = useGetMoviesQuery(); // API response

  console.log(data);

  return <h1>MOVIES</h1>;
}

export default MovieList;
