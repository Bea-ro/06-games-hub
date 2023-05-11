import React, { useEffect, useState } from 'react';
import './TicTacToeGameboard.css';
import { lines, color } from '../../data/data';

const TicTacToeGameboard = ( {cells, setCells, player, setPlayer, setMessage, disabled, setDisabled, winnerCells, setWinnerCells} ) => {

 
  const handleMove = (index) => {
   const newCells = [...cells]; 
   newCells[index] = player;
   setCells(newCells)    
   setPlayer(player === "O" ? "X" : "O")
   setMessage(`Es el turno de ${player}`); 
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
        setWinnerCells(line)
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
  <button 
  style={{backgroundColor: winnerCells && winnerCells.includes(index) ? 'var(--color-violet)' : 'inherit', color:color[cell] }}
  key={index} type="button" className="gamecell" id={`gamecell-${index}`} 
  onClick={()=> {handleMove(index)}}
  disabled={disabled? false : true}
  >{cell}</button>
  ))
  }



</div>
  )
};

export default TicTacToeGameboard;