import React, { useEffect, useContext } from 'react';
import './Button.css';
import { SudokuContext } from '../../../pages/Sudoku/Sudoku';
import { makepuzzle } from 'sudoku';



const SudokuStart = () => {
 
  const { disabled, setDisabled, setCells, puzzle, setPuzzle, setFinish, inputRefs, setMessage } = useContext(SudokuContext)
  
  const startPlay = () => {
    setPuzzle(makepuzzle);
    setDisabled(true);
    setFinish(false);  
    setMessage("");
    inputRefs.current.map((inputRef) => inputRef.className = 'sdk-cell');
  };


  useEffect(() => {
    setCells(puzzle);
  },[puzzle])
   

  return (
    <>
       <button type="button" className="button" id="start" onClick={startPlay} disabled={disabled}>Start</button>
    </>
  )
}

export default SudokuStart