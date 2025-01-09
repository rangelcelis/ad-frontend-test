import { render, screen } from '@testing-library/react';
import Filter from '../../ui/filter';

describe('Filter compoment render', () => {
  test('should render all elements', () => {
    render(<Filter options={['A', 'B', 'C', 'D']} />);

    const select = screen.getByRole('combobox', { name: 'Genre' });
    expect(select).toBeEnabled();
    expect((screen.getByRole('option', { name: 'All' }) as HTMLOptionElement).selected).toBe(true);
  });
});
