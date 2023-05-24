/**
* @vitest-environment jsdom
*/

import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import TicTacToeGameboard from './TicTacToeGameboard';

describe('TicTacToeGameboard', () => {
test('should be render the correct player when the user click', () => {
render(<TicTacToeGameboard/>)
const buttonEls = screen.getAllByTestId('test-gamecell');

userEvent.click(buttonEls[0]);
expect(screen.getByText('X')).toBeInTheDocument();
expect(screen.queryByText('O')).not.toBeInTheDocument();

})
})

    