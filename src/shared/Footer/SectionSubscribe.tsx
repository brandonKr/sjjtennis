import React from 'react';

import NavigationItem from '@/components/NavItem';
import { footerData } from '@/data/content';

import ButtonPrimary from '../Button/ButtonPrimary';
import Input from '../Input/Input';
import Logo from '../Logo/Logo';

const SectionSubscribe = () => {
  return (
    <div className="container mt-20 text-white">
      <div className="grid gap-10 lg:grid-cols-4">
        <div className="col-span-1 space-y-5">
          <Logo />
          <p className="text-xl">{footerData.description}</p>
        </div>
        <div className="col-span-3 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {footerData.links.map((link) => (
            <div className="space-y-5" key={link.title}>
              <h4 className="font-semibold">{link.title}</h4>
              {link.links.map((item) => (
                <NavigationItem key={item.id} menuItem={item} />
              ))}
            </div>
          ))}
          <div className="space-y-5">
            <h4 className="font-semibold">NEWSLETTER</h4>
            <Input
              placeholder="Email address"
              type="text"
              className="h-12 bg-white"
            />
            <ButtonPrimary className="w-full" sizeClass="py-3">
              SUBSCRIBE NOW
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSubscribe;
