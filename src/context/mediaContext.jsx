import axios from "axios";
import { createContext, useEffect, useState } from "react";
import {
  LATEST,
  MOVIE_GENRES,
  TV_GENRES,
  TV_SHOWS,
  SEARCH_MOVIES,
  FILTERED_MOVIES_WITH_GENRES,
  FILTERED_TV_SHOWS_WITH_GENRES,
} from "../service/apiConstants";

export const MediaContext = createContext({});

const fetchData = (url) => axios.get(url);

export const MediaContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [tvGenres, setTVGenres] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [latestTotalPages, setLatestTotalPages] = useState();
  const [tvTotalPages, setTvTotalPages] = useState();
  const [movieSearchResults, setMovieSearchResults] = useState([]);
  const [query, setQuery] = useState("");
  const [searchResultsTotalPages, setSearchResultsTotalPages] = useState();
  const [isTvShow, setIsTvShow] = useState(false);

  useEffect(() => {
    fetchLatestMovies();
    fetchMovieGenres();
    fetchTvShows();
    fetchTvGenres();
    SearchMovies();
  }, [currentPage]);

  const fetchLatestMovies = async () => {
    const { data: movies } = await fetchData(LATEST(currentPage));
    setMovies(movies.results);
    setLatestTotalPages(movies.total_pages);
  };

  const fetchMovieGenres = async () => {
    const { data } = await fetchData(MOVIE_GENRES);
    setMovieGenres(data.genres);
  };

  const fetchTvGenres = async () => {
    const { data } = await fetchData(TV_GENRES);
    setTVGenres(data.genres);
  };

  const fetchTvShows = async () => {
    const { data } = await fetchData(TV_SHOWS(currentPage));
    setTvShows(data.results);
    setTvTotalPages(data.total_pages);
  };

  const SearchMovies = async () => {
    if (!query) return;
    const { data } = await fetchData(SEARCH_MOVIES(currentPage, query));
    setMovieSearchResults(data.results);
    setSearchResultsTotalPages(data.total_pages);
  };

  const handleMovieGenres = async (id) => {
    setMovieGenres(
      movieGenres.map((genre) =>
        genre.id === id
          ? { ...genre, active: !genre.active }
          : { ...genre, active: false }
      )
    );

    const { data } = await axios.get(
      FILTERED_MOVIES_WITH_GENRES(currentPage, id)
    );
    setMovies(data.results);
  };

  const handleTvGenres = async (id) => {
    setTVGenres(
      tvGenres.map((genre) =>
        genre.id === id
          ? { ...genre, active: !genre.active }
          : { ...genre, active: false }
      )
    );

    const { data } = await axios.get(
      FILTERED_TV_SHOWS_WITH_GENRES(currentPage, id)
    );
    setTvShows(data.results);
  };

  return (
    <MediaContext.Provider
      value={{
        movies,
        movieGenres,
        tvShows,
        tvGenres,
        handleMovieGenres,
        handleTvGenres,
        setMovies,
        currentPage,
        setCurrentPage,
        setLatestTotalPages,
        latestTotalPages,
        tvTotalPages,
        searchResultsTotalPages,
        setQuery,
        SearchMovies,
        movieSearchResults,
        query,
        isTvShow,
        setIsTvShow,
      }}
    >
      {children}
    </MediaContext.Provider>
  );
};
