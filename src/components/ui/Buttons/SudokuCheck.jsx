import React, { useState, useEffect } from 'react';
import { solvepuzzle } from 'sudoku';

const SudokuCheck = ( { hidden, setHidden, setDisabled, cells, solution, setAttemps, setMessage, colorRefs, puzzle, setPuzzle, finish, setFinish } ) => {

  const [checkDisabled, setCheckDisabled] = useState()

 
    const checkSudoku = () => {
        setDisabled(false);
        setHidden(true);
        setAttemps(0);
        setPuzzle(solvepuzzle);
        setFinish(true)    
        };   

        useEffect(() => {
          cells.includes(null) ? setCheckDisabled(true) : setCheckDisabled(false);
        }, [cells])

        useEffect(() => {
          if (finish) {
        for (let i = 0; i < colorRefs.current.length; i++) {
        colorRefs.current[i].value === solution[i] ? colorRefs.current[i].className = "right" : colorRefs.current[i].className = "fail"  
      }}
        if (finish && !cells.includes(null)) {cells === puzzle ? setMessage('¡Enhorabuena crack!') : setMessage('OOOHHH')}
        }, [finish])
  
    return (
      <div>
           <button type="button" onClick={checkSudoku} disabled={checkDisabled} hidden={hidden}>Comprobar</button>
      </div>
    )
}

export default SudokuCheck