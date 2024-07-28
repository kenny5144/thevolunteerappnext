"use client";
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-900">Volunteer App</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-gray-700 hover:text-blue-500">Home</Link>
            </li>
            <li>
              <Link href="/profiles" className="text-gray-700 hover:text-blue-500">Profiles</Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-700 hover:text-blue-500">Services</Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-700 hover:text-blue-500">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
