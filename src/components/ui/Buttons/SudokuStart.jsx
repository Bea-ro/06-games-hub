import React, { useEffect } from 'react';
import { makepuzzle } from 'sudoku';

const SudokuStart = ( { disabled, setDisabled, setCells, puzzle, setPuzzle, setFinish, inputRefs, setMessage } ) => {
 
  const startPlay = () => {
    setPuzzle(makepuzzle);
    setDisabled(true);
    setFinish(false);  
    setMessage("")
    inputRefs.current.map((inputRef) => inputRef.className = 'sdk-cell')    
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