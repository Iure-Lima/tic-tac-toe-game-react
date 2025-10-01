import { useState } from "react";
import "./GameBoard.css"
import { WINNING_COMBINATIONS } from "../../data/winning-combinations";

const initialBoard: string[][] = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
]

interface Props {
  symbol: string
  changeSelectSquare: (action: string) => void
  handleWinner: (winnerSymbol: string) => void
}



function GameBoard({symbol, changeSelectSquare, handleWinner}:Props){
  const [gameBoard, setGameBoard] = useState<string[][]>(initialBoard)

  for (const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
      handleWinner(firstSquareSymbol)
    }
  }

  const handleSelectSquare = (rowIndex: number, colIndex:number) =>{
    setGameBoard((board) => {
      const newBoard = [...board]
      newBoard[rowIndex][colIndex] = symbol
      return newBoard;
      })
      changeSelectSquare(`${symbol} in row ${rowIndex + 1} and col ${colIndex + 1}`)
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
          {row.map((playerSymbol, colIndex) => (
            <li key={colIndex}><button onClick={() => handleSelectSquare(rowIndex,colIndex)} disabled={!(gameBoard[rowIndex][colIndex] === "")}>{playerSymbol}</button></li>
          ))}
        </ol>
        </li>
      ))}
    </ol>
  )

}

export default GameBoard;