import { render, screen } from '@testing-library/react';
import Button from '../Button';

describe('Button Compoment render', () => {
  test('should render all elements', () => {
    render(<Button onClick={() => {}}>Label</Button>);

    const button = screen.getByRole('button', { name: /Label/i });
    expect(button).toBeEnabled();
  });
});
