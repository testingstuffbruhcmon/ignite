const initStore = {
  latest: [],
  popular: [],
  upcoming: [],
};

export const gameReducer = (store = initStore, action) => {
  if (action.type === "FETCH_GAMES" && action.payload) {
    return {
      ...store,
      latest: action.payload.latest,
      popular: action.payload.popular,
      upcoming: action.payload.upcoming,
    };
  }

  return {
    ...store,
  };
};
