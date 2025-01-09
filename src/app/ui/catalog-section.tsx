'use client';

import { AddToCartButton } from '@/app/ui/add-to-cart-button';
import { Game } from '@/types/game.type';
import { formatAmount } from '@/utils/format-number';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const CatalogSection = ({
  products,
  page,
  totalPages,
  filter,
}: {
  products: Game[];
  page: number;
  totalPages: number;
  filter: string;
}) => {
  const [games, setGames] = useState<Game[]>([]);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (page > 1) {
      setGames([...games, ...products]);
    } else {
      setGames([...products]);
    }
  }, [products]);

  function handleButtonClick(e: any) {
    const params = new URLSearchParams(searchParams);
    params.set('page', String(page + 1));
    params.set('genre', filter);

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <section className="grid px-6 2xl:px-32 py-8 2xl:py-12 gap-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {games.map((game: Game) => (
          <article
            key={game.id}
            className="grid border border-color-secondary rounded-2xl p-6 gap-5 relative animate-fadeIn"
          >
            <div className="w-full h-[240px] rounded-t-2xl relative">
              <Image
                fill
                priority
                src={game.image}
                sizes="(min-width: 768px): 33vw"
                alt={game.name}
                className="object-cover rounded-t-2xl"
              />
            </div>
            {game.isNew && (
              <div className="px-3 py-2 rounded rounded-lg bg-stone-100 absolute top-10 left-10">
                New
              </div>
            )}
            <h2 className="uppercase font-bold text-gray-500">{game.genre}</h2>
            <div className="flex justify-between">
              <span className="text-lg font-bold text-item-primary">{game.name}</span>
              <span className="text-xl font-bold text-item-primary">
                {formatAmount(game.price)}
              </span>
            </div>
            <AddToCartButton game={game} />
          </article>
        ))}
      </div>

      {page < totalPages && (
        <div className="grid xs:w-full md:w-fit">
          <button
            className="px-6 py-4 rounded-lg font-bold uppercase bg-color-primary text-white hover:bg-gray-700"
            onClick={handleButtonClick}
          >
            See More
          </button>
        </div>
      )}
    </section>
  );
};

export default CatalogSection;
