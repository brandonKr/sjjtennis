import type { HTMLAttributes, ReactNode } from 'react';
import React from 'react';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  fontClass?: string;
  desc?: ReactNode;
  hasNextPrev?: boolean;
  isCenter?: boolean;
  isMain?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
  children,
  desc = '',
  className = 'mb-10 md:mb-12',
  isCenter = false,
  isMain,
  ...args
}) => {
  return (
    <div
      className={`nc-Section-Heading relative flex flex-col justify-between sm:flex-row sm:items-end ${className}`}
    >
      <div
        className={
          isCenter ? 'mx-auto mb-2 w-full max-w-2xl text-center' : 'max-w-2xl'
        }
      >
        {desc && (
          <span className="mb-3 block font-semibold text-button-primary">
            {desc}
          </span>
        )}
        <h2
          style={{ lineHeight: '1.2em' }}
          className={`${
            isMain ? 'lineHeight text-3xl lg:text-[55px]' : 'text-3xl'
          } font-medium`}
          {...args}
        >
          {children || `Section Heading`}
        </h2>
      </div>
    </div>
  );
};

export default Heading;
