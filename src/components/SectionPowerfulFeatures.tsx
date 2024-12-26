import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

import { powerfulFeaturesData } from '@/data/content';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import Heading from '@/shared/Heading/Heading';

import FeatureCard from './FeatureCard';

const SectionPowerfulFeatures = () => {
  return (
    <div className="container items-center justify-between space-y-10 md:flex md:space-y-0">
      <div className="space-y-10 md:basis-[47%]">
        <Heading desc={powerfulFeaturesData.title} isMain className="">
          {powerfulFeaturesData.heading}
        </Heading>
        <p className="text-xl text-neutral-500 md:w-[90%]">
          {powerfulFeaturesData.description}
        </p>
        <ButtonPrimary
          className="flex items-center gap-2"
          sizeClass="px-5 py-3.5"
        >
          LEARN MORE <FiArrowUpRight />
        </ButtonPrimary>
      </div>
      <div className="grid grid-cols-2 gap-5 md:basis-[50%] lg:gap-10">
        {powerfulFeaturesData.features.map((feature) => (
          <FeatureCard {...feature} key={feature.title} />
        ))}
      </div>
    </div>
  );
};

export default SectionPowerfulFeatures;
