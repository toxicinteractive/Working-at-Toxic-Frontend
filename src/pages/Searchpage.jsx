import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { SearchBar } from "../components/Search";
import { Pagination } from "../components/Pagination";
import { MediaCard } from "../components/MediaCard";
import { MediaContext } from "../context/mediaContext";

export default function Search() {
  const { movieSearchResults, searchResultsTotalPages, setIsTvShow } =
    useContext(MediaContext);

  useEffect(() => {
    setIsTvShow(false);
  }, [0]);
  return (
    <>
      <Container className='mt-4'>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
          className='wrapper mt-4'
        >
          <SearchBar />
          <Row md={3} xs={1} lg={4} className='g-4 mt-3'>
            {movieSearchResults?.map((item) => (
              <Col key={item.id}>
                <MediaCard movie={item} />
              </Col>
            ))}
          </Row>
        </div>
        {movieSearchResults.length > 0 && (
          <div className='mt-5 d-flex justify-content-center'>
            <Pagination totalPages={searchResultsTotalPages} />
          </div>
        )}
      </Container>
    </>
  );
}
