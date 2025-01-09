'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type FilterProps = {
  name: string;
  label: string;
  options: string[];
};

const Filter = ({ name, label, options }: FilterProps) => {
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
      <label htmlFor={name}>{label}</label>
      <span>|</span>
      <select
        name={name}
        value={searchParams.get('genre')?.toString()}
        className="w-full md:max-w-xs"
        onChange={handleSelectChange}
        data-testid={`select-${name}`}
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
