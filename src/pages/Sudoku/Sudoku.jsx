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
  const [solution, setSolution] = useState(Array(81).fill(null));
  const [disabled, setDisabled] = useState(false);
  const [hidden, setHidden] = useState (true);
  const [attemps, setAttemps] = useState(0);
  const colorRefs = useRef([])

  console.log('solution', solution);
  console.log('cells', cells)

  
  return (
    <div>
      <BackButton/>
    <Title game={game}/>
      <SudokuStart disabled={disabled} setDisabled={setDisabled}
      setCells={setCells} colorRefs={colorRefs}
      />

      <SudokuSolve solution={solution} setDisabled={setDisabled} 
      hidden={hidden} setHidden={setHidden} colorRefs={colorRefs}
       setCells={setCells} attemps={attemps}/>
      
      <SudokuCheck cells={cells} setCells={setCells} solution={solution} 
      setDisabled={setDisabled} hidden={hidden} setHidden={setHidden} attemps={attemps}
       setMessage={setMessage} colorRefs={colorRefs}/>
      
      <Message message={message}/>
      
      <SudokuGameboard cells={cells} setCells={setCells} setSolution={setSolution}
      setHidden={setHidden} attemps={attemps} setAttemps={setAttemps} colorRefs={colorRefs}/>
    </div>
  )
}

export default Sudoku