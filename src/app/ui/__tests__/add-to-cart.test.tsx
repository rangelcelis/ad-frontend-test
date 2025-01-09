import { Game } from '@/types/game.type';
import { fireEvent, render, screen } from '@testing-library/react';
import { AddToCartButton } from '../add-to-cart-button';

const game: Game = {
  id: '1',
  description: 'desc',
  genre: 'RPG',
  image: '',
  isNew: true,
  name: 'Test Game',
  price: 10,
};

describe('Button Compoment render', () => {
  test('should render all elements', () => {
    render(<AddToCartButton game={game} />);

    const button = screen.getByRole('button', { name: 'Add to cart' });
    expect(button).toBeEnabled();
  });

  test('should change label on click', () => {
    render(<AddToCartButton game={game} />);

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Add to cart');
    fireEvent.click(button);

    expect(button).toHaveTextContent('Remove');
    fireEvent.click(button);

    expect(button).toHaveTextContent('Add to cart');
  });
});
