import { RecoilRoot } from 'recoil';
import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomePage from './page';

// Mock useRouter:
vi.mock('next/navigation', async () => {
  const actual = await vi.importActual('next/navigation');
  return {
    ...actual,
    useRouter: vi.fn(() => ({
      push: vi.fn(),
      replace: vi.fn(),
    })),
    useSearchParams: vi.fn(() => ({
      get: vi.fn(),
    })),
    usePathname: vi.fn(),
  };
});

describe('Home Page initial render', () => {
  test('should render all components OK', () => {
    render(<HomePage />, { wrapper: RecoilRoot });
    expect(screen.getByRole('heading', { level: 1, name: /Top Sellers/i })).toBeDefined();
    expect(screen.getByTestId('select-genre')).toBeDefined();
  });
});
