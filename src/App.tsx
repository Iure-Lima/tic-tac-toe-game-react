import { useState } from 'react'
import './App.css'
import GameBoard from './components/GameBoard/GameBoard'
import Player from './components/PlayerComponent/Player'
import Log from './components/LogComponent/Log'

function App() {
  const [activePlayer, setActivePlayer] = useState("X")
  const [gameTurns, setGameTurns] = useState<string[]>([])
  const [winner, setWinner] = useState<string>("");

  const handleWinner = (winnerSymbol: string) => {
    setWinner(winnerSymbol)
  }

  const handleSelectSquare = (action:string) => {
    setActivePlayer(value => value === "X" ? "O": "X")
    setGameTurns((values) => {
      const newTurns = [...values]
      newTurns.unshift(action)
      return newTurns;
    })
  }

  return (
    <main>
      <section id="game-container">
        <ol id="players" className='highlight-player'>
          <Player initialName='Iure' symbol="X" isActive={activePlayer === "X"}/>
          <Player initialName='Lucas' symbol="O" isActive={activePlayer === "O"}/>
        </ol>
        {winner && <p>You Won, {winner}!</p>}
        <GameBoard symbol={activePlayer} changeSelectSquare={handleSelectSquare} handleWinner={handleWinner}/>
      </section>

      <Log logs={gameTurns}/>
    </main>
  )
}

export default App
