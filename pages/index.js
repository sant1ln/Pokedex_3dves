import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Header } from '../components/Header'
import { ListofCards } from '../components/ListofCards'
import { MainCard } from '../components/MainCard'
import { addPokemon } from '../redux/actions/pokemonsAction'
import styles from '../styles/Home.module.scss'

export default function Home() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addPokemon())
  }, [])

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <section className={styles.list_cards}>
          <ListofCards />
        </section>
        <section className={styles.card}>
          <MainCard/> 
        </section>
      </main>
    </div>
  )
}
