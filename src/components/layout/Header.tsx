import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav className="flex justify-between items-center p-4 bg-gray-200">
        <Link href="/">
          <h1>GamerShop</h1>
        </Link>
        <Link href="/cart">
          <img src="icons/cart.svg" alt="Menu Option Cart" width="100%" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
