import axios from "axios"

export function getPokemonData(url,image) {

    axios.get(url).then((response) => {
        console.log(response)
      const { data } = response;
      const { name, types, height, weight } = data;
      let mainCartData = {
        type: types[0].type.name,
        name,
        height,
        weight,
        image,
      };
      return mainCartData
    });
  }