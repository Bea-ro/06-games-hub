import React, { useState, useEffect } from 'react';
import { sudokuNumbers } from '../../data/data';


const SudokuKeyboard = ( { cells, inputRefs, selectedInput, solution, setSolution } ) => {

  const [attemps, setAttemps] = useState(0)

    const handleNumberSelection = (number) => {
      selectedInput = number;
      setAttemps(attemps + 1)
      };

      useEffect(() => {
        if (attemps !== 0) {
        const position = inputRefs.indexOf(selectedInput);
        const newSolution = solution.map((s,i) => position === i ? selectedInput : s)
        setSolution(newSolution)   
      }
    },[attemps])
  
      
      //qué pasa si se acaban intentos   
      //const newSolution = solution.map((s, index) => index === selectedInput ? number : s)
 
      
  return (
    <div>
        {
  sudokuNumbers.map((num, i) => (
<button 
key={num}
type="button" className="sdk-key" onClick={()=>{handleNumberSelection(num)}}>{num}</button>
  ))
  } 
    </div>
  )
}

export default SudokuKeyboard