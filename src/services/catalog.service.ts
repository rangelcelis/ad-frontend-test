export const getGames = async (page: number, genre: string) => {
  const url = new URL(process.env.API_BASE_URL || 'http://localhost:3000//api/games');
  url.searchParams.append('page', page.toString());

  if (genre !== 'all') {
    url.searchParams.append('genre', genre);
  }

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const { games, totalPages, currentPage } = await response.json();

  return { games, totalPages, currentPage };
};

export const getGenres = async () => {
  const response = await fetch(process.env.API_BASE_URL || 'http://localhost:3000//api/games');
  const { availableFilters } = await response.json();

  return availableFilters;
};
