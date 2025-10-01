import "./GameBoard.css"
import { WINNING_COMBINATIONS } from "../../data/winning-combinations";


interface Props {
  gameBoard: string[][]
  changeSelectSquare: (rowIndex: number, colIndex:number) => void
  handleWinner: (winnerSymbol: string) => void
}



function GameBoard({changeSelectSquare, handleWinner, gameBoard}:Props){

  for (const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
      handleWinner(firstSquareSymbol)
    }
  }

  const handleSelectSquare = (rowIndex: number, colIndex:number) =>{
    changeSelectSquare(rowIndex, colIndex)
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