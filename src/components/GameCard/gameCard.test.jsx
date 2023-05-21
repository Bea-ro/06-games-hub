/**
* @vitest-environment jsdom
*/

import { describe, test } from 'vitest';
import { render, screen, waitFor} from '@testing-library/react';
import GameCard from './GameCard';
import { games } from '../../data/games-data'

describe('GameCard', () => {
test('should be render the correct alt image', () => {
render(<GameCard/>)
waitFor(() => games.forEach((game) => { 
    screen.getAllByAltText(game.name).toBeVisible()
}))
})
})