// componente é toda função que retorna HTML
//  JSX = JavaScript + XML
import { Post } from './Post'; // Named Exports
import { Header } from './Header';
import './global.css'; // importando um CSS Global
import styles from './App.module.css'; // importando um CSS Module

export function App() {
  return (
  <div>
    <Header />

    <div className="wrapper">
      <aside> sidebar </aside>
      <main>
      <Post 
        author="Luan Richard" 
        content="Tricolor de coração caralho" 
      />

      <Post
        author="Suzana Hellen"
        content="femme dans la vie de Luan"
      />
      </main>
    </div>
  </div>
  )
}

