import { useSetRecoilState } from 'recoil';
import Image from 'next/image';
import { formatAmount } from '@/utils/format-number';
import { Game } from '@/types/game.type';
import { updateCartSelector } from '@/context/state';
import { Cart } from '@/types/cart.type';

const Items = ({ cart }: { cart: Cart }) => {
  const updateCart = useSetRecoilState(updateCartSelector);

  const hanldeRemoveFromCart = (game: Game) => {
    updateCart(game);
  };

  return (
    <div className="grid">
      {cart.games.map((item) => (
        <div
          key={item.id}
          className="flex flex-col lg:flex-row border-b border-b-color-secondary last:border-none gap-4 px-4 py-5 relative animate-fadeIn"
        >
          <div className="items-start">
            <img
              src={item.image}
              alt={item.name}
              className="w-full lg:min-w-[256px] h-[136px] xl:h-[156px] object-cover"
            />
          </div>
          {item.isNew && (
            <div className="px-3 py-2 rounded rounded-lg bg-stone-100 absolute top-7 left-6">
              New
            </div>
          )}
          <div className="w-fit text-gray-500 lg:order-last absolute right-0">
            <button onClick={() => hanldeRemoveFromCart(item)}>X</button>
          </div>
          <div className="grid w-full gap-6">
            <div className="grid gap-3 w-full">
              <span className="text-gray-500 font-bold text-sm">{item.genre}</span>
              <span className="text-item-primary font-bold text-lg">{item.name}</span>
              <span className="text-gray-500 font-normal">{item.description}</span>
            </div>
            <span className="text-right">{formatAmount(item.price)}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
