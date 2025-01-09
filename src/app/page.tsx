import { fetchData } from '@/services/catalog.service';
import { Metadata } from 'next';
import CatalogSection from './ui/catalog-section';
import FilterSection from './ui/filter-section';

export const metadate: Metadata = {
  title: 'Catalog',
};

const HomePage = async (props: {
  searchParams?: Promise<{
    genre?: string;
    page?: string;
  }>;
}) => {
  const searchParams = await props.searchParams;
  const genre = searchParams?.genre || 'all';
  const page = Number(searchParams?.page) || 1;

  const { games, totalPages, availableFilters } = await fetchData(page, genre);

  return (
    <main>
      <FilterSection options={availableFilters} />
      <CatalogSection products={games} page={page} totalPages={totalPages} filter={genre} />
    </main>
  );
};

export default HomePage;
