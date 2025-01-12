export const fetchData = async (page: number, genre: string) => {
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
  const { games, totalPages, currentPage, availableFilters } = await response.json();

  return { games, totalPages, currentPage, availableFilters };
};
