import Image from 'next/image';
import Link from 'next/link';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Link href="/">
        <Image src="ad_logo.svg" alt="Logo Apply Digital" width={170} height={45} />
      </Link>
    </footer>
  );
};

export default Footer;
