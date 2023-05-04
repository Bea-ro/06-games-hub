import React, { useState } from 'react';
import Title from '../../components/ui/Title/Title';
import Message from '../../components/ui/Message/Message';
import SudokuStart from '../../components/ui/StartButton/SudokuStart';
import SudokuGameboard from '../../components/Sudoku/SudokuGameboard';

const Sudoku = ( { game, message, setMessage }) => {

  const [cells, setCells] = useState(Array(9).fill(""))
  const [disabled, setDisabled] = useState(false);
  const [solution, setSolution] = useState(Array(9).fill(""))

  console.log(solution)
  
  return (
    <div>
    <Title game={game}/>
      <SudokuStart disabled={disabled} setDisabled={setDisabled} cells={cells} setCells={setCells} solution={solution} setSolution={setSolution}/>
      <Message message={message}/>
      <SudokuGameboard disabled={disabled} setDisabled={setDisabled} cells={cells} setCells={setCells}
      solution={solution} setSolution={setSolution}/>
    </div>
  )
}

export default Sudoku