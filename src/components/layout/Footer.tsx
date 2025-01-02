import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex justify-center bg-gray-700 p-12">
      <Link href="/">
        <Image src="ad_logo.svg" alt="Logo Apply Digital" width={170} height={44.09} />
      </Link>
    </footer>
  );
};

export default Footer;
