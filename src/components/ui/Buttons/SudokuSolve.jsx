import React, { useContext } from 'react';
import './Button.css';
import { SudokuContext } from '../../../pages/Sudoku/Sudoku';
import { solvepuzzle } from 'sudoku';


const SudokuSolve = () => {

  const { setDisabled, hidden, setHidden, setPuzzle, setFinish } = useContext(SudokuContext)

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