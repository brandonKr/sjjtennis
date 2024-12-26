import Image from 'next/image';
import React from 'react';
import { BsStars } from 'react-icons/bs';
import { FiArrowUpRight } from 'react-icons/fi';

import { headingSectionData } from '@/data/content';
import mockup from '@/images/hero.webp';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import ButtonSecondary from '@/shared/Button/ButtonSecondary';

const SectionHeader = () => {
  return (
    <div className="container items-center justify-between space-y-10 text-neutral-100 lg:flex lg:space-y-0">
      <div className="flex flex-col justify-start gap-10 lg:basis-1/2">
        <div className="">
          <span className="inline-flex items-center gap-1 rounded-lg bg-button-primary/10 p-3 text-lg font-medium text-button-primary">
            {headingSectionData.title}{' '}
            <BsStars className="text-lg text-yellow-400" />
          </span>
        </div>
        <h1
          className="acumin-font text-[45px] font-semibold md:text-[60px]"
          style={{ lineHeight: '1em' }}
        >
          {headingSectionData.heading}
        </h1>
        <p className="text-xl text-neutral-500 md:w-[85%]">
          {headingSectionData.description}
        </p>
        <div className="flex items-center gap-5">
          <ButtonPrimary sizeClass="px-5 py-4">REQUEST DEMO</ButtonPrimary>
          <ButtonSecondary
            className="flex items-center gap-2 rounded-full border border-white"
            sizeClass="px-5 py-3.5"
          >
            LEARN MORE <FiArrowUpRight />
          </ButtonSecondary>
        </div>
        <div className="grid w-[90%] grid-cols-3 gap-5 divide-x divide-neutral-500">
          {headingSectionData.stats.map((stat) => (
            <div key={stat.stat} className="pl-5">
              <h3 className="text-2xl font-medium">{stat.stat}</h3>
              <p className="text-neutral-500">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:basis-[48%]">
        <Image src={mockup} alt="mockup" className="w-full object-cover" />
      </div>
    </div>
  );
};

export default SectionHeader;
