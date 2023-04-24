import { Calculator } from './components/Calculator'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Calculator />
      <Footer />
    </div>
  )
}
