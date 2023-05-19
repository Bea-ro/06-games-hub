import React, { useEffect, useContext, useRef } from 'react';
import './Button.css';
import { SudokuContext } from '../../../pages/Sudoku/Sudoku';
import { makepuzzle } from 'sudoku';

const SudokuStart = () => {
  const {
    cells,
    disabled,
    setDisabled,
    setCells,
    puzzle,
    setPuzzle,
    setFinish,
    inputRefs,
    setMessage
  } = useContext(SudokuContext);
  const cluesRef = useRef(false);

  const startPlay = () => {
    setPuzzle(makepuzzle);
    setDisabled(true);
    setFinish(false);
    setMessage('');
    inputRefs.current.map((inputRef) => (inputRef.className = 'sdk-cell'));
    cluesRef.current = false;
  };

  useEffect(() => {
    setCells(puzzle);
  }, [puzzle]);

  useEffect(() => {
    if (cells && !cluesRef.current) {
      inputRefs.current.map((inputRef) =>
        inputRef.value ? (inputRef.className = 'clue-input') : (inputRef.className = 'sdk-cell')
      );
      cluesRef.current = true;
    }
  }, [cells]);

  return (
    <>
      <button type="button" className="button" id="start" onClick={startPlay} disabled={disabled}>
        Start
      </button>
    </>
  );
};

export default SudokuStart;
