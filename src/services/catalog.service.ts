const getGames = async (page: number, genre: string) => {
  const url = new URL(process.env.NEXT_PUBLIC_API_BASE_URL || '');
  url.searchParams.append('page', page.toString());

  if (genre && genre !== 'all') {
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

const getGenres = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL || '');
  const { availableFilters } = await response.json();

  return availableFilters;
};

const catalog = {
  getGames,
  getGenres,
};

export default catalog;
