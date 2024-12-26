import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';
import { FaEarthAfrica } from 'react-icons/fa6';

const Logo: FC<{ className?: string }> = ({ className = 'text-white' }) => {
  return (
    <Link
      className={`flex cursor-pointer ${className} items-center gap-1 text-2xl font-semibold`}
      href="/"
    >
      <FaEarthAfrica className="text-2xl text-button-primary" />
      WriteWiz
    </Link>
  );
};

export default Logo;
