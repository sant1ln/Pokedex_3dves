import axios from "axios";

export function getOnePokemon(id,image){
  let url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  return axios.get(url)
    .then((response)=>{
      const { data } = response;
      const { name, types, height, weight } = data;
      let mainCartData = {
        type: types[0].type.name,
        name,
        height,
        weight,
        image,
      };
      return mainCartData;
    })
}