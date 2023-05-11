import React, { useState, useEffect } from 'react';
import { solvepuzzle } from 'sudoku';
import './Button.css';

const SudokuCheck = ( { hidden, setHidden, setDisabled, cells, setMessage, inputRefs, puzzle, setPuzzle, finish, setFinish } ) => {

  const [checkDisabled, setCheckDisabled] = useState(true)
  const [cellsForCompare, setCellsForCompare] = useState()

    const checkSudoku = () => {
        setDisabled(false);
        setHidden(true);
        setPuzzle(solvepuzzle);
        setFinish(true);        
        };   

        useEffect(() => {
          cells.includes(null) ? setCheckDisabled(true) : setCheckDisabled(false);
          setCellsForCompare(inputRefs.current.map((inputRef) => inputRef.value))      
        }, [cells])

        useEffect(() => {
          if (finish) {          
        for (let i = 0; i < cellsForCompare.length; i++) {
          if (inputRefs.current[i].className === 'user-input') {
            parseInt(cellsForCompare[i]) === (puzzle[i]) + 1  ? 
            inputRefs.current[i].className = 'green' :  inputRefs.current[i].className = 'red'
          }
          else if (inputRefs.current[i].className === 'sdk-cell' && inputRefs.current[i].value === "") {
           inputRefs.current[i].className = 'red'
          }    
      }}
        if (finish && !cells.includes(null)) {cells === puzzle ? setMessage('¡Enhorabuena crack!') : setMessage('OOOHHH')}
        }, [finish])
  
    return (
      <>
           <button type="button" className="button" onClick={checkSudoku} 
           hidden={hidden}
           disabled={checkDisabled}
           >Comprobar</button>
      </>
    )
}

export default SudokuCheck