import React, { useState, useRef, createContext } from 'react';
import GameHeader from '../../components/Header/GameHeader';
import SudokuStart from '../../components/ui/Buttons/SudokuStart';
import Message from '../../components/ui/Message/Message';
import SudokuGameboard from '../../components/Sudoku/SudokuGameboard';
import SudokuSolve from '../../components/ui/Buttons/SudokuSolve';
import SudokuCheck from '../../components/ui/Buttons/SudokuCheck';

export const SudokuContext = createContext();

const Sudoku = ( { message, setMessage }) => {

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
      <SudokuContext.Provider value={{disabled:disabled, setDisabled:setDisabled,
      setCells:setCells, puzzle:puzzle, setPuzzle:setPuzzle,
      setFinish:setFinish, inputRefs:inputRefs, setMessage:setMessage}}>
      <GameHeader StartButton={SudokuStart} game="Sudoku"/>
      </SudokuContext.Provider>
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
      
      <SudokuContext.Provider value={{cells:cells, setCells:setCells, setHidden:setHidden, 
        inputRefs:inputRefs}}>
      <SudokuGameboard/>
      </SudokuContext.Provider>
     
    </main>
  )
}

export default Sudoku