const initStore = {
  detail: [],
  screenShots: [],
  isLoading: true,
};
export const detailReducer = (store = initStore, action) => {
  if (action.type === "GAME_INFO") {
    return {
      ...store,
      detail: action.payload.gameDetail,
      screenShots: action.payload.screenShots,
      isLoading: false,
    };
  }
  return {
    ...store,
  };
};
export default detailReducer;
