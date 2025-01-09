'use client';

import { addToCart, isInCart, removeFromCart } from '@/services/storage.service';
import { Game } from '@/types/game.type';
import { useEffect, useState } from 'react';

export const AddToCartButton = ({ game }: { game: Game }) => {
  const [label, setLabel] = useState('');

  useEffect(() => {
    setLabel(isInCart(game.id) ? 'Remove' : 'Add to cart');
  }, [game.id]);

  function handleButtonClick() {
    const exist = isInCart(game.id);

    if (exist) {
      removeFromCart(game.id);
      setLabel('Add to cart');
    } else {
      addToCart(game);
      setLabel('Remove');
    }
  }

  return (
    <button
      className={
        'px-6 py-4 rounded-lg font-bold uppercase text-color-primary border border-color-primary hover:bg-gray-200'
      }
      onClick={handleButtonClick}
    >
      {label}
    </button>
  );
};
