import React from 'react';
import Link from './Link';

const Header = () => {
  return (
    <div className="w-ful mt-10">
      <div className="p-2 bg-neutral-700 mx-10 rounded-sm text-gray-200 flex flex-row space-x-10 items-center justify-center">
        <Link href="/">Accordion</Link>
        <Link href="/list">Search</Link>
        <Link href="/dropdown">Dropdown</Link>
      </div>
    </div>
  );
};

export default Header;
