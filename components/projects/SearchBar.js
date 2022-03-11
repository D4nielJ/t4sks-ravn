import Image from 'next/image';
import React from 'react';
import { MdOutlineSearch, MdOutlineNotifications } from 'react-icons/md';
import { Text } from '../shared';

const SearchBar = () => {
  return (
    <header className="flex justify-between rounded-2xl bg-neutral-dark px-6 py-4">
      <div className="flex items-center gap-2">
        <span className="text-xl text-neutral-light">
          <MdOutlineSearch />
        </span>
        <Text className="text-neutral-light">Search</Text>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-2xl">
          <MdOutlineNotifications />
        </span>
        <span className="relative h-[40px] w-[40px] text-xl text-neutral-light">
          <Image
            src="/images/profile-pic.jpg"
            layout="fill"
            alt=""
            className="rounded-full"
          />
        </span>
      </div>
    </header>
  );
};

export default SearchBar;
