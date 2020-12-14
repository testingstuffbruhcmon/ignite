import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { withRouter } from "react-router-dom";
const GameDetail = ({ history }) => {
  const returnToMain = (e) => {
    e.stopPropagation();
    if (~Array.from(e.target.classList).indexOf("overlay")) {
      document.body.style.overflow = "visible";
      history.push("/");
    }
  };
  return (
    <StyledGameDetailWrapper className="overlay" onClick={returnToMain}>
      <StyledGameDetail> GAME DETAILS GONNA GO HERE</StyledGameDetail>
    </StyledGameDetailWrapper>
  );
};

export default withRouter(GameDetail);
const StyledGameDetail = styled(motion.div)`
  height: auto;
  width: 90%;
  height: 20vh;
  margin: auto;
`;

const StyledGameDetailWrapper = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh; //auto later
  width: 100%;
  margin: 0 auto;
  z-index: 1;
  .lalala {
    background-color: cyan;
    width: 50%;
    height: 50%;
    position: absolute;
    z-index: 20;
  }
`;
