'use client';

import { Game } from '@/types/game.type';

const STORAGE_KEY = 'products';

const get = () => {
  if (typeof window !== 'undefined') {
    const storage = localStorage.getItem(STORAGE_KEY) || '[]';
    return JSON.parse(storage) as Game[];
  }

  return [];
};

const save = (game: Game) => {
  const products = get();
  products.push(game);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
};

const remove = (gameId: string) => {
  const products = get();
  const filteredProducts = products.filter((item) => item.id !== gameId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredProducts));
};

const storage = {
  save,
  get,
  remove,
};

export default storage;
