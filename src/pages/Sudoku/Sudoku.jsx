import React, { useState, useRef } from 'react';
import Title from '../../components/ui/Title/Title';
import Message from '../../components/ui/Message/Message';
import SudokuStart from '../../components/ui/Buttons/SudokuStart';
import SudokuGameboard from '../../components/Sudoku/SudokuGameboard';
import BackButton from '../../components/ui/Buttons/BackButton';
import SudokuSolve from '../../components/ui/Buttons/SudokuSolve';
import SudokuCheck from '../../components/ui/Buttons/SudokuCheck';

const Sudoku = ( { game, message, setMessage }) => {

  const [cells, setCells] = useState(Array(81).fill(null));
  const [puzzle, setPuzzle] = useState(Array(81).fill(null));
  const [disabled, setDisabled] = useState(false);
  const [hidden, setHidden] = useState (true);
  const [attemps, setAttemps] = useState(0);
  const [finish, setFinish] = useState(false)
  const colorRefs = useRef([])

  console.log('cells', cells)
  console.log('puzzle', puzzle)
  
  return (
    <div>
      <BackButton/>
    <Title game={game}/>
      <SudokuStart disabled={disabled} setDisabled={setDisabled}
      setCells={setCells} colorRefs={colorRefs} puzzle={puzzle} setPuzzle={setPuzzle}
      />

      <SudokuSolve setDisabled={setDisabled} 
      hidden={hidden} setHidden={setHidden} colorRefs={colorRefs}
       attemps={attemps} puzzle={puzzle} setPuzzle={setPuzzle}
       setAttemps={setAttemps}
       finish={finish} setFinish={setFinish}/>
      
      <SudokuCheck cells={cells}
      setDisabled={setDisabled} hidden={hidden} setHidden={setHidden} attemps={attemps}
       setMessage={setMessage} colorRefs={colorRefs}
       setAttemps={setAttemps} puzzle={puzzle} setPuzzle={setPuzzle}
       finish={finish} setFinish={setFinish}/>
      
      <Message message={message}/>
      
      <SudokuGameboard cells={cells} setCells={setCells} 
      setHidden={setHidden} attemps={attemps} setAttemps={setAttemps} colorRefs={colorRefs}
      puzzle={puzzle} setPuzzle={setPuzzle}/>
    </div>
  )
}

export default Sudoku