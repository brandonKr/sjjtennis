import React from 'react';
import { MdCopyright } from 'react-icons/md';

import SectionJoinAI from '@/components/SectionJoinAI';

import SectionSubscribe from './SectionSubscribe';

const Footer: React.FC = () => {
  return (
    <div className="rounded-t-2xl bg-black px-10 pt-10">
      <SectionJoinAI />
      <SectionSubscribe />
      <div className="mt-10 flex items-center justify-center border-t border-neutral-500 py-5 text-neutral-500">
        <MdCopyright /> <span>Copyright2023. All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
