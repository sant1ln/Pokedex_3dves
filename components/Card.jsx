import Image from "next/image";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNewError } from "../redux/actions/errorActions";
import { addAllPokemonsInfo } from "../redux/actions/pokemonsAction";
import styles from "../styles/Card.module.scss";
import pokemon_logo from "../public/pokemon_logo.png";
import { getPokemonData } from "../services/getAllpokemonInfo";
/* import { Loading } from "../assets/Loading"; */

export const Card = ({ name, url, handleMainCardInfo }) => {
  const [pokemonData, setPokemonsData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
   getPokemonData(url)
      .then(({ name, id, front_default }) => {
        dispatch(addAllPokemonsInfo({ name, id, front_default }));
        setPokemonsData({ name, id, front_default });
      })
      .catch((error) => dispatch(setNewError(error)));
  }, []);

  return (
    <div
      className={styles.card_container}
      onClick={() =>
        handleMainCardInfo(pokemonData.id, pokemonData?.front_default)
      }
    >
      <div className={styles.image_container}>
        <img
          className={styles.image}
          src={pokemonData?.front_default}
        />
      </div>
      <div className={styles.info}>
        <p>{name}</p>
      </div>
    </div>
  );
};
