import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPokemonInfo } from "../redux/actions/pokemonsAction";
import styles from "../styles/MainCard.module.scss";

export const MainCard = ({ cardSelected }) => {
  let url = `https://pokeapi.co/api/v2/pokemon/${cardSelected}/`;
  const dispatch = useDispatch();

  useEffect(() => {
    if (cardSelected) {
      function getPokemonData() {
        axios.get(url).then((response) => {
          const { data } = response;
          dispatch(addPokemonInfo(data));
        });
      }
      try {
        getPokemonData();
      } catch (error) {
        console.log(error);
      }
    }
  }, [cardSelected]);

  return (
    <div className={styles.maincard_container}>
      <div className={styles.image}></div>
      <div className={styles.info}>
        <p>Pokemon name</p>
        <p>Pokemon type</p>
        <p>Pokemon weight</p>
      </div>
    </div>
  );
};
