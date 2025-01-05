'use client';

import { useEffect, useState } from 'react';
import { getGenres } from '@/services/catalog.service';
import Select from '@/components/common/Select';

type HomeHeaderProps = {
  filter: string;
  onFilterChange: (filter: string) => void;
};

const HomeHeader = ({ filter, onFilterChange }: HomeHeaderProps) => {
  const [filterOptions, setFilterOptions] = useState<string[]>([]);

  useEffect(() => {
    async function fetchData() {
      const genres = await getGenres();
      setFilterOptions(genres);
    }

    fetchData();
  }, []);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange(event.target.value);
  };

  return (
    <section className="grid px-6 2xl:px-32 py-8 2xl:py-12 gap-8 border-b border-b-color-tertiary rounded-lg">
      <h1 className="text-2xl font-bold text-item-primary uppercase">Top Sellers</h1>
      <div className="flex justify-end gap-6">
        <Select
          name="genre"
          label="Genre"
          options={filterOptions}
          value={filter}
          onChange={handleFilterChange}
        />
      </div>
    </section>
  );
};

export default HomeHeader;
