import React from 'react';

const SudokuSolve = ( { setDisabled, solution, hidden, setHidden, setCells, setAttemps, colorRefs } ) => {

    const solveSudoku = () => {
      setDisabled(false);
      setHidden(true);
      setAttemps(0);
      setCells(solution)
      for (let i = 0; i < colorRefs.current.length; i++) {
          colorRefs.current[i].value === solution[i] ? colorRefs.current[i].className = "right" : colorRefs.current[i].className = "fail"  
          }                 
      };

  return (
    <div>
         <button type="button" onClick={solveSudoku} hidden={hidden}>Resolver</button>
    </div>
  )
}

export default SudokuSolve