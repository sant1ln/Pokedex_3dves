import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from '../components/Card'
import axios from 'axios'
import { Header } from '../components/Header'
import { ListofCards } from '../components/ListofCards'
import { MainCard } from '../components/MainCard'
import {addBasicPokemonsInfo } from '../redux/actions/pokemonsAction'
import styles from '../styles/Home.module.scss'

export default function Home() {

  const [selectedCard,setSelectedCard] = useState(null)
  const { basicPokemons: pokemons } = useSelector(state => state.poke);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getAllPokemons() {
      const URL = 'https://pokeapi.co/api/v2/pokemon/'
      const response = await axios.get(URL);
      const data = await response.data;
      const pokemons = data.results;
      dispatch(addBasicPokemonsInfo(pokemons))
    }
    try {
      getAllPokemons();
    } catch {
      console.error(error)
    }
  }, [])

  const handleMainCardInfo = (id) =>{
    setSelectedCard(id)
  }

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <section className={styles.list_cards}>
          <ListofCards>
            {
              pokemons?.map(({ name, url }) => (
                <Card key={name} name={name} url={url} handleMainCardInfo={handleMainCardInfo} />
              ))
            }
          </ListofCards>
        </section>
        <section className={styles.card}>
          <MainCard cardSelected={selectedCard} />
        </section>
      </main>
    </div>
  )
}
