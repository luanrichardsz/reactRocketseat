// componente é toda função que retorna HTML
//  JSX = JavaScript + XML
import { Post, PostType } from './components/Post.tsx'; // Named Exports
import { Header } from './components/Header.tsx';
import './global.css'; // importando um CSS Global
import styles from './App.module.css'; // importando um CSS Module
import { Sidebar } from './components/Sidebar';


const posts: PostType[] = [
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
            key={post.id}
            post={post}
          />
        )
        })}
      </main>
    </div>
  </div>
  )
}

