'use client';

import { Game } from '@/types/game.type';

const STORAGE_KEY = 'products';

export const getCart = () => {
  if (typeof window !== 'undefined') {
    const storage = localStorage.getItem(STORAGE_KEY) || '[]';
    return JSON.parse(storage) as Game[];
  }

  return [];
};

export const addToCart = (game: Game) => {
  const products = getCart();
  products.push(game);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
};

export const removeFromCart = (gameId: string) => {
  const products = getCart();
  const filteredProducts = products.filter((item) => item.id !== gameId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredProducts));
};

export const isInCart = (gameId: string) => {
  const products = getCart();
  return products.some((game) => game.id === gameId);
};
