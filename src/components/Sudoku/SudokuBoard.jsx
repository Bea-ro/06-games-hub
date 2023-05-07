import React from 'react';
import './SudokuBoard.css';

const SudokuBoard = ( { cells, setSelectedInput } ) => {

const handleInputClick = (index) => {
  setSelectedInput(index)
}

  return (
         <div className="sdk-square">
        {
  cells.map((cell, index) => (
    <input key={index} type="number" className="sdk-cell" value={cell === null ? '' : cell} onClick={()=>{handleInputClick(index)}}/>
  ))
  }
    </div>
  )
}

    

export default SudokuBoard