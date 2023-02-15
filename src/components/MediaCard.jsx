import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  IMAGE_LINK,
  IMAGE_UNAVAILABLE_PLACEHOLDER,
} from "../service/apiConstants";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const MediaCard = ({ movie }) => {
  const navigate = useNavigate();
  const [style, setStyle] = useState({ display: "none" });

  return (
    <motion.div
      onMouseEnter={(e) => {
        setStyle({ display: "block" });
      }}
      onMouseLeave={(e) => {
        setStyle({ display: "none" });
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 30,
      }}
    >
      <Card
        style={{
          width: "100%",
          color: "white",
          borderRadius: 5,
          position: "relative",
        }}
        className=' movie-card bg-dark'
      >
        <Card.Body style={{ minHeight: "500px" }}>
          <LazyLoadImage
            src={
              !movie.poster_path || !movie.backdrop_path
                ? IMAGE_UNAVAILABLE_PLACEHOLDER
                : `${IMAGE_LINK}${movie.backdrop_path}`
            }
            width={"100%"}
            height={350}
            alt='movie'
            effect='blur'
            style={{ objectFit: "cover" }}
          />
          <Card.Title
            onClick={() => navigate(`/${movie.id}`)}
            className='text-center mt-3'
            style={{ cursor: "pointer" }}
          >
            {movie.name || movie.title}

            <h3 style={style}>Rating: {movie.vote_average}</h3>
          </Card.Title>
        </Card.Body>
      </Card>
    </motion.div>
  );
};
