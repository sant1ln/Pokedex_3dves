import axios from 'axios'

export function getAllPokemons() {
  const URL = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50'
  let data = axios.get(URL)
    .then((response) => {
      const { data } = response;
      const pokemons = data.results;
      return pokemons
    })
    .catch((error) => error)
  return data
}