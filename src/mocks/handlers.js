import { allGames, availableFilters } from '@/utils/endpoint';
import { http, HttpResponse } from 'msw';

const handlers = [
  http.get('http://localhost:3000/api/games', () => {
    return HttpResponse.json({
      availableFilters,
      games: allGames.slice(0, 6),
      totalPages: Math.ceil(allGames.length / 6),
      currentPage: 1,
    });
  }),
];

export default handlers;
