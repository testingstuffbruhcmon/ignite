import axios from "axios";

const fetchSingle = (gameId) => {
  return async (dispatch) => {
    let itemInfo = await axios.get(`https://api.rawg.io/api/games/${gameId}`);
    dispatch({
      type: "GAME_INFO",
      payload: {
        gameDetail: itemInfo.data,
      },
    });
  };
};

export default fetchSingle;
