import { atom, selector } from 'recoil';
import { Cart } from '@/types/cart.type';
import { Catalog } from '@/types/catalog.type';
import { Game } from '@/types/game.type';
import storageService from '@/services/storage.service';

export const catalogAtom = atom<Catalog>({
  key: 'catalogAtom',
  default: {
    games: [],
    hasMorePages: false,
  },
});

const productsAtom = atom<Game[]>({
  key: 'productsAtom',
  default: storageService.get(),
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
  set: ({ get, set }, newCart) => {
    const cart = get(productsAtom);

    const { games } = newCart as Cart;
    const [game] = games;

    if (cart.some((item) => item.id === game.id)) {
      set(
        productsAtom,
        cart.filter((item) => item.id !== game.id)
      );
      storageService.remove(game.id);
    } else {
      set(productsAtom, [...cart, game]);
      storageService.save(game);
    }
  },
});
