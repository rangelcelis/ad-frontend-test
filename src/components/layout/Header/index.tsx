import Image from 'next/image';
import Link from 'next/link';
import './header.css';

const Header = () => {
  return (
    <header>
      <nav className="header">
        <Link href="/">
          <Image src="logo.svg" alt="GamerShop Logo" width={148} height={26} />
        </Link>
        <Link href="/cart">
          <img src="icons/cart.svg" alt="Menu Option Cart" width="100%" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
