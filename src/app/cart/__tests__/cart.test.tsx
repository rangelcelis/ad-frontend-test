import { render, screen } from '@testing-library/react';
import CartPage from '../page';

describe('Cart page initial render', () => {
  test('should render OK', () => {
    render(<CartPage />);

    expect(screen.getByRole('link', { name: /Back/i })).toBeDefined();
    expect(screen.getByRole('heading', { level: 2, name: /Cart is empty/i })).toBeDefined();
  });
});
