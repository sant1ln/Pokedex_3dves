import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from '../components/Card'
import { Header } from '../components/Header'
import { ListofCards } from '../components/ListofCards'
import { MainCard } from '../components/MainCard'
import {addBasicPokemonsInfo } from '../redux/actions/pokemonsAction'
import styles from '../styles/Home.module.scss'
import Head from 'next/head'
import { getAllPokemons } from '../services/getAllPokemons'

export default function Home() {
  
  const [selectedCard,setSelectedCard] = useState({})
  const { basicPokemons: pokemons } = useSelector(state => state.poke);
  const dispatch = useDispatch();

  useEffect(() => {
    let response = getAllPokemons()
    response.then((pokemons)=>{
      dispatch(addBasicPokemonsInfo(pokemons))
    })
    .catch((error)=>console.log(error)) 
  }, [])

  const handleMainCardInfo = (id,image) =>{
    setSelectedCard({id,image})
  }

  return (
    <>
    <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
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
          <MainCard cardSelected={selectedCard}/>
        </section>
      </main>
    </div>
    </>
  )
}
