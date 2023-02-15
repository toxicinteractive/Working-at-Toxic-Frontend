import { motion } from "framer-motion";
import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Genre } from "../components/GenreButton";

import { Pagination } from "../components/Pagination";
import { MediaCard } from "../components/MediaCard";
import { MediaContext } from "../context/mediaContext";

import container from "../utils/fmConstants";

export default function Tvpage() {
  const { tvShows, tvGenres, handleTvGenres, tvTotalPages, setIsTvShow } =
    useContext(MediaContext);
  useEffect(() => {
    setIsTvShow(true);
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
          {tvGenres?.map((item) => (
            <Genre
              key={item.id}
              title={item.name}
              id={item.id}
              active={item.active}
              handleGenres={handleTvGenres}
            />
          ))}
        </motion.div>
        <div className='wrapper mt-4'>
          <Row md={3} xs={1} lg={4} className='g-4'>
            {tvShows.map((item) => (
              <Col key={item.id}>
                <MediaCard movie={item} tvShow={true} />
              </Col>
            ))}
          </Row>
        </div>
        <div className='mt-5 d-flex justify-content-center'>
          <Pagination totalPages={tvTotalPages} />
        </div>
      </Container>
    </>
  );
}
