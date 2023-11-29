import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Publicaciones from './components/Publicaciones'
import Chat from './components/Chat'

function App() {
  const [publicaciones, setPublicaciones] = useState("seleccionado")
  const [chat, setChat] = useState("no-seleccionado")

  return (
    <>
      <Header />
      <nav>
        <button className={publicaciones} onClick={() => {
          setPublicaciones("seleccionado") 
          setChat("no-seleccionado")
          }}>
          <h2>Publicaciones</h2>
        </button>
        <button className={chat} onClick={() => {
          setPublicaciones("no-seleccionado")
          setChat("seleccionado")
          }}>
          <h2>Chat</h2>
        </button>
      </nav>

      <main>
        { publicaciones == "seleccionado" ?
          <Publicaciones />
          :
          <Chat />
        }
      </main>
    </>
  )
}

export default App
