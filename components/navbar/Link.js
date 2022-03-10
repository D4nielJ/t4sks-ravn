import React, { useEffect, useState } from 'react';
import NextLink from 'next/link';
import { Heading } from '../shared';
import { useRouter } from 'next/router';

const Link = ({ icon, text, to }) => {
  const { pathname } = useRouter();
  const [activeClasses, setActiveClasses] = useState('border-r-transparent');

  useEffect(() => {
    if (pathname === to) {
      setActiveClasses(
        'text-border-critical-default/80 border-r-border-critical-default bg-gradient-to-r from-neutral-dark to-border-critical-default/10',
      );
    } else {
      setActiveClasses('border-r-transparent');
    }
  }, [pathname, to]);

  return (
    <NextLink href={to}>
      <a
        className={`flex items-center gap-x-4 border-r-4 ${activeClasses} bg-opacity-50 py-5 pr-[72px] pl-6 text-neutral-light`}>
        <span className="text-2xl">{icon}</span>
        <Heading type="Heading" as="span">
          <span className="min-w-max uppercase line-clamp-1">{text}</span>
        </Heading>
      </a>
    </NextLink>
  );
};

export default Link;
