import { allGames, availableFilters } from '@/utils/endpoint';
import { http, HttpResponse } from 'msw';

const handlers = [
  http.get('http://localhost:3000/api/games', () => {
    return HttpResponse.json({
      availableFilters,
      games: allGames,
      totalPages: allGames.length,
      currentPage: 1,
    });
  }),
];

export default handlers;
