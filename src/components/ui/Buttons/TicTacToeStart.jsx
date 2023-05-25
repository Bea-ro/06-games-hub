import React, { useEffect, useContext } from 'react';
import './Button.css';
import { TicTacToeContext } from '../../../pages/TicTacToe/TicTacToe';
import { emptyGameboard } from '../../../data/data';



const TicTacToeStart = () => {
    
    const { setCells, player, setPlayer, setMessage, disabled, setDisabled, setWinnerCells, cellRefs} = useContext(TicTacToeContext)
    const players = ["X","O"]    

    const startPlay = () => {
      const randomPlayer = Math.floor(Math.random() * players.length);
      setPlayer(players[randomPlayer]);
      setDisabled(true);
      setMessage(`Es el turno de ${player}`)
      setCells(emptyGameboard);
      setWinnerCells();
      cellRefs.current.forEach((cellRef) => cellRef.disabled = false);       
    };

    useEffect(() => {
      player? setMessage(`Es el turno de ${player}`) : setMessage("") 
    }, [player])

  return (
    <>
        <button type="button" className="button" id="start" data-testid="test-start" onClick={startPlay} disabled={disabled}>Start</button>
    </>
  )
}

export default TicTacToeStart