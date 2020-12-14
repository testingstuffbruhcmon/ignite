import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const pulseVariant = {
  visible: {
    opacity: [1, 0.5, 1],
    transition: {
      ease: "easeOut",
      times: [0.5, 0.8, 1],
      loop: Infinity,
      duration: 1,
    },
  },
};

const H3var = {
  animate: {
    letterSpacing: ["1px", "2px", "1px"],
    transition: {
      loop: Infinity,
      duration: 0.8,
    },
  },
};
const BasicSkeleton = () => {
  return (
    <>
      <StyledH3 variants={H3var} animate="animate">
        Loading
      </StyledH3>
      <StyledSk className="loader">
        <LoadingDiv variants={pulseVariant} animate={"visible"}></LoadingDiv>
        <LoadingDiv variants={pulseVariant} animate={"visible"}></LoadingDiv>
        <LoadingDiv variants={pulseVariant} animate={"visible"}></LoadingDiv>
        <LoadingDiv variants={pulseVariant} animate={"visible"}></LoadingDiv>
      </StyledSk>
    </>
  );
};
export default BasicSkeleton;
const StyledH3 = styled(motion.h3)`
  position: absolute;
  top: 15rem;
  left: 10rem;
  font-size: 3rem;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(to right, #555, #999);
`;

const StyledSk = styled(motion.div)`
  margin: 0 auto;
  font-size: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35vw, 1fr));
  grid-gap: 5rem;
  padding: 5rem 8rem;
  padding-top: 20rem;
`;

const LoadingDiv = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.09);
  border-radius: 1.8rem;
  height: 45vh;
`;
