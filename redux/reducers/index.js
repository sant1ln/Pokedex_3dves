import { combineReducers } from "redux";
import { errorReducers } from "./errorReducer";
import {pokemonsReducers} from './pokemonsReducer'

export const reducers = combineReducers({
  poke: pokemonsReducers,
  error: errorReducers
})