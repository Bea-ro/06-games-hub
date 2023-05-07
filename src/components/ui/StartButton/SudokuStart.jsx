import React, { useEffect } from 'react';
import { makepuzzle } from 'sudoku';

const SudokuStart = ( { disabled, setDisabled, solution, setSolution, cells, setCells, setHidden } ) => {

  const startPlay = () => {
    setCells(makepuzzle);
    setDisabled(true);
    setHidden(false);
     // setAttemps(10); //ver si va por tiempo limitado o intentos
    // setMessage(`Tienes 10 intentos`);          
  };


  return (
    <div>
       <button type="button" onClick={startPlay} disabled={disabled}>Start</button>
    </div>
  )
}

export default SudokuStart