import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Card } from '../components/Card'
import { Header } from '../components/Header'
import { ListofCards } from '../components/ListofCards'
import { MainCard } from '../components/MainCard'
import { addPokemon } from '../redux/actions/pokemonsAction'
import { getAllPokemons } from '../services/getPokemons'
import styles from '../styles/Home.module.scss'

export default function Home() {

  const [pokemons, setPokemons] = useState([])

  useEffect(async() => {
    //dispatch(addPokemon())
    let response =await getAllPokemons();
    setPokemons(response)
  }, [])

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <section className={styles.list_cards}>
          <ListofCards>
            {
              pokemons?.map(({name,url})=>(
                <Card key={name} name={name} url={url} />
              ))
            }
          </ListofCards>
        </section>
        <section className={styles.card}>
          <MainCard />
        </section>
      </main>
    </div>
  )
}
