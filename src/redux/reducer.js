import { combineReducers } from "redux";
import { carsReducer } from "./cars/slice";
import { favoritesReducer } from "./favorite/slice";

export const rootReducer = combineReducers({
    cars: carsReducer,
    favorites: favoritesReducer,
  });