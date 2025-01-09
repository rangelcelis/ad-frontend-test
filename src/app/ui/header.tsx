import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav className="flex mx-auto items-center justify-between px-6 2xl:px-32 py-5 gap-4 bg-gray-200">
        <Link href="/" replace>
          <Image src="logo.svg" alt="GamerShop Logo" width={148} height={26} priority />
        </Link>
        <Link href="/cart">
          <img src="icons/cart.svg" alt="Menu Option Cart" width="100%" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
