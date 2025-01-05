import { RecoilRoot } from 'recoil';
import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import CartPage from './page';

describe('Cart page initial render', () => {
  test('should render OK', () => {
    render(<CartPage />, { wrapper: RecoilRoot });

    expect(screen.getByRole('link', { name: /Back/i })).toBeDefined();
    expect(screen.getByRole('heading', { level: 1, name: /Your cart/i })).toBeDefined();
    expect(screen.getByText('0 items')).toBeDefined();
    expect(screen.getByRole('heading', { level: 2, name: /Cart is empty/i })).toBeDefined();
  });
});
