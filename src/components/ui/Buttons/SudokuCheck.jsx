import React, { useState, useEffect } from 'react';
import { solvepuzzle } from 'sudoku';

const SudokuCheck = ( { hidden, setHidden, setDisabled, cells, setAttemps, setMessage, inputRefs, puzzle, setPuzzle, finish, setFinish } ) => {

  const [checkDisabled, setCheckDisabled] = useState()
  const [cellsForCompare, setCellsForCompare] = useState()

  console.log('cellsForCompare', cellsForCompare)
   
    const checkSudoku = () => {
        setDisabled(false);
        setHidden(true);
        setAttemps(0);
        setPuzzle(solvepuzzle);
        setFinish(true)    
        };   

        useEffect(() => {
          cells.includes(null) ? setCheckDisabled(true) : setCheckDisabled(false);
          setCellsForCompare(inputRefs.current.map((inputRef) => inputRef.value))      
        }, [cells])

        useEffect(() => {
          if (finish) {          
        for (let i = 0; i < cellsForCompare.length; i++) {
          parseInt(cellsForCompare[i]) === (puzzle[i]) + 1 ? inputRefs.current[i].className = 'green' :  inputRefs.current[i].className = 'red'    
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