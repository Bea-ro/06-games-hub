import React, { useState } from 'react';
import './SudokuGameboard.css';
import SudokuBoard from './SudokuBoard';
import SudokuKeyboard from './SudokuKeyboard';

const SudokuGameboard = ( { cells, setCells } ) => {
  
  const [selectedInput, setSelectedInput] = useState(null)

  
  return (
    <>
    <div className="sdk-gameboard">
   <SudokuBoard cells={cells} setSelectedInput={setSelectedInput}/>
   </div>
    <SudokuKeyboard cells={cells} setCells={setCells}
    selectedInput={selectedInput}/>
    </>
  )
}

export default SudokuGameboard