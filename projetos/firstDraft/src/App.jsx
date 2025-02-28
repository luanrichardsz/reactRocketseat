// componente é toda função que retorna HTML
//  JSX = JavaScript + XML
import { Post } from './Post'; // Named Exports

export function App() {
  return (
  <div>
    <Post 
      author="Luan Richard" 
      content="Tricolor de coração caralho" 
    />

    <Post
      author="Suzana Hellen"
      content="Girl of my life"
    />
  </div>
  )
}

