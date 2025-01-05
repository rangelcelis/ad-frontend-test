import { atom, selector } from 'recoil';
import { Cart } from '@/types/cart.type';
import { Catalog } from '@/types/catalog.type';
import { Game } from '@/types/game.type';
import storage from '@/services/storage.service';

export const catalogAtom = atom<Catalog>({
  key: 'catalogAtom',
  default: {
    games: [],
    hasMorePages: false,
  },
});

const productsAtom = atom<Game[]>({
  key: 'productsAtom',
  default: storage.get(),
});

export const cartSelector = selector<Cart>({
  key: 'cartSelector',
  get: ({ get }) => {
    const cart = get(productsAtom);

    return {
      games: cart,
      items: cart.length,
      total: cart.reduce((acc, game) => acc + game.price, 0),
    };
  },
});

export const updateCartSelector = selector({
  key: 'updateCartSelector',
  get: ({ get }) => {
    return get(cartSelector);
  },
  set: ({ get, set }, game: Game) => {
    const cart = get(productsAtom);

    if (cart.some((item) => item.id === game.id)) {
      set(
        productsAtom,
        cart.filter((item) => item.id !== game.id)
      );
      storage.remove(game.id);
    } else {
      set(productsAtom, [...cart, game]);
      storage.save(game);
    }
  },
});
