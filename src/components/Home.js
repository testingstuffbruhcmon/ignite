import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameActionCreator } from "../actions/gameActions";
import { motion } from "framer-motion";
import styled from "styled-components";
//components
import MappedGames from "./MappedGames";
import BasicSkeleton from "../components/skeletons/basicSkeleton";
import GameDetail from "../components/GameDetail";
import { useLocation } from "react-router-dom";
// import { connect } from "react-redux";

const Home = () => {
  // props.randomAct(); <= old way of doing things with dispatchtoprops
  // dispatch(gameActionCreator());
  const pathId = useLocation().pathname.split("/")[2];

  const { upcoming, latest, popular, isLoading } = useSelector(
    (store) => store.games
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gameActionCreator());
  }, [dispatch]);

  return isLoading ? (
    <BasicSkeleton />
  ) : (
    <>
      {pathId && <GameDetail />}
      <StyledWrapper>
        <h2>Upcoming Games</h2>
        <StyledGames>
          {upcoming.map((upcomingGame) => {
            return (
              <MappedGames
                key={upcomingGame.id}
                id={upcomingGame.id}
                name={upcomingGame.name}
                image={upcomingGame["background_image"]}
                released={upcomingGame.released}
              />
            );
          })}
        </StyledGames>
        <h2>Popular Games</h2>
        <StyledGames>
          {popular.map((popularGame) => {
            return (
              <MappedGames
                key={popularGame.id}
                id={popularGame.id}
                name={popularGame.name}
                image={popularGame["background_image"]}
                released={popularGame.released}
              />
            );
          })}
        </StyledGames>
        <h2>Latest games</h2>
        <StyledGames>
          {latest.map((latestGame) => {
            return (
              <MappedGames
                id={latestGame.id}
                key={latestGame.id}
                name={latestGame.name}
                image={latestGame["background_image"]}
                released={latestGame.released}
              />
            );
          })}
        </StyledGames>
      </StyledWrapper>
    </>
  );
};

export default Home;
//Old way of doing dispatches? still viable but more to code
// const mapDispatchToProps = (dispatch) => {
//   return {
//     randomAct: () => {
//       gameActionCreator(dispatch);
//     },
//   };
// };

// export default connect(null, mapDispatchToProps)(Home);

const StyledWrapper = styled(motion.div)`
  min-height: 90vh;
  padding: 5rem;
  h2 {
    padding-left: 5rem;
    margin: 2rem 0;
    font-size: 3.5rem;
    font-family: "Lora", serif;
    font-weight: 600;
    color: #333333;
    text-transform: uppercase;
  }
`;

const StyledGames = styled(motion.div)`
  border-radius: 1rem;
  overflow: hidden;
  /* box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2); */
  padding: 5rem;
  display: grid;
  grid-gap: 5rem;
  grid-column-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(35vw, 1fr));
`;
