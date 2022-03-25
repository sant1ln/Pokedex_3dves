import styles from '../styles/Card.module.scss'

export const Card = () => {
  return (
    <div className={styles.card_container}>
      <div className={styles.image}></div>
      <div className={styles.info}>
        <p>Pokemon name</p>
        <p>Pokemon type</p>
        <p>Pokemon weight</p>
      </div>
    </div>
  )
}
