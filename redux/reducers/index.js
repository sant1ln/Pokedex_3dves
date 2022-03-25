import { combineReducers } from "redux";
import {pokemonsReducers} from './pokemonsReducer'

export const reducers = combineReducers({
  poke: pokemonsReducers
})