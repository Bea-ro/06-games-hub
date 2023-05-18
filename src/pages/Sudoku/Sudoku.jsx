import React, { useState, useEffect, useRef, createContext } from 'react';
import GameHeader from '../../components/Headers/GameHeader';
import SudokuStart from '../../components/ui/Buttons/SudokuStart';
import Message from '../../components/ui/Message/Message';
import SudokuGameboard from '../../components/Sudoku/SudokuGameboard';

export const SudokuContext = createContext();

const Sudoku = ({ message, setMessage }) => {
  const [cells, setCells] = useState(Array(81).fill(null));
  const [puzzle, setPuzzle] = useState(Array(81).fill(null));
  const [disabled, setDisabled] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [finish, setFinish] = useState(false);
  const inputRefs = useRef([]);


  useEffect(() => {
    setMessage('');
  }, []);

  return (
    <>
      <SudokuContext.Provider
        value={{
          cells: cells,
          setCells: setCells,
          disabled: disabled,
          setDisabled: setDisabled,
          puzzle: puzzle,
          setPuzzle: setPuzzle,
          finish: finish,
          setFinish: setFinish,
          hidden: hidden,
            setHidden: setHidden,
          inputRefs: inputRefs,
          setMessage: setMessage    
        }}
      >
        <GameHeader StartButton={SudokuStart} game="Sudoku" />
      <main>
        <Message message={message} />
          <SudokuGameboard />
      </main>
      </SudokuContext.Provider>
    </>
  );
};

export default Sudoku;
