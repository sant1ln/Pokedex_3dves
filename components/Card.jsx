import axios from "axios"
import Image from "next/image";
import { useState,useEffect } from 'react'
import styles from '../styles/Card.module.scss'

export const Card = ({name,url}) => {
  const [pokemonData, setPokemonsData] = useState([]);

  useEffect(()=>{
    async function getPokemonData(){
      const response = await axios.get(url)
      const data = await response.data
      const {name,id,sprites:{front_default}} = data
      const pokemon =[ {name,id,front_default}]
      setPokemonsData(pokemon)
    }
    try{ 
      getPokemonData()
    }catch{
      console.log(error)
    }
  },[])

  console.log(pokemonData)

  return (
    
    <div className={styles.card_container}>
      <div className={styles.image_container}>
        <img 
          className={styles.image}
          src={pokemonData[0]?.front_default}
        />
        
      </div>
      <div className={styles.info}>
        <p>{name}</p>
      </div>
    </div>
  )
}
