'use client'

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="w-full bg-gray-900 text-white py-4 px-6 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">Safari & Ride</h1>
      <nav className="flex items-center space-x-6">
        <ul className="flex space-x-6">
          <li><Link href="/request-ride" className="hover:underline">Request Ride</Link></li>
          <li><Link href="/safaris" className="hover:underline">Book Safari</Link></li>
          <li><Link href="/admin" className="hover:underline">Admin Panel</Link></li>
        </ul>
        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center space-x-2 focus:outline-none"
          >
            <span className="font-semibold">Harman Muasa</span>
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-900 rounded-md shadow-lg py-2 z-10">
              <Link href="/profile" className="block px-4 py-2 hover:bg-gray-200">View Profile</Link>
              <Link href="/settings" className="block px-4 py-2 hover:bg-gray-200">Settings</Link>
              <Link href="/logout" className="block px-4 py-2 hover:bg-gray-200">Logout</Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
