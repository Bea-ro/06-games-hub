import React, { useState } from 'react';
import './SudokuGameboard.css';
import SudokuBoard from './SudokuBoard';
import SudokuKeyboard from './SudokuKeyboard';

const SudokuGameboard = ( { cells, setCells, setHidden, attemps, setAttemps, inputRefs } ) => {
  
  const [selectedInput, setSelectedInput] = useState()
  
  return (
    <>
    <div className="sdk-gameboard">
   <SudokuBoard cells={cells} setSelectedInput={setSelectedInput} inputRefs={inputRefs}
   />
   </div>

    <SudokuKeyboard cells={cells} setCells={setCells}
    selectedInput={selectedInput}
    setHidden={setHidden} attemps={attemps} setAttemps={setAttemps}
    />
    </>
  )
}

export default SudokuGameboard