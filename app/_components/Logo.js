import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo.png';

function Logo() {
  return (
    <Link href='/' className='flex items-center gap-4 z-10'>
      {/* <Image src='/logo.png' height='60' width='60' alt='The Wild Oasis logo' /> */}
      {/* When we import image statifally(import image), we don't need to set width and heigh. But we set here because the original image is large. We can set quality and other attributes when we import image statically */}
      <Image
        src={logo}
        height='60'
        width='60'
        quality={100}
        alt='The Wild Oasis logo'
      />
      <span className='text-xl font-semibold text-primary-100'>
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
