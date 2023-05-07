import React, { useState } from 'react';
import Title from '../../components/ui/Title/Title';
import Message from '../../components/ui/Message/Message';
import SudokuStart from '../../components/ui/StartButton/SudokuStart';
import SudokuGameboard from '../../components/Sudoku/SudokuGameboard';
import BackButton from '../../components/ui/BackButton/BackButton';
import SolveButton from '../../components/ui/SolveButton/SolveButton';

const Sudoku = ( { game, message }) => {

  const [cells, setCells] = useState(Array(81).fill(null));
  const [solution, setSolution] = useState(Array(81).fill(null));
  const [disabled, setDisabled] = useState(false);
  const [hidden, setHidden] = useState (true)
 
  console.log('cells', cells)
  console.log('solution', solution)
  
  return (
    <div>
      <BackButton/>
    <Title game={game}/>
      <SudokuStart disabled={disabled} setDisabled={setDisabled} setHidden={setHidden} cells={cells} setCells={setCells}
      solution={solution} setSolution={setSolution}/>
      <SolveButton setCells={setCells} disabled={disabled} setDisabled={setDisabled} hidden={hidden} setHidden={setHidden} />
      <Message message={message}/>
      <SudokuGameboard cells={cells} setCells={setCells}/>
    </div>
  )
}

export default Sudoku