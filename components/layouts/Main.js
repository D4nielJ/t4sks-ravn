import React from 'react';
import Navbar from '../navbar/Navbar';

const Main = ({ children }) => {
  return (
    <div className="flex min-h-screen gap-x-8 bg-neutral-darker p-8 text-textOn">
      <Navbar />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Main;
