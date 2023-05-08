import React from 'react';
import { makepuzzle } from 'sudoku';

const SudokuStart = ( { disabled, setDisabled, setCells, colorRefs } ) => {
 
  const startPlay = () => {
    setCells(makepuzzle);
    setDisabled(true);
    colorRefs.current.forEach((colorRef) => colorRef.className = "sdk-cell");      
  };

  return (
    <div>
       <button type="button" onClick={startPlay} disabled={disabled}>Start</button>
    </div>
  )
}

export default SudokuStart