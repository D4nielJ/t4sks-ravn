import React from 'react';
import Navbar from '../navbar/Navbar';
import SimpleBar from 'simplebar-react';

const Main = ({ children }) => {
  return (
    <div className="flex h-screen max-w-full items-stretch gap-x-8 overflow-hidden bg-neutral-darker p-8 text-textOn">
      <Navbar />
      <main className="w-full">{children}</main>
    </div>
  );
};

export default Main;
