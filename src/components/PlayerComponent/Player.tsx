import { useState } from "react"
import "./Player.css"

interface Props {
  symbol: string
  initialName: string
  isActive:boolean
}

function Player({symbol, initialName, isActive}:Props){
  const [isEditing, setIsEditing] = useState(false)
  const [playerName, setPlayerName] = useState(initialName)

  const handleIsEditing = () => {
    setIsEditing(editing => !editing)
  }

  const handleChangeName = (event: unknown) => {
    setPlayerName(event.target.value)
  }

  return (
    <li className={isActive ? "active": undefined}>
      <span className="player">
        {isEditing && <input type="text" value={playerName} onChange={handleChangeName} required />}
        {!isEditing && <span className="player-name">{playerName}</span>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleIsEditing}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  )

}

export default Player