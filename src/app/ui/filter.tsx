'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type FilterProps = {
  options: string[];
};

const Filter = ({ options }: FilterProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  function handleSelectChange(e: any) {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    params.set('genre', e.target.value);

    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <>
      <label htmlFor="filter">Genre</label>
      <span>|</span>
      <select
        name="filter"
        className="w-full md:max-w-xs"
        aria-label="Genre"
        value={searchParams.get('genre')?.toString()}
        onChange={handleSelectChange}
      >
        <option value="all">All</option>
        {options.map((opt: string) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </>
  );
};

export default Filter;
