import React, { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { MediaContext } from "../context/mediaContext";

export const SearchBar = () => {
  const { setQuery, query, SearchMovies } = useContext(MediaContext);

  const handleSearch = (e) => {
    e.preventDefault();
    SearchMovies();
  };

  return (
    <Form onSubmit={handleSearch} id='form' className=' d-flex gap-3 w-50'>
      <Form.Control
        className='search-box py-2'
        placeholder='search for movies'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button
        onClick={handleSearch}
        style={{
          background: "#00CE79",
          border: "none",
          color: "black",
        }}
        className='search-btn'
      >
        Search
      </Button>
    </Form>
  );
};
