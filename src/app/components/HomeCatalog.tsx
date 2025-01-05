'use client';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Game } from '@/types/game.type';
import { formatAmount } from '@/utils/format-number';
import { cartSelector, catalogAtom, updateCartSelector } from '@/context/state';
import Button from '@/components/common/Button';

type HomeCatalogProps = {
  onLoadMoreClick: () => void;
};

const HomeCatalog = ({ onLoadMoreClick }: HomeCatalogProps) => {
  const catalog = useRecoilValue(catalogAtom);
  const cart = useRecoilValue(cartSelector);
  const updateCart = useSetRecoilState(updateCartSelector);

  const handleGameButtonClick = (game: Game) => {
    updateCart(game);
  };

  const isInCart = (gameId: string): boolean => {
    return cart.games.some((item) => item.id === gameId);
  };

  return (
    <section className="grid px-6 2xl:px-32 py-8 2xl:py-12 gap-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {catalog.games.map((game) => (
          <article
            key={game.id}
            className="grid border border-color-secondary rounded-2xl p-6 gap-5 relative animate-fadeIn"
          >
            <img
              src={game.image}
              alt={game.name}
              className="w-full h-[240px] object-cover rounded-t-2xl"
            />

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
            <Button
              variant="secondary"
              onClick={() => {
                handleGameButtonClick(game);
              }}
            >
              {isInCart(game.id) ? 'Remove' : 'Add to Cart'}
            </Button>
          </article>
        ))}
      </div>

      {catalog.hasMorePages && (
        <div className="grid xs:w-full md:w-fit">
          <Button onClick={onLoadMoreClick}>SEE MORE</Button>
        </div>
      )}
    </section>
  );
};

export default HomeCatalog;
