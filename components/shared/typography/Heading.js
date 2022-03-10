import React from 'react';

const headingProps = [
  {
    type: 'DisplayXLarge',
    tag: 'h2',
    font: 'SFProDisplay',
    weight: 'semibold',
    size: '42px',
    lineHeight: '44px',
  },
  {
    type: 'DisplayLarge',
    tag: 'h2',
    font: 'SFProDisplay',
    weight: 'semibold',
    size: '28px',
    lineHeight: '32px',
  },
  {
    type: 'DisplayMedium',
    tag: 'h3',
    font: 'SFProDisplay',
    weight: 'regular',
    size: '26px',
    lineHeight: '32px',
  },
  {
    type: 'DisplaySmall',
    tag: 'h4',
    font: 'SFProDisplay',
    weight: 'regular',
    size: '20px',
    lineHeight: '28px',
  },
  {
    type: 'Heading',
    tag: 'h5',
    font: 'SFProText',
    weight: 'semibold',
    size: '16px',
    lineHeight: '24px',
  },
  {
    type: 'Subheading',
    tag: 'h6',
    font: 'SFProText',
    weight: 'semibold',
    size: '12px',
    lineHeight: '16px',
  },
  {
    type: 'Button',
    tag: 'span',
    font: 'SFProText',
    weight: 'medium',
    size: '14px',
    lineHeight: '20px',
  },
  {
    type: 'Body',
    tag: 'p',
    font: 'SFProText',
    weight: 'regular',
    size: '14px',
    lineHeight: '20px',
  },
  {
    type: 'Caption',
    tag: 'span',
    font: 'SFProText',
    weight: 'regular',
    size: '12px',
    lineHeight: '16px',
  },
];

const Heading = ({ type, as, children }) => {
  const element = headingProps.find((e) => e.type === type);
  const Tag = element.tag;

  return <Tag className={clx()}>{children}</Tag>;
};

export default Heading;
