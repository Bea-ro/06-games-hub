import React, { useEffect } from 'react';
import { makepuzzle } from 'sudoku';

const SudokuStart = ( { disabled, setDisabled, setCells, colorRefs, puzzle, setPuzzle } ) => {
 
  const startPlay = () => {
    setPuzzle(makepuzzle);
    setDisabled(true);
    setFinish(false);    
    colorRefs.current.forEach((colorRef) => colorRef.className = "sdk-cell");      
  };

  useEffect(() => {
    setCells(puzzle)
  },[puzzle])


  return (
    <div>
       <button type="button" onClick={startPlay} disabled={disabled}>Start</button>
    </div>
  )
}

export default SudokuStart