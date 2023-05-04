import React, { useRef, useState } from 'react';
import './SudokuGameboard.css';
import SudokuSquare from './SudokuSquare';
import SudokuKeyboard from './SudokuKeyboard';

const SudokuGameboard = ( { cells, setCells, solution, setSolution } ) => {
  
  const inputRefs = useRef([]);
  const [selectedInput, setSelectedInput] = useState(null)
  // const [selectedInputIndex, setSelectedInputIndex] = useState()

  return (
    <>
    {/* <SudokuSquare solution={solution1}/> cambiarle la solución y así con 7 más */}
   <SudokuSquare inputRefs={inputRefs} solution={solution}
   setSelectedInput={setSelectedInput}/>
    <SudokuKeyboard inputRefs={inputRefs} cells={cells} solution={solution} setSolution={setSolution}
    selectedInput={selectedInput}/>
    </>
  )
}

export default SudokuGameboard