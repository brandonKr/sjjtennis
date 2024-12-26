import Image from 'next/image';
import React from 'react';

import { logos } from '@/data/content';

const SectionLogos = () => {
  return (
    <div className="container grid grid-cols-5 gap-5 py-6 md:gap-16 md:py-10">
      {logos.map((logo) => (
        <div key={logo.src} className="flex items-center">
          <Image src={logo} alt="logo" className="w-full object-contain" />
        </div>
      ))}
    </div>
  );
};

export default SectionLogos;
