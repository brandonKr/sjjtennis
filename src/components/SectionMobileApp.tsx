import Image from 'next/image';
import React from 'react';

import { mobileAppSection } from '@/data/content';
import demoApp from '@/images/drivers.png';
import Heading from '@/shared/Heading/Heading';

import BackgroundCircles from './BackgroundCircles';
import FeatureCard from './FeatureCard';

const SectionMobileApp = () => {
  return (
    <div className="container relative mb-20 space-y-7 overflow-hidden lg:mb-0">
      <BackgroundCircles />
      <Heading isCenter isMain desc={mobileAppSection.title} className="">
        {mobileAppSection.heading}
      </Heading>
      <p className="mx-auto text-center text-xl text-neutral-500 md:w-[70%] lg:w-[50%]">
        {mobileAppSection.description}
      </p>
      <div className="z-10 grid gap-5 pt-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="grid gap-5 lg:gap-0">
          {mobileAppSection.features.slice(0, 2).map((feature) => (
            <div key={feature.title}>
              <FeatureCard className="text-2xl" {...feature} />
            </div>
          ))}
        </div>
        <div className="hidden items-end justify-center lg:flex">
          <Image src={demoApp} alt="mobile app" className="w-full" />
        </div>
        <div className="grid gap-5 lg:gap-0">
          {mobileAppSection.features.slice(2, 4).map((feature) => (
            <div key={feature.title}>
              <FeatureCard
                {...feature}
                className="text-2xl"
                key={feature.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionMobileApp;
