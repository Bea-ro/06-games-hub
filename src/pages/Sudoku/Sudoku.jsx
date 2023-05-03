import React, { useState } from 'react';
import Title from '../../components/ui/Title/Title';
import Message from '../../components/ui/Message/Message';
import SudokuStart from '../../components/ui/StartButton/SudokuStart';
import SudokuGameboard from '../../components/Sudoku/SudokuGameboard';

const Sudoku = ( { game, message, setMessage }) => {

  const [cells, setCells] = useState([null, null, null, null, null, null, null, null, null])
  const [disabled, setDisabled] = useState(false);

  return (
    <div>
    <Title game={game}/>
      <SudokuStart disabled={disabled} setDisabled={setDisabled} cells={cells} setCells={setCells}/>
      <Message message={message}/>
      <SudokuGameboard disabled={disabled} setDisabled={setDisabled} cells={cells} setCells={setCells}/>
    </div>
  )
}

export default Sudoku