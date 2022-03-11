import React from 'react';
import Navbar from '../navbar/Navbar';
import SimpleBar from 'simplebar-react';

const Main = ({ children }) => {
  return (
    <div className="flex h-screen max-w-full gap-x-8 overflow-hidden bg-neutral-darker p-8 text-textOn">
      <Navbar />
      <SimpleBar style={{ width: '100%' }}>
        <main className="w-full overflow-x-hidden">{children}</main>
      </SimpleBar>
    </div>
  );
};

export default Main;
