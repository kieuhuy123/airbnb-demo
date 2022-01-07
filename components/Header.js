import React from "react";
import Image from "next/image";
import logo from "../public/image/Airbnb_logo.png";

import {
  SearchIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
  GlobeAltIcon,
} from "@heroicons/react/solid";
const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src={logo}
          layout="fill"
          alt="logo"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Middle - Search */}
      <div className="flex items-center border-2 rounded-full py-2 md:shadow-sm">
        <input
          className="flex-grow pl-5  bg-transparent outline-none text-sm text-gray-600 placeholer-gray-400"
          type="text"
          placeholder="Start your Search"
        />
        <SearchIcon className="hidden md:block h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      {/* Right */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer"></GlobeAltIcon>

        <div className="flex items-center border-2 p-2 rounded-full">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;