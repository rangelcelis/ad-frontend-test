'use client';

import { getCart, removeFromCart } from '@/services/storage.service';
import { Game } from '@/types/game.type';
import { formatAmount } from '@/utils/format-number';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Empty from './empty';

const Summary = () => {
  const [cart, setCart] = useState<Game[]>([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  function handleRemoveClick(gameId: string) {
    const filteredCart = cart.filter((item) => item.id !== gameId);
    setCart(filteredCart);
    removeFromCart(gameId);
  }

  const total = cart.reduce((total, game) => {
    return (total += game.price);
  }, 0);

  if (cart.length === 0) {
    return <Empty />;
  }

  return (
    <div className="grid py-8 xl:py-12 gap-12">
      <div className="grid gap-4">
        <h1 className="text-xl font-bold">Your Cart</h1>
        <span>{cart.length} items</span>
      </div>

      <div className="grid md:grid-cols-2 gap-20">
        <div className="grid">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col lg:flex-row border-b border-b-color-secondary last:border-none gap-4 px-4 py-5 relative animate-fadeIn"
            >
              <div className="items-start">
                <div className="w-full lg:min-w-[256px] h-[136px] xl:h-[156px] relative">
                  <Image
                    fill
                    priority
                    src={item.image}
                    alt={item.name}
                    sizes="(min-width: 768px): 33vw"
                    className="object-cover"
                  />
                </div>
              </div>
              {item.isNew && (
                <div className="px-3 py-2 rounded rounded-lg bg-stone-100 absolute top-7 left-6">
                  New
                </div>
              )}
              <div className="w-fit text-gray-500 lg:order-last absolute right-0">
                <button onClick={() => handleRemoveClick(item.id)}>X</button>
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

        <div className="grid h-fit gap-10 items-start">
          <div className="grid gap-6 px-4 lg:px-6 py-6 lg:py-8 border border-color-secondary p-6 rounded-lg">
            <div className="grid gap-3">
              <h2 className="text-xl text-item-primary font-bold">Order Summary</h2>
              <span className="text-lg text-item-primary">{cart.length} items</span>
            </div>

            <div className="grid gap-6 py-5">
              {cart.map((item) => (
                <div key={item.id} className="flex w-full justify-between">
                  <span>{item.name}</span>
                  <span>{formatAmount(item.price)}</span>
                </div>
              ))}
              <hr className="border border-color-secondary opacity-50" />
              <div className="flex w-full justify-between">
                <span className="text-xl font-bold">Order Total</span>
                <span className="text-xl font-bold">{formatAmount(total)}</span>
              </div>
            </div>
          </div>

          <div className="grid w-full">
            <button className="px-6 py-4 rounded-lg font-bold uppercase bg-color-primary text-white hover:bg-gray-700">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
