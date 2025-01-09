import { render, screen } from '@testing-library/react';
import Header from '../../header';

describe('Header Compoment render', () => {
  test('should render all elements', () => {
    render(<Header />);
    expect(screen.getAllByRole('link')).toHaveLength(2);
    expect(screen.getByRole('img', { name: /Logo/i })).toBeDefined();
    expect(screen.getByRole('img', { name: /Menu/i })).toBeDefined();
  });
});
