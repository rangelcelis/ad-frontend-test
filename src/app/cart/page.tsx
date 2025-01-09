import Summary from '@/app/ui/cart/summary';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cart',
};

const CartPage = () => {
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

      <Summary />
    </section>
  );
};

export default CartPage;
