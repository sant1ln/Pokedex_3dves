import Image from "next/image";
import styles from '../styles/Header.module.scss'
import pokemon_logo from '../public/pokemon_logo.png'

export const Header = () => {
  return (
    <div className={styles.header_container}>
      <Image 
      width={160}
      height={60}
      src={pokemon_logo} />
    </div>
  );
};
