import { actionTypes } from "../types";


const initialState = {
  basicPokemons : [],
  pokemonsData: [],
  pokemonSelected: []
};

export const pokemonsReducers = (state = initialState ,action) => {
  switch(action.type){
    case actionTypes.ADD_BASIC_POKEMONS_INFO:
      return {
        ...state,
        basicPokemons: action.payload,
      }
    case actionTypes.ADD_ALL_POKEMON_DATA:
      return {
        ...state,
        pokemonsData: [
          ...state.pokemonsData,
          action.payload
        ]
      }
    case actionTypes.ADD_POKEMON_SELECTED:
      return {
        ...state,
        pokemonSelected: action.payload
      }
    default:
      return {
        ...state
      }
  }
}