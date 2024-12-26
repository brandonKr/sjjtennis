import Image from 'next/image';
import React from 'react';

import { joinAIData } from '@/data/content';
import app from '@/images/drivers.png';
import ButtonSecondary from '@/shared/Button/ButtonSecondary';
import Heading from '@/shared/Heading/Heading';

const SectionJoinAI = () => {
  return (
    <div className="gradient container overflow-hidden rounded-2xl pt-10 lg:pt-0">
      <div className="items-center justify-between lg:mt-0 lg:flex">
        <div className="lg:basis-[70%]">
          <p className="mb-3 block font-semibold text-neutral-200">
            {joinAIData.title}
          </p>
          <Heading className="text-white" isMain>
            {joinAIData.heading}
          </Heading>
          <p className="my-5 text-neutral-200 md:w-[80%] md:text-2xl">
            {joinAIData.description}
          </p>
          <ButtonSecondary
            className="bg-black text-white"
            sizeClass="px-5 py-4"
          >
            TRY IT FOR FREE
          </ButtonSecondary>
        </div>
        <div className="lg:-mt-20 lg:basis-[40%]">
          <Image
            src={app}
            alt="demoApp"
            className="mx-auto md:w-[60%] lg:w-[85%]"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionJoinAI;
