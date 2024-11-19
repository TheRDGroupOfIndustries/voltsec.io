"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../site/Logo";

type HeaderProps = {
  onToggleSidebar: () => void;
};
const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 backdrop-blur-sm dark:bg-gray-800 px-4 py-2.5  ">
      <div className="z-50 flex flex-wrap items-center justify-between ">
        <div className="flex items-center justify-start">
          <button
            onClick={onToggleSidebar}
            aria-controls="drawer-navigation"
            className="mr-2 cursor-pointer rounded-lg p-2 hover:bg-blue-200 focus:text-gray-700   md:hidden"
          >
            <svg
              aria-hidden="true"
              className="h-6 w-6 dark:text-white hover:text-gray-800"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              aria-hidden="true"
              className="hidden h-6 w-6 bg-pink"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Toggle sidebar</span>
          </button>
          <Logo color={"text-black"} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
