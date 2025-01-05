import { Game } from './game.type';

export type Catalog = {
  games: Game[];
  hasMorePages: boolean;
};
