import React from 'react';
import { solvepuzzle } from 'sudoku';


const SolveButton = ( { setDisabled, setCells, hidden, setHidden } ) => {

    const solveSudoku = () => {
      setDisabled(false);
      setHidden(true);
      setCells(solvepuzzle);
        // setAttemps(10); //ver si va por tiempo limitado o intentos
       // setMessage(`Tienes 10 intentos`);          
      };

  return (
    <div>
         <button type="button" onClick={solveSudoku} hidden={hidden}>Resolver</button>
    </div>
  )
}

export default SolveButton