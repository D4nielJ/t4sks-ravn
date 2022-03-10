import React from 'react';
import NextLink from 'next/link';

const Link = ({ icon, text, to }) => {
  return (
    <NextLink href={to}>
      <a>{text}</a>
    </NextLink>
  );
};

export default Link;
