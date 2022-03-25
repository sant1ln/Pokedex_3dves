import axios from "axios"
import Image from "next/image";
import { useState,useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setNewError } from "../redux/actions/errorActions";
import { addAllPokemonsInfo } from "../redux/actions/pokemonsAction";
import styles from '../styles/Card.module.scss';

export const Card = ({name,url,handleMainCardInfo}) => {
  const [pokemonData, setPokemonsData] = useState([]);
  const dispatch = useDispatch()

  useEffect(()=>{
    function getPokemonData(){
       axios.get(url)
        .then((response)=>{
          const {data} = response;
          const {name,id,sprites:{other}} = data
          const {dream_world:{front_default}} = other;
          dispatch(addAllPokemonsInfo({name,id,front_default}) )
          setPokemonsData({name,id,front_default})
        })      
    }
    try{ 
      getPokemonData()
    }catch(error){
      dispatch(setNewError(error));
    }
  },[])
  return (
    
    <div className={styles.card_container} onClick={()=>handleMainCardInfo(pokemonData.id,pokemonData?.front_default)}>
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
  )
}
