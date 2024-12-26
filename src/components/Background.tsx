import Image from 'next/image';
import React from 'react';

import background from '@/images/scooter.webp';

const Background = () => {
  return (
    <div className="absolute inset-0 h-screen w-full">
      <Image
        src={background}
        alt="scooter"
        className="h-full w-full object-cover object-bottom"
      />
    </div>
  );
};

export default Background;
