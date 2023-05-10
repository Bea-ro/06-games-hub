import React from 'react';
import { solvepuzzle } from 'sudoku';

const SudokuSolve = ( { setDisabled, hidden, setHidden, setPuzzle, setFinish } ) => {

    const solveSudoku = () => {
      setDisabled(false);
      setHidden(true);
      setPuzzle(solvepuzzle)
      setFinish(true);
      }; 

   return (
    <div>
         <button type="button" onClick={solveSudoku} 
        hidden={hidden}
         >Resolver</button>
          
    </div>
  )
}

export default SudokuSolve