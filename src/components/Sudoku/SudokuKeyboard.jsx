import React, { useState, useRef } from 'react'
import { sudokuNumbers } from '../../data/data';


const SudokuKeyboard = ( { rights, setRights, solution, setSolution} ) => {

  const keyRefs = useRef([])
    
    const handleNumberSelection = (number) => {
        const position = sudokuNumbers.indexOf(number)
        keyRefs.current[position].disabled = true
       
          if (cells.includes(number)) {  
            setSolution(
              cells.map((c) => {
                return c === number ? c : (rights.includes(c) ? c :" ")
            })
            )
            setRights([...rights, number]) 
          } 
          //qué pasa si se acaban intentos
        }
      


  return (
    <div>
        {
  sudokuNumbers.map((num, index) => (
<button 
key={num} 
ref={(el) => (keyRefs.current[index] = el)}
type="button" className="sdk-key" onClick={() => {handleNumberSelection(num)}}>{num}</button>
  ))
  } 
    </div>
  )
}

export default SudokuKeyboard