import React, { useState } from 'react';
import './SudokuGameboard.css';
import SudokuBoard from './SudokuBoard';
import SudokuKeyboard from './SudokuKeyboard';

const SudokuGameboard = () => {
  
  const [selectedInput, setSelectedInput] = useState()
  
  return (
    <div className="sdk-gameboard">
   <SudokuBoard setSelectedInput={setSelectedInput}/>
    <SudokuKeyboard selectedInput={selectedInput}/>
    </div>
  )
}

export default SudokuGameboard