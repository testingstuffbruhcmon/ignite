import { gameReducer } from "./gameReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  games: gameReducer,
});
