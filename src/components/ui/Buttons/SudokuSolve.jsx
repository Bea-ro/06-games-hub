import React from 'react';
import { solvepuzzle } from 'sudoku';
import './Button.css';

const SudokuSolve = ( { setDisabled, hidden, setHidden, setPuzzle, setFinish } ) => {

    const solveSudoku = () => {
      setDisabled(false);
      setHidden(true);
      setPuzzle(solvepuzzle)
      setFinish(true);
      }; 

   return (
    <>
         <button type="button" className="button" onClick={solveSudoku} 
        hidden={hidden}
         >Resolver</button>
          
    </>
  )
}

export default SudokuSolve