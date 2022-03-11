import React from 'react';
import Navbar from '../navbar/Navbar';

const Main = ({ children }) => {
  return (
    <div className="flex h-screen max-w-full gap-x-8 overflow-hidden bg-neutral-darker p-8 text-textOn">
      <Navbar />
      <main className="w-full overflow-x-hidden">{children}</main>
    </div>
  );
};

export default Main;
