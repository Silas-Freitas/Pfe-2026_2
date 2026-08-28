import styles from './page.module.css'
import MiniBio from '../Componentes/MiniBio'

export default function Home(){
  return(
    <div className = {styles.page}>
      <h1>Seja bem vindo, e me conheça melhor</h1>
      <MiniBio/>
    </div>

  )
}