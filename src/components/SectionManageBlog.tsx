import Image from 'next/image';
import React from 'react';

import { sectionManageData } from '@/data/content';
import manage from '@/images/manage.png';
import Heading from '@/shared/Heading/Heading';

const SectionManageBlog = () => {
  return (
    <div className="container items-center justify-between space-y-10 md:flex md:space-y-0">
      <div className="md:basis-[40%]">
        <Heading isMain desc={sectionManageData.title}>
          {sectionManageData.heading}
        </Heading>
        <p className="text-xl text-neutral-500 md:w-[90%]">
          {sectionManageData.description}
        </p>
      </div>
      <div className="md:basis-[55%]">
        <Image
          src={manage}
          alt="manage blog photo"
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};

export default SectionManageBlog;
