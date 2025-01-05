import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Button from './Button';

describe('Button Compoment render', () => {
  test('should render all elements', () => {
    render(<Button onClick={() => {}}>Label</Button>);
    expect(screen.getByRole('button', { name: /Label/i })).toBeDefined();
    screen.debug();
  });
});
