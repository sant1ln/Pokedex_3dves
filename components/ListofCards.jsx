
import styles from '../styles/ListCards.module.scss'
import { Card } from './Card'

export const ListofCards = () => {
  return (
    <div className={styles.list_container}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}
