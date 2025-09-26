import { useState } from 'react'
import './App.css'
import GameBoard from './components/GameBoard/GameBoard'
import Player from './components/PlayerComponent/Player'

function App() {
  const [activePlayer, setActivePlayer] = useState("X")

  const handleSelectSquare = () => {
    setActivePlayer(value => value === "X" ? "O": "X")
  }

  return (
    <main>
      <section id="game-container">
        <ol id="players">
          <Player initialName='Iure' symbol="X"/>
          <Player initialName='Lucas' symbol="O"/>
        </ol>

        <GameBoard symbol={activePlayer}/>
      </section>

      log
    </main>
  )
}

export default App
