// componente é toda função que retorna HTML
//  JSX = JavaScript + XML
import { Post } from './components/Post'; // Named Exports
import { Header } from './components/Header';
import './global.css'; // importando um CSS Global
import styles from './App.module.css'; // importando um CSS Module
import { Sidebar } from './components/sidebar';

export function App() {
  return (
  <div>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar/>
      
      <main>
      <Post />

      <Post/>
      </main>
    </div>
  </div>
  )
}

