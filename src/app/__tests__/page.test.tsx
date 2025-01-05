import { RecoilRoot } from 'recoil';
import { render, screen, waitFor } from '@testing-library/react';
import HomePage from '@/app/page';

jest.mock('next/navigation', () => {
  return {
    useRouter: jest.fn(() => ({
      push: jest.fn(),
      replace: jest.fn(),
    })),
    useSearchParams: jest.fn(() => ({
      get: jest.fn(),
    })),
    usePathname: jest.fn(),
  };
});

describe('Home Page initial render', () => {
  test('should render all components OK', async () => {
    await waitFor(() => {
      render(<HomePage />, { wrapper: RecoilRoot });
    });

    expect(screen.getByRole('heading', { level: 1, name: /Top Sellers/i })).toBeDefined();
    expect(screen.getByTestId('select-genre')).toBeDefined();
    expect(screen.getAllByRole('article')).toHaveLength(30);
    expect(screen.getByRole('button', { name: /See More/i })).toBeEnabled();
  });
});
