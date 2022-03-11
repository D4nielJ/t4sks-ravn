import React from 'react';
import {
  MdOutlineDashboard,
  MdOutlineMenu,
  MdCalendarToday,
  MdOutlineAvTimer,
  MdOutlinePieChart,
  MdOutlineSettings,
} from 'react-icons/md';
import { FiBriefcase } from 'react-icons/fi';
import { Logo } from '../shared';
import Link from './Link';

const Links = [
  {
    icon: <MdOutlineDashboard />,
    text: 'Dashboard',
    to: '/',
  },
  {
    icon: <FiBriefcase />,
    text: 'Projects',
    to: '/projects',
  },
  {
    icon: <MdOutlineMenu />,
    text: 'My task',
    to: '/mytask',
  },
  {
    icon: <MdCalendarToday />,
    text: 'Calendar',
    to: '/calendar',
  },
  {
    icon: <MdOutlineAvTimer />,
    text: 'Time manage',
    to: '/time',
  },
  {
    icon: <MdOutlinePieChart />,
    text: 'Reports',
    to: '/reports',
  },
  {
    icon: <MdOutlineSettings />,
    text: 'Settings',
    to: '/settings',
  },
];

const Navbar = ({ className }) => {
  return (
    <aside
      className={`flex flex-col items-center rounded-2xl bg-neutral-dark pt-6 ${className}`}>
      <Logo />
      <nav>
        <ul className="flex flex-col pt-8">
          {Links.map(({ icon, text, to }) => (
            <li key={text}>
              <Link text={text} to={to} icon={icon} />
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Navbar;
