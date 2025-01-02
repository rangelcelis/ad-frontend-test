import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './page';

test('render Home page', () => {
  render(<Home />);
  expect(screen.getByRole('heading', { level: 1, name: /Hello/i })).toBeDefined();
});
