import HomePage from '@/app/page';
import { render, screen, waitFor } from '@testing-library/react';

describe('Home Page initial render', () => {
  test('should render all components OK', async () => {
    const searchParams = Promise.resolve({ genre: '', page: '' });

    await waitFor(() => {
      render(<HomePage searchParams={searchParams} />);
    });

    expect(screen.getByRole('heading', { level: 1, name: /Top Sellers/i })).toBeDefined();
    expect(screen.getByTestId('select-genre')).toBeDefined();
    expect(screen.getAllByRole('article')).toHaveLength(30);
    expect(screen.getByRole('button', { name: /See More/i })).toBeEnabled();
  });
});
