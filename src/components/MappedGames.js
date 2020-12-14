import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { sizedImg } from "../services/imageUtil";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import fetchSingle from "../actions/fetchSingle";
const hoverVariant = {
  scale: 1.05,
  transition: {
    duration: 0.3,
  },
};

const MappedGames = ({ name, released, image, id }) => {
  const dispatch = useDispatch();

  const fetchDetail = (e) => {
    e.preventDefault();
    console.log("hey hey");
    dispatch(fetchSingle(id));
    document.body.style.overflow = "hidden";
  };
  return (
    <StyledItem
      whileHover={hoverVariant}
      whileTap={{ scale: 1.04 }}
      onClick={fetchDetail}
    >
      <StyledLink to={`/games/${id}`}>
        <div className="name">{name}</div>
        <div className="releasedate">{released}</div>
        <img src={sizedImg(image, 1920)} alt={name} loading="lazy" />
      </StyledLink>
    </StyledItem>
  );
};

export default MappedGames;

const StyledLink = styled(Link)`
  text-decoration: none;

  .name {
    font-size: 2.5rem;
    color: #222;
    font-weight: 500;
    margin-bottom: 2.5rem;
  }
  .releasedate {
    font-size: 1.5rem;
    color: #555;
    margin-bottom: 1rem;
  }
`;

const StyledItem = styled(motion.div)`
  box-shadow: 0px 3px 15px rgba(180, 180, 0, 0.35);
  overflow: hidden;
  height: 50vh;
  border-radius: 1.1rem;
  text-align: center;
  padding-top: 2rem;

  img {
    display: block;
    height: 105%;
    object-fit: cover;
    width: 100%;
  }
`;
