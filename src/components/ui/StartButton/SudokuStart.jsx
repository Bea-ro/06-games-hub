import React from 'react'

const SudokuStart = ( { cells, setCells, disabled, setDisabled } ) => {

  const startPlay = () => {
    setDisabled(true);
    // setAttemps(10); //ver si va por tiempo limitado o intentos
    // setMessage(`Tienes 10 intentos`);          
  };


  return (
    <div>
       <button type="button" onClick={startPlay} disabled={disabled}>Start</button>
    </div>
  )
}

export default SudokuStart