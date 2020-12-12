import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import gameActionCreator from "../actions/gameActions";

import { connect } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gameActionCreator());
    // props.randomAct(); <= old way of doing things with dispatchtoprops
    // dispatch(gameActionCreator());
  }, []);

  return <div className="home">Hey from home</div>;
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
