import React, { useContext } from 'react';
import './SudokuKeyboard.css';
import { sudokuNumbers } from '../../data/data';
import { SudokuContext } from '../../pages/Sudoku/Sudoku';

const SudokuKeyboard = ( { selectedInput } ) => {

  const {cells, setCells, setHidden, disabled } = useContext(SudokuContext)
  
    const handleNumberSelection = (number) => {
      console.log('number es', number) 
      setHidden(false);   
      const newCells = cells.map((cell, index) => selectedInput === index ? number -1 : cell)
      setCells(newCells);
      };

  return (
    <div className="sudoku-keyboard">
        {
  sudokuNumbers.map((num, index) => (
    
<button className="key" 
key={num}
type="button" 
disabled={!disabled}
onClick={()=>{handleNumberSelection(num)}}>{num}</button>
  ))
  } 
    </div>
  )
}

export default SudokuKeyboard