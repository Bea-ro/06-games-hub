import React, { useEffect } from 'react';
import './TicTacToeGameboard.css';
import { lines, color } from '../../data/data';

const TicTacToeGameboard = ({
  cells,
  setCells,
  player,
  setPlayer,
  setMessage,
  disabled,
  setDisabled,
  winnerCells,
  setWinnerCells,
  cellRefs
}) => {
  const handleMove = (index) => {
    const newCells = [...cells];
    newCells[index] = player;
    setCells(newCells);
    setPlayer(player === 'O' ? 'X' : 'O');
    setMessage(`Es el turno de ${player}`);
  };
 
  useEffect(() => {
      cells.forEach((cell, index) => {
        if (cell === 'X' || cell === 'O') {
          cellRefs.current[index].disabled = true
        } 
    })
    
    let winner = false;
    lines.forEach((line) => {
      if (
        line.every((position) => cells[position] === 'X') ||
        line.every((position) => cells[position] === 'O')
      ) {
        setMessage(`¡${player === 'O' ? 'X' : 'O'} campeón!`);
        setDisabled(false);
        setWinnerCells(line);
        winner = true;
        return;
      }
    });
    if (!cells.includes(null) && !winner) {
      setMessage('¡Empate!');
      setDisabled(false);
    }
  }, [cells]);

  return (
    <div className="ttt-gameboard">
      {cells.map((cell, index) => (
        <button
          style={{
            backgroundColor:
              winnerCells && winnerCells.includes(index) ? 'var(--color-violet)' : 'inherit',
            color: color[cell]
          }}
          key={index}
          type="button"
          className="gamecell"
          data-testid="gamecell"
          id={`gamecell-${index}`}
          onClick={() => {
            handleMove(index);
          }}
          disabled={disabled ? false : true}
          ref={(el) => (cellRefs.current[index] = el)}
        >
          {cell}
        </button>
      ))}
    </div>
  );
};

export default TicTacToeGameboard;
