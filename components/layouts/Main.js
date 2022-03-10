import React from 'react';
import Navbar from '../navbar/Navbar';

const Main = ({ children }) => {
  return (
    <div className="flex min-h-screen gap-x-8 bg-neutral-darker p-8 text-textOn">
      <Navbar />
      <main className="w-full">{children}</main>
    </div>
  );
};

export default Main;
