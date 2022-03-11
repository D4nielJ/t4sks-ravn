import React from 'react';
import Navbar from '../navbar/Navbar';

const Main = ({ children }) => {
  return (
    <div className="flex min-h-screen max-w-full gap-x-8 overflow-clip bg-neutral-darker p-8 text-textOn">
      <Navbar />
      <main className="overflow-hidden">{children}</main>
    </div>
  );
};

export default Main;
