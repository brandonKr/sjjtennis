import Image from 'next/image';
import React from 'react';

import demo from '@/images/mockup.png';

const SectionDemo = () => {
  return (
    <div className="container">
      <div className="">
        <Image src={demo} alt="demo app" className="mx-auto rounded-2xl" />
      </div>
    </div>
  );
};

export default SectionDemo;
