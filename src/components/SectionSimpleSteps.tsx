import React from 'react';

import { simpleStepsData } from '@/data/content';
import ButtonCircle3 from '@/shared/Button/ButtonCirclel3';
import Heading from '@/shared/Heading/Heading';

const SectionSimpleSteps = () => {
  return (
    <div className="container space-y-10 rounded-3xl bg-black pb-5 pt-20 lg:pb-10">
      <Heading
        isCenter
        isMain
        desc={simpleStepsData.title}
        className="text-white"
      >
        {simpleStepsData.heading}
      </Heading>
      <p className="mx-auto text-center text-xl text-neutral-500 md:w-[70%] lg:w-[50%]">
        {simpleStepsData.description}
      </p>
      <div className="grid gap-10 rounded-2xl bg-white/10 p-5 text-white md:grid-cols-2 lg:grid-cols-3">
        {simpleStepsData.steps.map((step, index) => (
          <div
            key={step.title}
            className={`${
              index === 0 ? 'bg-button-primary' : ''
            } space-y-5 rounded-2xl px-5 py-10`}
          >
            <ButtonCircle3
              size="w-12 h-12"
              className={`${
                index === 0
                  ? 'bg-white text-button-primary'
                  : 'bg-button-primary text-white'
              } text-2xl font-semibold`}
            >
              {index + 1}
            </ButtonCircle3>
            <h3 className="text-xl font-medium">{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionSimpleSteps;
