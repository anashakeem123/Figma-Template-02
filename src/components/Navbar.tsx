"use client";

import Link from "next/link";
import React, { useState } from "react";

const HeaderComponent = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div>
      <header className="border-b-2">
        {/* Top Bar */}
        <div className="flex items-center border-b-2 justify-between h-18 px-8">
          <Link href="/">
            <h1 className="text-lg font-Clash Display hover:text-red-600">Avion</h1>
          </Link>
          <div className="flex items-center space-x-4">
            <img src="/assets/cart.png" alt="Cart Icon" className="w-6 h-6" />
            <img src="/assets/account.png" alt="Account Icon" className="w-6 h-6" />
            <img src="/assets/search.png" alt="Search Icon" className="w-6 h-6" />
            {/* Menu icon for mobile */}
            <button
              onClick={() => setMenuActive(!menuActive)}
              className="md:hidden focus:outline-none"
            >
              <img
                src="/assets/menu.png"
                alt="Menu Icon"
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav
          className={`${
            menuActive ? "block" : "hidden"
          } md:block border-t md:border-0 mt-4 md:mt-0`}
        >
          <div className="flex justify-center">
            <ul className="list-none flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 text-gray-500 mt-3 mb-3 hover:text-black">
              <Link href="/">
                <li className="hover:text-blue-500">Plant Pots</li>
              </Link>
              <Link href="/">
                <li className="hover:text-blue-500">Ceramics</li>
              </Link>
              <Link href="/">
                <li className="hover:text-blue-500">Tables</li>
              </Link>
              <Link href="/">
                <li className="hover:text-blue-500">Chairs</li>
              </Link>
              <Link href="/">
                <li className="hover:text-blue-500">Crockery</li>
              </Link>
              <Link href="/">
                <li className="hover:text-blue-500">Tableware</li>
              </Link>
              <Link href="/">
                <li className="hover:text-blue-500">Cutlery</li>
              </Link>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
