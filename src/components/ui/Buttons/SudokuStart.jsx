import React, { useEffect } from 'react';
import { makepuzzle } from 'sudoku';
import './Button.css';

const SudokuStart = ( { disabled, setDisabled, setCells, puzzle, setPuzzle, setFinish, inputRefs, setMessage } ) => {
 
  const startPlay = () => {
    setPuzzle(makepuzzle);
    setDisabled(true);
    setFinish(false);  
    setMessage("");
    inputRefs.current.map((inputRef) => inputRef.className = 'sdk-cell')    
  };

  useEffect(() => {
    setCells(puzzle)
  },[puzzle])


  return (
    <>
       <button type="button" className="button" id="start" onClick={startPlay} disabled={disabled}>Start</button>
    </>
  )
}

export default SudokuStart