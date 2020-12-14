import axios from "axios";
import { popularURL, upcomingURL, latestURL } from "../services/customUrls";

export const gameActionCreator = () => {
  return async (dispatch) => {
    let popular = await axios.get(popularURL());
    let upcoming = await axios.get(upcomingURL());
    let latest = await axios.get(latestURL());

    dispatch({
      type: "FETCH_GAMES",
      payload: {
        latest: latest.data.results,
        upcoming: upcoming.data.results,
        popular: popular.data.results,
      },
    });
  };
};

export default gameActionCreator;
