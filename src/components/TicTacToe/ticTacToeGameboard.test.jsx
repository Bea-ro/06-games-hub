/**
* @vitest-environment jsdom
*/

import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import  userEvent from '@testing-library/user-event';
import TicTacToeGameboard from './TicTacToeGameboard';

describe('TicTacToeGameboard', () => {
test('should be render the correct player when the user click', async() => {
    const cells = ['red', 'pink', 'blue']
    const setMessage = () => {}
    const setDisabled = () => {}
render(
<TicTacToeGameboard
cells={cells}
setMessage={setMessage}
setDisabled={setDisabled}
/>)
await waitFor(()=> {
    const button = document.querySelectorAll('gamecell');
    expect(button).ToBeInTheDocument();
    userEvent.click(button);
    expect(screen.getByText('X')).toBeInTheDocument();
    expect(screen.queryByText('O')).not.toBeInTheDocument();
})

})
})

    