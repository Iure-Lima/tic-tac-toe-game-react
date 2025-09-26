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
        <ol id="players" className='highlight-player'>
          <Player initialName='Iure' symbol="X" isActive={activePlayer === "X"}/>
          <Player initialName='Lucas' symbol="O" isActive={activePlayer === "O"}/>
        </ol>

        <GameBoard symbol={activePlayer} changeSelectSquare={handleSelectSquare}/>
      </section>

      log
    </main>
  )
}

export default App
