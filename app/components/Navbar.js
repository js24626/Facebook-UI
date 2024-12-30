import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex  items-center justify-between bg-blue-600 py-4 px-6 shadow-lg">
      {/* Logo */}
      <div className="text-2xl font-bold text-white tracking-wide">
        facebook
      </div>

      {/* Navbar Links */}
      <ul className="flex gap-8 text-lg text-white font-medium">
        <Link href="/">
          <li className="hover:text-blue-200 cursor-pointer transition duration-300 ease-in-out">Home</li>
        </Link>
        <Link href="/about">
          <li className="hover:text-blue-200 cursor-pointer transition duration-300 ease-in-out">About</li>
        </Link>
        <Link href="/contact">
          <li className="hover:text-blue-200 cursor-pointer transition duration-300 ease-in-out">Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
