import React, { useState, useRef, createContext } from 'react';
import GameHeader from '../../components/Headers/GameHeader';
import SudokuStart from '../../components/ui/Buttons/SudokuStart';
import Message from '../../components/ui/Message/Message';
import SudokuGameboard from '../../components/Sudoku/SudokuGameboard';

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
    <>
    <SudokuContext.Provider value={{disabled:disabled, setDisabled:setDisabled,
      setCells:setCells, puzzle:puzzle, setPuzzle:setPuzzle,
      setFinish:setFinish, inputRefs:inputRefs, setMessage:setMessage}}>
      <GameHeader StartButton={SudokuStart} game="Sudoku"/>
      </SudokuContext.Provider>
    <main>
      <Message message={message}/>
      <SudokuContext.Provider value={{cells:cells, setCells:setCells, 
      hidden:hidden, setHidden:setHidden, inputRefs:inputRefs, setDisabled:setDisabled, 
      puzzle:puzzle, setPuzzle:setPuzzle, finish:finish, setFinish:setFinish, setMessage}}>
      <SudokuGameboard/>
      </SudokuContext.Provider>
    </main>
    </>
  )
}

export default Sudoku