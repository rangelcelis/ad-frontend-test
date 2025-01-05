'use client';

import { useRecoilValue } from 'recoil';
import Image from 'next/image';
import Link from 'next/link';
import { cartSelector } from '@/context/state';
import Summary from './components/Summary';
import Items from './components/Items';
import Empty from './components/Empty';

const CartPage = () => {
  const cart = useRecoilValue(cartSelector);

  return (
    <section className="grid px-6 2xl:px-32">
      <div className="py-4 xl:py-6">
        <Link href="/" className="flex align-center items-center gap-2">
          <div className="flex items-center p-2">
            <Image src="icons/arrow-left.svg" alt="Back to catalog" width={12} height={12} />
          </div>
          <span>Back to Catalog</span>
        </Link>
      </div>

      <div className="grid py-8 xl:py-12 gap-12">
        <div className="grid gap-4">
          <h1 className="text-xl font-bold">Your Cart</h1>
          <span>{cart.items} items</span>
        </div>

        {/* Empty Cart */}
        {cart.items === 0 ? (
          <Empty />
        ) : (
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <Items cart={cart} />
            <Summary cart={cart} />
          </div>
        )}
      </div>
    </section>
  );
};

export default CartPage;
