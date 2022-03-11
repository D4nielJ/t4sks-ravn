import React from 'react';
import clsx from 'clsx';

const headingProps = [
  {
    type: 'DisplayXLarge',
    tag: 'h2',
    font: 'font-display',
    weight: 'font-semibold',
    size: 'text-[42px]',
    lineHeight: 'leading-[44px]',
  },
  {
    type: 'DisplayLarge',
    tag: 'h2',
    font: 'font-display',
    weight: 'font-semibold',
    size: 'text-[28px]',
    lineHeight: 'leading-[32px]',
  },
  {
    type: 'DisplayMedium',
    tag: 'h3',
    font: 'font-display',
    weight: 'font-normal',
    size: 'text-[26px]',
    lineHeight: 'leading-[32px]',
  },
  {
    type: 'DisplaySmall',
    tag: 'h4',
    font: 'font-display',
    weight: 'font-normal',
    size: 'text-[20px]',
    lineHeight: 'leading-[28px]',
  },
  {
    type: 'Heading',
    tag: 'h5',
    font: 'font-sans',
    weight: 'font-semibold',
    size: 'text-[16px]',
    lineHeight: 'leading-[24px]',
  },
  {
    type: 'Subheading',
    tag: 'h6',
    font: 'font-sans',
    weight: 'font-semibold',
    size: 'text-[12px]',
    lineHeight: 'leading-[16px]',
  },
];

const Heading = ({ type = 'DisplayMedium', as, className, children }) => {
  const element = headingProps.find((e) => e.type === type);
  const Tag = as || element.tag;

  return (
    <Tag
      className={clsx([
        element.font,
        element.weight,
        element.size,
        element.lineHeight,
        className,
      ])}>
      {children}
    </Tag>
  );
};

export default Heading;
