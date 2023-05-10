import React, { useEffect } from 'react';
import './TicTacToeGameboard.css';
import { lines } from '../../data/data';

const TicTacToeGameboard = ( {cells, setCells, player, setPlayer, setMessage, setDisabled} ) => {

  const handleMove = (index) => {
   const newCells = [...cells]; 
   newCells[index] = player;
   setCells(newCells)    
   setPlayer(player === "O" ? "X" : "O")
   setMessage(`Es el turno de ${player}`)
  }
  
  useEffect(() => {
    let winner = false
    lines.forEach(line => {
      if (
        line.every(position => cells[position] === "X") ||
        line.every(position => cells[position] === "O")
      ) {
        setMessage(`¡${player === "O"? "X":"O"} campeón!`);
        setDisabled(false);
        winner = true;
        return;
      }
    });
    if (!cells.includes(null) && !winner) {
      setMessage("¡Empate!");
      setDisabled(false);
    };
  }, [cells]);
  
  
  return (
    <div className="ttt-gameboard">
  {
  cells.map((cell, index) => (
  <button key={index} type="button" className="gamecell" onClick={()=> {handleMove(index)}}>{cell}</button>
  ))
  }

</div>
  )
};

export default TicTacToeGameboard;