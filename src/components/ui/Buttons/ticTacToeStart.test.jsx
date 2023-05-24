/**
* @vitest-environment jsdom
*/

import { describe, test } from 'vitest';
import { render, screen, waitFor} from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import TicTacToeStart from './TicTacToeStart';

describe('TicTacToeStart', () => {
    test('should be render the player in turn', () => {
        render(<TicTacToeStart/>)
        const buttonEl = screen.getByTestId('test-start')
        expect(screen.queryByText(/Es el turno de/)).not.toBeInTheDocument();
        userEvent.click(buttonEl)
        waitFor(() => expect(screen.queryByText('Es el turno de X')).toBeInTheDocument())
        })
})


