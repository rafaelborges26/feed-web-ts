import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1, 
    author: {
      avatarUrl: 'https://github.com/rafaelborges26.png',
      name: 'Rafael Borges',
      role: 'Developer'
    },
    content: [
      { type: 'paragraph', content:'Fala pessoal'},
      { type: 'paragraph', content:'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui'},
      { type: 'link', content:'Acesse e deixe seu feedback 👉 devonlane.design'},
    ],
    publishedAt: new Date('2023-08-31 20:00:00')
  },
  {
    id: 2, 
    author: {
      avatarUrl: 'https://github.com/rafaelborges26.png',
      name: 'Gabi',
      role: 'Mediquinha'
    },
    content: [
      { type: 'paragraph', content:'Fala pessoal'},
      { type: 'paragraph', content:'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui'},
      { type: 'link', content:'Acesse e deixe seu feedback 👉 devonlane.design'},
    ],
    publishedAt: new Date('2023-09-01 20:00:00')
  }
]

function App() {

  return (
      <div>
        <Header />

        <div className={styles.wraper}>
          <Sidebar />
          <main>
            { posts.map(post => {
              return ( <Post author={post.author} content={post.content} publishedAt={post.publishedAt} key={post.id} /> )
            }) }
          </main>
        </div>
      </div>
  )
}

export default App
