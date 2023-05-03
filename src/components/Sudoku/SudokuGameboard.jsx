import React, { useState, useEffect } from 'react';
import './SudokuGameboard.css';
import { sudokuNumbers} from '../../data/data';
import SudokuKeyboard from './SudokuKeyboard';


const SudokuGameboard = ( { cells, setCells } ) => {

  const [solution, setSolution] = useState("");
  const [rights, setRights] = useState([]);

  useEffect(() => {
    setCells(sudokuNumbers.sort(() => Math.random() - 0.5))
  },[])
  
  // se accede a recuadro 1, última casilla con sudokuGameboard[1][8])

    // no pueden coincidir en cada array (recuadro)
    // no pueden coincidir [0][0],[0][1],[0][2], [1][0],[1][1],[1][2], [2][0],[2][1],[2][2] Fila 1
    // no pueden coincidir [3][0],[3][1],[3][2], [4][0],[4][1],[4][2], [5][0],[5][1],[5][2] Fila 2
    //...
    // no pueden coincidir [0][0],[3][3],[6][6], [3][0],[3][3],[3][6], [6][0],[6][3],[6][6] Columna 1 


  return (
    <>
    <div className="sdk-gameboard">
      
        {
  cells.map((cell, index) => (
    <p key={index} className="sdk-cell">{solution}</p>
  ))
  }
    </div>
    <SudokuKeyboard rights={rights} setRights={setRights} solution={solution} setSolution={setSolution}/>
    </>
  )
}

export default SudokuGameboard