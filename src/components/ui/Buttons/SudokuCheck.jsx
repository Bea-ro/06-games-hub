import React, { useState, useEffect } from 'react';
import { solvepuzzle } from 'sudoku';

const SudokuCheck = ( { hidden, setHidden, setDisabled, cells, setCells, solution, setAttemps, setMessage, colorRefs } ) => {

  const [checkDisabled, setCheckDisabled] = useState()
 
    const checkSudoku = () => {
        setDisabled(false);
        setHidden(true);
        setAttemps(0);
        setCells(solution)
        for (let i = 0; i < colorRefs.current.length; i++) {
          colorRefs.current[i].value === solution[i] ? colorRefs.current[i].className = "right" : colorRefs.current[i].className = "fail"  
          }         
        cells === solution ? setMessage('¡Enhorabuena crack!') : setMessage('OOOHHH')
        };   

        useEffect(() => {
          cells.includes(null) ? setCheckDisabled(true) : setCheckDisabled(false);
        }, [cells])
  
    return (
      <div>
           <button type="button" onClick={checkSudoku} disabled={checkDisabled} hidden={hidden}>Comprobar</button>
      </div>
    )
}

export default SudokuCheck