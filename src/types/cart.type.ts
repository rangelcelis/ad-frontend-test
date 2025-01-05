import { Game } from './game.type';

export type Cart = {
  games: Game[];
  items: number;
  total: number;
};
