import logoApp from '../assets/logo.svg'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoApp} alt="logo" />
    </header>
  )
}
