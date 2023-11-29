import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Publicaciones from './components/Publicaciones'
import Chat from './components/Chat'

function App() {
  const [navPublicaciones, setNavPublicaciones] = useState("seleccionado")
  const [navChat, setNavChat] = useState("no-seleccionado")

  return (
    <>
      <Header />
      <nav>
        <button className={navPublicaciones} onClick={() => {
          setNavPublicaciones("seleccionado") 
          setNavChat("no-seleccionado")
          }}>
          <h2>Publicaciones</h2>
        </button>
        <button className={navChat} onClick={() => {
          setNavPublicaciones("no-seleccionado")
          setNavChat("seleccionado")
          }}>
          <h2>Chat</h2>
        </button>
      </nav>

      <main>
        { navPublicaciones == "seleccionado" ?
          <Publicaciones />
          :
          <Chat />
        }
      </main>
    </>
  )
}

export default App
