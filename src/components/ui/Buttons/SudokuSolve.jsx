import React, { useEffect} from 'react';
import { solvepuzzle } from 'sudoku';

const SudokuSolve = ( { setDisabled, hidden, setHidden, setAttemps, colorRefs, puzzle, setPuzzle, finish, setFinish } ) => {

    const solveSudoku = () => {
      setDisabled(false);
      setHidden(true);
      setAttemps(0);
      setPuzzle(solvepuzzle)
      setFinish(true)       
      }; 

  return (
    <div>
         <button type="button" onClick={solveSudoku} hidden={hidden}>Resolver</button>
    </div>
  )
}

export default SudokuSolve