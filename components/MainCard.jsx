import styles from '../styles/MainCard.module.scss'

export const MainCard = () => {
  return (
    <div className={styles.maincard_container}>
      <div className={styles.image}></div>
      <div className={styles.info}>
        <p>Pokemon name</p>
        <p>Pokemon type</p>
        <p>Pokemon weight</p>
      </div>
    </div>
  )
}
