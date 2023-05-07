import React, { useState } from 'react';
import { sudokuNumbers } from '../../data/data';


const SudokuKeyboard = ( { selectedInput, cells, setCells } ) => {

  const [attemps, setAttemps] = useState(0)
  
    const handleNumberSelection = (number) => {
      setAttemps(attemps + 1);     
      const newCells = cells.map((cell, index) => selectedInput === index ? number : cell)
      setCells(newCells)   
      };

  //qué pasa si se acaban intentos   
    
 
  return (
    <div>
        {
  sudokuNumbers.map((num) => (
<button 
key={num}
type="button" className="sdk-key" onClick={()=>{handleNumberSelection(num)}}>{num}</button>
  ))
  } 
    </div>
  )
}

export default SudokuKeyboard