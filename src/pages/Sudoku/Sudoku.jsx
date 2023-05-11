import React, { useState, useRef, createContext } from 'react';
import Title from '../../components/ui/Title/Title';
import Message from '../../components/ui/Message/Message';
import SudokuStart from '../../components/ui/Buttons/SudokuStart';
import SudokuGameboard from '../../components/Sudoku/SudokuGameboard';
import BackButton from '../../components/ui/Buttons/BackButton';
import SudokuSolve from '../../components/ui/Buttons/SudokuSolve';
import SudokuCheck from '../../components/ui/Buttons/SudokuCheck';

export const GameboardContext = createContext()

const Sudoku = ( { game, message, setMessage }) => {

  const [cells, setCells] = useState(Array(81).fill(null));
  const [puzzle, setPuzzle] = useState(Array(81).fill(null));
  const [disabled, setDisabled] = useState(false);
  const [hidden, setHidden] = useState (true);
  const [finish, setFinish] = useState(false)
  const inputRefs = useRef([]);

  console.log('cells', cells)
  console.log('puzzle', puzzle)

  
  return (
    <main>
      <div className="game-header">
      <BackButton/>
    <Title game={game}/>
      <SudokuStart disabled={disabled} setDisabled={setDisabled}
      setCells={setCells} puzzle={puzzle} setPuzzle={setPuzzle}
      setFinish={setFinish} inputRefs={inputRefs} setMessage={setMessage}
      />
</div>

      <SudokuSolve setDisabled={setDisabled} 
      hidden={hidden} setHidden={setHidden}
      setPuzzle={setPuzzle}
       setFinish={setFinish}/>
      
      <SudokuCheck cells={cells}
      setDisabled={setDisabled} hidden={hidden} setHidden={setHidden}
       setMessage={setMessage} inputRefs={inputRefs}
      puzzle={puzzle} setPuzzle={setPuzzle}
       finish={finish} setFinish={setFinish}
       />
      
      <Message message={message}/>
      
      <GameboardContext.Provider value={{cells:cells, setCells:setCells, setHidden:setHidden, 
        inputRefs:inputRefs}}>
      <SudokuGameboard/>
      </GameboardContext.Provider>
     
    </main>
  )
}

export default Sudoku