import React from 'react';
import NextLink from 'next/link';
import { Heading } from '../shared';

const Link = ({ icon, text, to }) => {
  return (
    <NextLink href={to}>
      <a className="flex items-center gap-x-3 border-r py-2 pr-8">
        <span>{icon}</span>
        <Heading type="DisplayMedium">{text}</Heading>
      </a>
    </NextLink>
  );
};

export default Link;
