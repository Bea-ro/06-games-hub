import React, { useState, useEffect } from 'react';
import { sudokuNumbers } from '../../data/data';


const SudokuKeyboard = ( { selectedInput, cells, setCells, setHidden, attemps, setAttemps } ) => {

  const [number, setNumber] = useState()
  
    const handleNumberSelection = (number) => {
      if (attemps === 0) {setHidden(false)}
      setAttemps(attemps + 1);     
      setNumber(number)
      };

      useEffect(() => {
        const newCells = cells.map((cell, index) => selectedInput === index ? number : cell)
        setCells(newCells);
      },[number])
 
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