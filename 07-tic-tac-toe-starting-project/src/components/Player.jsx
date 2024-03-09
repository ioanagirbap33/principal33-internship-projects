import { useState } from "react"

export function Player({initialName,symbol}) {

    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);

    function handleClick() {
        setIsEditing((editing) => !editing)
    }

    function handleChange(event) {
        setPlayerName(event.target.value)
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>
    let btnCaption = "Edit"

    if (isEditing){
        editablePlayerName = (
        <input type="text" required value={playerName} onChange={handleChange}/>
        )
        btnCaption = "Save"
    }

    return (
    <li>
        <span className="player">
          {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleClick}>{btnCaption}</button>
        
    </li>
    )
}