import React from 'react';
import Heading from './typography/Heading';

const Tag = ({ text, className }) => {
  return (
    <li className={`rounded bg-icon-success/10 px-4 py-2 ${className}`}>
      <Heading
        type="Subheading"
        className="font-bold uppercase text-text-success/80">
        {text}
      </Heading>
    </li>
  );
};

export default Tag;
