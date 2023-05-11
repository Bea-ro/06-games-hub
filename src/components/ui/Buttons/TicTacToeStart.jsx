import React, { useEffect } from 'react';
import { emptyGameboard } from '../../../data/data';
import './Button.css';

const TicTacToeStart = ( { setCells, player, setPlayer, setMessage, disabled, setDisabled, setWinnerCells} ) => {
    
    const players = ["X","O"]    

    const startPlay = () => {
      const randomPlayer = Math.floor(Math.random() * players.length);
      setPlayer(players[randomPlayer]);
      setDisabled(true);
      setMessage(`Es el turno de ${player}`)
      setCells(emptyGameboard);
      setWinnerCells()
    };

    useEffect(() => {
      player? setMessage(`Es el turno de ${player}`) : setMessage("") 
    }, [player])

  return (
    <>
        <button type="button" className="button" id="start" onClick={startPlay} disabled={disabled}>Start</button>
    </>
  )
}

export default TicTacToeStart