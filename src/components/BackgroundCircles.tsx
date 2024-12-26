import React from 'react';

const BackgroundCircles = () => {
  return (
    <div className="absolute -bottom-[35%] left-0 -z-10 hidden w-full items-center justify-center lg:flex">
      <div className="flex h-[700px] w-[700px] items-center justify-center rounded-full bg-button-primary/10">
        <div className="flex h-[500px] w-[500px] items-center justify-center rounded-full bg-button-primary/20">
          <div className="h-[300px] w-[300px] rounded-full bg-button-primary/20" />
        </div>
      </div>
    </div>
  );
};

export default BackgroundCircles;
