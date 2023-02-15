import { motion } from "framer-motion";
import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Genre } from "../components/GenreButton";
import { MediaCard } from "../components/MediaCard";
import container from "../utils/fmConstants";
import { Pagination } from "../components/Pagination";
import { MediaContext } from "../context/mediaContext";

export default function Moviepage() {
  const {
    handleMovieGenres,
    latestTotalPages,
    movies,
    movieGenres,
    setIsTvShow,
  } = useContext(MediaContext);

  useEffect(() => {
    setIsTvShow(false);
  }, [0]);

  return (
    <>
      <Container className='mt-4'>
        <motion.div
          variants={container}
          initial='hidden'
          animate='visible'
          className='genres d-flex flex-wrap '
          style={{
            gap: "5px 15px",
          }}
        >
          {movieGenres?.map((item) => (
            <Genre
              id={item.id}
              title={item.name}
              key={item.id}
              active={item.active}
              handleGenres={handleMovieGenres}
            />
          ))}
        </motion.div>
        <div className='wrapper mt-4'>
          <Row md={3} xs={1} lg={4} className='g-4'>
            {movies?.map((item) => (
              <Col key={item.id}>
                <MediaCard movie={item} tvShow={false} />
              </Col>
            ))}
          </Row>
        </div>
        <div className='mt-5 d-flex justify-content-center'>
          <Pagination totalPages={latestTotalPages} />
        </div>
      </Container>
    </>
  );
}
