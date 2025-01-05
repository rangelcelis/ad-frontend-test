import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer Compoment render', () => {
  test('should render all elements', () => {
    render(<Footer />);
    expect(screen.getByRole('link')).toBeDefined();
    expect(screen.getByRole('img', { name: 'Logo Apply Digital' })).toBeDefined();
  });
});
