/**
* @vitest-environment jsdom
*/

import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import LoginHeader from './LoginHeader';

describe('LoginHeader', () => {
test('should be render the correct text', () => {
render(<LoginHeader/>)
expect(screen.getByText('¿A qué jugamos?')).toBeInTheDocument()
})
})