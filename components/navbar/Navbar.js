import React from 'react';
import { Logo } from '../shared';
import Link from './Link';

const Links = [
  {
    icon: <></>,
    text: 'DASHBOARD',
    to: '/',
  },
  {
    icon: <></>,
    text: 'PROJECTS',
    to: '/projects',
  },
  {
    icon: <></>,
    text: 'MY TASK',
    to: '/mytask',
  },
];

const Navbar = () => {
  return (
    <div className="flex min-w-[12rem] flex-col items-center rounded-2xl bg-neutral-dark pt-6">
      <Logo />
      <nav>
        <ul>
          {Links.map(({ icon, text, to }) => (
            <li key={text}>
              <Link to={to} text={text} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
