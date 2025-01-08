'use client';

import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import catalogService from '@/services/catalog.service';
import { catalogAtom } from '@/context/state';
import HomeHeader from './components/HomeHeader';
import HomeCatalog from './components/HomeCatalog';
import Loader from '@/app/ui/common/Loader';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [catalog, setCatalog] = useRecoilState(catalogAtom);
  const [filter, setFilter] = useState('all');
  const [page, setPage] = useState(1);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const fetchData = async (page: number, filter: string) => {
    setIsLoading(true);
    const { games, currentPage, totalPages } = await catalogService.getGames(page, filter);

    router.replace(`${pathname}?genre=${filter}&page=${page}`, { scroll: false });

    setCatalog({
      ...catalog,
      games: currentPage > 1 ? [...catalog.games, ...games] : [...games],
      hasMorePages: currentPage < totalPages,
    });
    setIsLoading(false);
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const pageParam = Number(params.get('page'));
    const filterParam = params.get('genre');

    if (filterParam && pageParam && catalog.games.length === 0) {
      setFilter(filterParam);
      fetchData(pageParam, filterParam);
    } else {
      fetchData(page, filter);
    }
  }, [filter, page]);

  return (
    <main>
      <Loader show={isLoading} />
      <HomeHeader
        filter={filter}
        onFilterChange={(newFilter) => {
          setFilter(newFilter);
          setPage(1);
        }}
      />
      <HomeCatalog
        onLoadMoreClick={() => {
          const newPage = Number(searchParams.get('page')) + 1;
          setPage(newPage);
        }}
      />
    </main>
  );
};

export default HomePage;
