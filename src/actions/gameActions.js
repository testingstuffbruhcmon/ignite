import axios from "axios";
import { popularURL, upcomingURL, latestURL } from "../services/customUrls";

// THE OLD WAY WITH MAPDISPATCHTOPROPS
// const gameActionCreator = (dispatchtest) => {
//   async function lol() {
//     const popular = await axios.get(popularURL());
//     const upcoming = await axios.get(upcomingURL());
//     const latest = await axios.get(latestURL());

//     dispatchtest({
//       type: "FETCH_GAMES",
//       payload: {
//         latest: latest.data.results,
//         upcoming: upcoming.data.results,
//         popular: popular.data.results,
//       },
//     });
//   }
//   lol();
// };

//The supposed new way with thunk
const gameActionCreator = () => {
  return async (dispatch) => {
    const popular = await axios.get(popularURL());
    const upcoming = await axios.get(upcomingURL());
    const latest = await axios.get(latestURL());

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
