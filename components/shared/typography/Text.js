import React from 'react';

const Text = ({ as, className, children }) => {
  const Tag = as || 'p';

  return (
    <Tag className={`font-sans text-[14px] leading-[20px] ${className}`}>
      {children}
    </Tag>
  );
};

export default Text;
