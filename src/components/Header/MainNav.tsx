import React from 'react';

import { NavLinks } from '@/data/content';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import ButtonSecondary from '@/shared/Button/ButtonSecondary';
import Logo from '@/shared/Logo/Logo';

import NavigationItem from '../NavItem';
import MenuBar from './MenuBar';

const MainNav = () => {
  return (
    <div className="container flex items-center justify-between text-neutral-100">
      <div className="flex items-center gap-5">
        <div className="">
          <Logo />
        </div>
        <div className="hidden items-center justify-center gap-10 border-l border-neutral-400 pl-3 lg:flex">
          {NavLinks.map((link) => (
            <NavigationItem key={link.id} menuItem={link} />
          ))}
        </div>
      </div>
      <div className="hidden flex-1 items-center justify-end gap-4 lg:flex">
        <ButtonSecondary
          className="rounded-full border border-white text-white"
          sizeClass="px-7 py-3.5"
        >
          LOGIN
        </ButtonSecondary>
        <ButtonPrimary sizeClass="px-5 py-4">REGISTRATION</ButtonPrimary>
      </div>
      <div className="lg:hidden">
        <MenuBar />
      </div>
    </div>
  );
};

export default MainNav;
