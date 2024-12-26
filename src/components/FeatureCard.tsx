import type { FC } from 'react';
import React from 'react';

import ButtonCircle3 from '@/shared/Button/ButtonCirclel3';

type FeatureCardProps = {
  title: string;
  icon: React.JSX.Element;
  iconColor: string;
  className?: string;
  desc?: string;
};

const FeatureCard: FC<FeatureCardProps> = ({
  title,
  desc,
  icon,
  iconColor,
  className = 'text-base lg:w-[80%]',
}) => {
  return (
    <div className="space-y-3 rounded-2xl border border-neutral-300 px-5 py-10">
      <ButtonCircle3 size="w-12 h-12" className={`text-white ${iconColor}`}>
        {icon}
      </ButtonCircle3>
      <h4 className={`font-medium ${className}`}>{title}</h4>
      <p className="text-neutral-500">{desc}</p>
    </div>
  );
};

export default FeatureCard;
