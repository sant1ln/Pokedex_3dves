import Image from 'next/image'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Header } from '../components/Header'
import { addPokemon } from '../redux/actions/pokemonsAction'
import styles from '../styles/Home.module.css'

export default function Home() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(addPokemon())
  },[])

  return (
    <div className={styles.container}>
        <Header />
    </div>
  )
}
