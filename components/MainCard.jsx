import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPokemonInfo } from "../redux/actions/pokemonsAction";
import pokemon_logo from "../public/pokemon_logo.png";
import styles from "../styles/MainCard.module.scss";
import Image from "next/image";
import { setNewError } from "../redux/actions/errorActions";

export const MainCard = ({ cardSelected }) => {
  const { id, image } = cardSelected;
  const { pokemonSelected } = useSelector((state) => state.poke);
  const { name, height, type, image: pokemonImage } = pokemonSelected;
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      let url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
      function getPokemonData() {
        axios.get(url).then((response) => {
          const { data } = response;
          const { name, types, height, weight } = data;
          let mainCartData = {
            type: types[0].type.name,
            name,
            height,
            weight,
            image,
          };
          dispatch(addPokemonInfo(mainCartData));
        });
      }
      try {
        getPokemonData();
      } catch (error) {
        dispatch(setNewError(error));
      }
    }
  }, [cardSelected]);

  if (id) {
    return (
      <div className={styles.maincard_container}>
        <div className={styles.image_container}>
          <img className={styles.image} src={pokemonImage} alt={name} />
        </div>
        <div className={styles.info}>
          <p className={styles.name}> {name}</p>
          <p className={styles.other_info}>Height - {height}</p>
          <p className={styles.other_info}>Type - {type}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.maincard_container}>
        <div className={styles.image_container}>
          <Image className={styles.image_default} src={pokemon_logo} priority/>
        </div>
        <div className={styles.info}>
          <p className={styles.name}>Seleciona un pokemon.</p>
        </div>
      </div>
    );
  }
};
