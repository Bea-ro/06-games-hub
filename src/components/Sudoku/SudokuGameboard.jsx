import React, { useState } from 'react';
import './SudokuGameboard.css';
import SudokuBoard from './SudokuBoard';
import SudokuKeyboard from './SudokuKeyboard';
import SudokuSolve from '../ui/Buttons/SudokuSolve';
import SudokuCheck from '../ui/Buttons/SudokuCheck';

const SudokuGameboard = () => {
  
  const [selectedInput, setSelectedInput] = useState()
  
  return (
    <div className="sdk-gameboard">
   <SudokuBoard setSelectedInput={setSelectedInput}/>
   <div className="sdk-keyboard-and-buttons">
    <SudokuKeyboard selectedInput={selectedInput}/>
    <div className="sdk-buttons">
    <SudokuSolve/>
      <SudokuCheck/>
      </div>
      </div>
    </div>
  )
}

export default SudokuGameboard