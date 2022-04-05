import axios from 'axios'

export function getPokemonData(url) {
  let data = axios.get(url)
    .then((response) => {
      const { data } = response;
      const {
        name,
        id,
        sprites: { other },
      } = data;
      const {
        dream_world: { front_default },
      } = other;
      return { name, id, front_default }
    })
    .catch((error) => error)
  return data
}