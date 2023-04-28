import React, { useEffect } from 'react';

const StartButton = ( { setCells, player, setPlayer, setMessage, disabled, setDisabled} ) => {
    
    const players = ["X","O"]    
    
    const startPlay = () => {
      const randomPlayer = Math.floor(Math.random() * players.length);
      setPlayer(players[randomPlayer]);
      setDisabled(true);
      setMessage(`Es el turno de ${player}`)
      setCells(emptyGameboard)
    };

    useEffect(() => {
      player? setMessage(`Es el turno de ${player}`) : setMessage("") 
    }, [player])

  return (
    <div>
        <button type="button" onClick={startPlay} disabled={disabled}>Start</button>
    </div>
  )
}

export default StartButton