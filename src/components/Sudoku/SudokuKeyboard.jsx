import React, { useContext } from 'react';
import { sudokuNumbers } from '../../data/data';
import { GameboardContext } from '../../pages/Sudoku/Sudoku';

const SudokuKeyboard = ( { selectedInput } ) => {

  const {cells, setCells, setHidden } = useContext(GameboardContext)
  
    const handleNumberSelection = (number) => {
      setHidden(false);   
      const newCells = cells.map((cell, index) => selectedInput === index ? number -1 : cell)
      setCells(newCells);
      };

  return (
    <div>
        {
  sudokuNumbers.map((num) => (
<button className="key" 
key={num}
type="button" className="sdk-key" onClick={()=>{handleNumberSelection(num)}}>{num}</button>
  ))
  } 
    </div>
  )
}

export default SudokuKeyboard