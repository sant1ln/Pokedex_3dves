import { actionTypes } from "../types"

export const addBasicPokemonsInfo = (data) =>{
  return{
    type: actionTypes.ADD_BASIC_POKEMONS_INFO,
    payload: data
  }
}

export const addAllPokemonsInfo = (data) =>{
  return{
    type: actionTypes.ADD_ALL_POKEMON_DATA,
    payload: data
  }
}

export const addPokemonInfo = (data) =>{
  return{
    type: actionTypes.ADD_POKEMON_SELECTED,
    payload: data
  }
}