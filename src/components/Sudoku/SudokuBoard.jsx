import React from 'react';
import './SudokuBoard.css';


const SudokuBoard = ( { cells, setSelectedInput, colorRefs, setSolution, setCells } ) => {

const handleInputClick = (i) => {
setSelectedInput(i);
colorRefs.current[i].className = "user-input";
}

  return (
         <div className="sdk-square">
        {
  cells.map((cell, index) => (
    <input key={index} type="number" min="1" max="9" className="sdk-cell" value={cell === null ? '' : cell + 1} 
    onClick={()=>{handleInputClick(index)}}
    ref={(el) => {colorRefs.current[index] = el}}
    />
  ))
  }
      </div>
  )
}

    

export default SudokuBoard