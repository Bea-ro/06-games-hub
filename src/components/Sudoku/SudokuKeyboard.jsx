import React, { useContext } from 'react';
import './SudokuKeyboard.css';
import { SudokuContext } from '../../pages/Sudoku/Sudoku';
import { sudokuNumbers } from '../../data/data';

const SudokuKeyboard = ({ selectedInput }) => {
  const { cells, setCells, setHidden, disabled, inputRefs } = useContext(SudokuContext);

  const handleNumberSelection = (number) => {
    setHidden(false);
    console.log(selectedInput);
    console.log(inputRefs.current[1].value);
    console.log(inputRefs.current[1].className);
    const newCells = cells.map((cell, i) =>
      selectedInput === i && inputRefs.current[i].className != 'clue-input' ? number - 1 : cell
    );
    setCells(newCells);
  };

  return (
    <div className="sudoku-keyboard">
      {sudokuNumbers.map((num) => (
        <button
          className="key"
          key={num}
          type="button"
          disabled={!disabled}
          onClick={() => {
            handleNumberSelection(num);
          }}
        >
          {num}
        </button>
      ))}
    </div>
  );
};

export default SudokuKeyboard;
