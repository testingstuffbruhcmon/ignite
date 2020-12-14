const initStore = {
  latest: [],
  popular: [],
  upcoming: [],
  isLoading: true,
};

export const gameReducer = (store = initStore, action) => {
  if (action.type === "FETCH_GAMES") {
    return {
      ...store,
      latest: action.payload.latest,
      popular: action.payload.popular,
      upcoming: action.payload.upcoming,
      isLoading: false,
    };
  }
  return {
    ...store,
  };
};
export default gameReducer;
