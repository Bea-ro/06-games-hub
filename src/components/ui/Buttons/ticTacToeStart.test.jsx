/**
 * @vitest-environment jsdom
 */

import { describe, test } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TicTacToeStart from './TicTacToeStart';
import { TicTacToeContext } from '../../../pages/TicTacToe/TicTacToe';

describe('TicTacToeStart', () => {
  test('should be render the player in turn', () => {
    TicTacToeContext;

    render(
      <TicTacToeContext.Provider
        value={{
          setCells: () => {},
          player: false,
          setPlayer: () => {},
          setMessage: () => {},
          disabled: false,
          setDisabled: () => {},
          setWinnerCells: () => {}
        }}
      >
        <TicTacToeStart />
      </TicTacToeContext.Provider>
    );

    const buttonEl = screen.getByTestId('test-start');

    expect(screen.queryByText(/Es el turno de/)).not.toBeInTheDocument();

    userEvent.click(buttonEl);

    waitFor(() => expect(screen.queryByText('Es el turno de X')).toBeInTheDocument());
  });
});