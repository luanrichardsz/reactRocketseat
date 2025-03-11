// componente é toda função que retorna HTML
//  JSX = JavaScript + XML
import { Post } from './components/Post'; // Named Exports
import { Header } from './components/Header';
import './global.css'; // importando um CSS Global
import styles from './App.module.css'; // importando um CSS Module
import { Sidebar } from './components/sidebar';

// author: { avatar_url: "", name: "", role:"" }
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatar_url: "https:github.com/goku.png",
      name: "Goku",
      role: "Lutador Front-End"
    },
    content: [ //backend tem que retornar em markdown pos, mandando html o site fica vulneravel
        { type: 'paragraph', content:'Fala galeraa 👋'},
        { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'}, 
        { type: 'link', content:'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2025-03-10 20:00:00'), 
  },
  {
    id: 2,
    author: {
      avatar_url: "https:github.com/luanrichardsz.png",
      name: "Luan",
      role: "Desenvolvedor Back-end"
    },
    content: [ //backend tem que retornar em markdown pos, mandando html o site fica vulneravel
        { type: 'paragraph', content:'Fala galeraa 👋'},
        { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'}, 
        { type: 'link', content:'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2025-03-08 20:00:00'), 
  },
]

export function App() {
  return (
  <div>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar/>
      
      <main>
        {posts.map (post => { 
          return (
          <Post 
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />
        )
        })}
      </main>
    </div>
  </div>
  )
}

