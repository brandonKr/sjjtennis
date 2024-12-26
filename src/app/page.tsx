import React from 'react';

import SectionDemo from '@/components/SectionDemo';
import SectionHeader from '@/components/SectionHeader';
import SectionLogos from '@/components/SectionLogos';
import SectionManageBlog from '@/components/SectionManageBlog';
import SectionMobileApp from '@/components/SectionMobileApp';
import SectionPowerfulFeatures from '@/components/SectionPowerfulFeatures';
import SectionSimpleSteps from '@/components/SectionSimpleSteps';

const page = () => {
  return (
    <div>
      <div className="bg-black py-20">
        <SectionHeader />
      </div>

      <div className="bg-button-primary">
        <SectionLogos />
      </div>

      <div className="py-24">
        <SectionManageBlog />
      </div>

      <div className="bg-custom-gray py-24">
        <SectionPowerfulFeatures />
      </div>

      <div className="py-24">
        <SectionDemo />
      </div>

      <div className="pb-24">
        <SectionSimpleSteps />
      </div>

      <div className="">
        <SectionMobileApp />
      </div>
    </div>
  );
};

export default page;
