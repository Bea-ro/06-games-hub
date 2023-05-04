import React, { useEffect } from 'react';
import { sudokuNumbers} from '../../../data/data';
import { getRandomPositions } from '../../../utils/functions';

const SudokuStart = ( { cells, solution, setSolution, setCells, disabled, setDisabled } ) => {

  const startPlay = () => {
    setCells(sudokuNumbers.slice().sort(() => Math.random() - 0.5))
    setDisabled(true);
     // setAttemps(10); //ver si va por tiempo limitado o intentos
    // setMessage(`Tienes 10 intentos`);          
  };

  useEffect(() => {
    const positions = getRandomPositions(4)
    const newSolution = solution.map((s,i) => positions.includes(i) ? cells[i] : s)
    setSolution(newSolution)   
  },[cells])

  return (
    <div>
       <button type="button" onClick={startPlay} disabled={disabled}>Start</button>
    </div>
  )
}

export default SudokuStart