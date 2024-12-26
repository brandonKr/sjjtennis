import Link from 'next/link';
import React from 'react';
import { MdClose } from 'react-icons/md';

import { NavLinks } from '@/data/content';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import ButtonSecondary from '@/shared/Button/ButtonSecondary';
import Input from '@/shared/Input/Input';
import Logo from '@/shared/Logo/Logo';

export interface NavMobileProps {
  onClickClose?: () => void;
}

const NavMobile: React.FC<NavMobileProps> = ({ onClickClose }) => {
  const renderMagnifyingGlassIcon = () => {
    return (
      <svg
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 22L20 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  const renderSearchForm = () => {
    return (
      <form action="" method="POST" className="flex-1">
        <div className="flex h-full items-center space-x-1 rounded-full border border-x-neutral-300 px-4 py-2">
          {renderMagnifyingGlassIcon()}
          <Input placeholder="Search here" type="text" />
        </div>
        <input type="submit" hidden value="" />
      </form>
    );
  };

  return (
    <div className="h-screen w-full divide-y divide-neutral-300 overflow-y-auto bg-white py-2 shadow-lg ring-1 transition">
      <div className="px-5 py-2">
        <Logo className="text-black" />
        {/* eslint-disable */}
        <span className="absolute right-2 top-2 p-1" onClick={onClickClose}>
          {/* eslint-disable */}
          <MdClose />
        </span>
        <div className="mt-5">{renderSearchForm()}</div>
      </div>
      <ul className="flex flex-col space-y-5 px-5 py-6">
        {NavLinks.map((item) => (
          <Link href={item.href} key={item.id} className="capitalize">
            {item.name}
          </Link>
        ))}
        <Link href="/faq" className="capitalize">
          FAQs
        </Link>
      </ul>
      <div className="px-5 pt-5 flex items-center gap-5">
      <ButtonSecondary
          className="rounded-full border border-black text-black"
          sizeClass="px-7 py-3.5"
        >
          LOGIN
        </ButtonSecondary>
        <ButtonPrimary sizeClass="px-5 py-4">REGISTRATION</ButtonPrimary>
      </div>
    </div>
  );
};

export default NavMobile;
