import { useState } from 'react'
import './App.css'
import GameBoard from './components/GameBoard/GameBoard'
import Player from './components/PlayerComponent/Player'
import Log from './components/LogComponent/Log'
import GameOver from './components/GameOver/GameOver'

const initialBoard: string[][] = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
]

function App() {
  const [activePlayer, setActivePlayer] = useState("X")
  const [gameTurns, setGameTurns] = useState<string[]>([])
  const [winner, setWinner] = useState<string>("");
  const [gameBoard, setGameBoard] = useState<string[][]>([...initialBoard.map(array => [...array])])

  const handleWinner = (winnerSymbol: string) => {
    setWinner(winnerSymbol)
  }

  const handleSelectSquare = (rowIndex: number, colIndex:number) =>{
    setGameBoard((board) => {
      const newBoard = [...board]
      newBoard[rowIndex][colIndex] = activePlayer
      return newBoard;
      })
      setGameTurns((values) => {
      const newTurns = [...values]
      newTurns.unshift(`${activePlayer} in row ${rowIndex + 1} and col ${colIndex + 1}`)
      return newTurns;
    })
    setActivePlayer(value => value === "X" ? "O": "X")
  }


  const hasDraw = gameTurns.length === 9 && !winner;

  const handleRestart = () => {
    setWinner("")
    setGameTurns([])
    setActivePlayer("X")
    setGameBoard([...initialBoard.map(array => [...array])]);
  }

  return (
    <main>
      <section id="game-container">
        <ol id="players" className='highlight-player'>
          <Player initialName='Player 1' symbol="X" isActive={activePlayer === "X"}/>
          <Player initialName='Player 2' symbol="O" isActive={activePlayer === "O"}/>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} handleRestart = {handleRestart}/>}
        <GameBoard changeSelectSquare={handleSelectSquare} handleWinner={handleWinner} gameBoard={gameBoard}/>
      </section>

      <Log logs={gameTurns}/>
    </main>
  )
}

export default App
