
import styles from '../styles/ListCards.module.scss'
import { Card } from './Card'

export const ListofCards = ({children}) => {
  return (
    <div className={styles.list_container}>
      {children}
    </div>
  )
}
