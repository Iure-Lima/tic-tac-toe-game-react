import { useState } from "react";
import "./GameBoard.css"

const initialBoard: string[][] = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
]

interface Props {
  symbol: string
  changeSelectSquare: (action: string) => void
}

function GameBoard({symbol, changeSelectSquare}:Props){
  const [gameBoard, setGameBoard] = useState<string[][]>(initialBoard)

  const handleSelectSquare = (rowIndex: number, colIndex:number) =>{
    if (!gameBoard[rowIndex][colIndex]){
      setGameBoard((board) => {
      const newBoard = [...board]
      newBoard[rowIndex][colIndex] = symbol
      return newBoard;
      })
      changeSelectSquare(`${symbol} in row ${rowIndex + 1} and col ${colIndex + 1}`)
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