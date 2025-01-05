import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex justify-center bg-gray-700 px-6 xl:px-32 py-16">
      <Link href="/">
        <Image src="ad_logo.svg" alt="Logo Apply Digital" width={170} height={45} priority />
      </Link>
    </footer>
  );
};

export default Footer;
