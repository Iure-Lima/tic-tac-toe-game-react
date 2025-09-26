import { useState } from "react";
import "./GameBoard.css"

const initialBoard: string[][] = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
]

interface Props {
  symbol: string
}

function GameBoard({symbol}:Props){
  const [gameBoard, setGameBoard] = useState<string[][]>(initialBoard)

  const handleSelectSquare = (rowIndex: number, colIndex:number) =>{
    if (!gameBoard[rowIndex][colIndex]){
      setGameBoard((board) => {
      const newBoard = [...board]
      newBoard[rowIndex][colIndex] = symbol
            console.log(newBoard)
      return newBoard;
    })
    }
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
          {row.map((playerSymbol, colIndex) => (
            <li key={colIndex}><button onClick={() => handleSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button></li>
          ))}
        </ol>
        </li>
      ))}
    </ol>
  )

}

export default GameBoard;