import { render, screen } from '@testing-library/react';
import Select from '../Select';

describe('Select Compoment render', () => {
  test('should render all elements', () => {
    render(
      <Select
        label="Test Select"
        name="test-select"
        onChange={() => {}}
        options={['A', 'B', 'C', 'D']}
        value="A"
      />
    );

    const select = screen.getByTestId('select-test-select');
    expect(select).toBeEnabled();
    expect(select).toHaveProperty('value', 'A');
  });
});
