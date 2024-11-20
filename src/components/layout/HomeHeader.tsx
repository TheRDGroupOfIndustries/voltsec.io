"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "../site/Logo";
import React from 'react';
import { Lock } from "lucide-react";

const HomeHeader = () => {
  const { data: session } = useSession();
  const style = {
    activeClasses:
      "text-gray-100 px-5 py-1 rounded-3xl hover:text-white border font-semibold text-base",
    inactiveClasses:
      "text-base py-1 px-5 font-semibold text-gray-100 h-6 hover:text-white focus:text-white",
    classes: "text-base transition-colors hover:text-blue-600",
  };
  const routerLink = usePathname();
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const signOutFnc = () => signOut();

  return (
    <div lang="en" className="fixed z-50 w-screen px-5 backdrop-blur-sm">
      {/* //Desktop Nav Bar */}
      <>
        <div className="flex h-16 items-center justify-between">
          <div className="">
            <div className="flex h-16 items-center justify-start ">
              <Logo />
            </div>
          </div>
          <div className="-my-2 lg:hidden">
            <button
              type="button"
              aria-label="menu"
              name="Menu"
              className="inline-flex items-center justify-center rounded-xl p-2 text-gray-200 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:text-white"
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Open menu</span>

              <svg
                className="h-9 w-9"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden h-8 space-x-1 lg:flex">
            <div className="relative flex flex-row text-white hover:text-blue-600">
              <Link href="/home/pentest">
                <button
                  name="Services"
                  className={`${style.classes} ${
                    routerLink === "/home/pentest"
                      ? style.activeClasses
                      : style.inactiveClasses
                  } focus:${style.activeClasses.split(" ").join(" focus:")}`}
                >
                  Pentest Types
                </button>
              </Link>

           <button
                name="menu"
                id="dropdownNavbarLink"
                aria-label="menu"
                data-dropdown-toggle="dropdownNavbar"
                className="rounded-2 flex w-full items-center justify-between  font-medium text-gray-100 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-200 dark:focus:text-white md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-100 "
                onClick={() => setDropdown(!dropdown)}
              >
                {!dropdown ? (
                  <svg
                    className="m-1 h-8 w-8"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="m-1 h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
              <div
                id="dropdownNavbar"
                className={
                  dropdown
                    ? "top-100 absolute -left-10 m-10 block origin-top scale-100 transform p-2 opacity-100 transition duration-200 ease-out "
                    : "absolute top-0 hidden origin-top scale-95 transform p-2 opacity-0 transition "
                }
              >
                <ul
                  onClick={() => setDropdown(!dropdown)}
                  className="w-44 rounded-xl bg-white p-1  text-sm"
                  aria-labelledby="dropdownLargeButton"
                >
                  <Link href="/home/blog/web-pentest">
                    <li className="block rounded-xl px-4 py-2 text-black hover:text-blue-500">
                      Web Pentest
                    </li>
                  </Link>
                  <Link href="/home/blog/network-pentest">
                    <li className="block rounded-xl px-4 py-2 text-black hover:text-blue-500">
                      Network Pentest
                    </li>
                  </Link>
                  <Link href="/home/blog/mobile-app-pentest">
                    <li className="block rounded-xl px-4 py-2 text-black hover:text-blue-500">
                      Mobile Pentest
                    </li>
                  </Link>
                  <Link href="/home/blog/cloud-pentest">
                    <li className="block rounded-xl px-4 py-2 text-black hover:text-blue-500">
                      Cloud Pentest
                    </li>
                  </Link>
                  {/* <Link href="/home/blog/mobile-app-pentest">
                  <li className="rounded-xl relative px-4 py-2 text-gray-600 flex justify-start items-center gap-2 hover:cursor-pointer hover:invisible group">
                      Mobile Pentest <Lock size={16} />
                      <p className="absolute invisible group-hover:visible flex items-center gap-2">Premium only! <Lock size={16} /></p>
                    </li>
                  </Link>
                  {" "}
                  <Link href="/home/blog/cloud-pentest">
                    <li className="rounded-xl relative px-4 py-2 text-gray-600 flex justify-start items-center gap-2 hover:cursor-pointer hover:invisible group">
                      Cloud Pentest <Lock size={16} />
                      <p className="absolute invisible group-hover:visible flex items-center gap-2">Premium only! <Lock size={16} /></p>
                    </li>
                  </Link> */}
                </ul>
              </div>
            </div>
            <Link href="/home/blog">
              <button
                name="Blog"
                className={`${style.classes} ${
                  routerLink === "/blog"
                    ? style.activeClasses
                    : style.inactiveClasses
                } focus:${style.activeClasses.split(" ").join(" focus:")}`}
              >
                Blogs
              </button>
            </Link>
            <Link href="/home/pricing">
              <button
                name="pricing"
                className={`${style.classes} ${
                  routerLink === "/home/pricing"
                    ? style.activeClasses
                    : style.inactiveClasses
                } focus:${style.activeClasses.split(" ").join(" focus:")}`}
              >
                Pricing
              </button>
            </Link>
            <Link href="/account">
              <button
                name="Account"
                className={`${style.classes} ${
                  routerLink === "/account"
                    ? style.activeClasses
                    : style.inactiveClasses
                } focus:${style.activeClasses.split(" ").join(" focus:")}`}
              >
                Account
              </button>
            </Link>
            <Link href="/home/contact">
              <button
                name="Contact"
                className={`${style.classes} ${
                  routerLink === "/home/contact"
                    ? style.activeClasses
                    : style.inactiveClasses
                } focus:${style.activeClasses.split(" ").join(" focus:")}`}
              >
                Speak To Sales
              </button>
            </Link>
          </nav>
          <div className="hidden items-center pr-5 lg:flex ">
            {session?.user != null ? (
              <>
                <Link href="/account">
                  <div className="mt-1 h-9 w-9 rounded-full border-2 border-opacity-30 hover:scale-110 hover:bg-blue-600 hover:text-blue-600">
                    {session?.user?.image == null ? (
                      <svg
                        className="float-left h-8 w-8 rounded-full text-white  hover:shadow-md"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    ) : (
                      <Image
                        width={40}
                        height={40}
                        alt="profile"
                        className="float-left h-full rounded-full hover:shadow-md"
                        src={
                          session?.user?.image ||
                          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ASample_User_Icon.png&psig=AOvVaw0JCOQQfdpgZnPdQwcbqmiB&ust=1720241423921000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLjJl-qMj4cDFQAAAAAdAAAAABAo"
                        }
                      />
                    )}
                  </div>
                </Link>
                <div className="mx-2 mb-2 h-8  text-gray-100">
                  <p className="text-sm">{session?.user?.name}</p>
                  <p className="text-[10px]">{session?.user?.email}</p>
                </div>
                <button
                  name="Signout"
                  className="inline-block h-8 p-1 text-sm text-white duration-100 hover:scale-105 "
                  onClick={() => {
                    signOutFnc();
                  }}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    ></path>
                  </svg>
                </button>
              </>
            ) : (
              <Link href="/auth">
                <button
                  name="Get Started"
                  className="bg-primary-500 hover:bg-primary-700 focus:ring-primary-300 dark:focus:ring-primary-900 inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white ring-1"
                >
                  Get started
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </Link>
            )}
          </div>
        </div>
      </>
      <div
        className={
          open
            ? "absolute inset-x-0 top-0 block origin-top-right scale-100 transform p-2 opacity-100 transition duration-200 ease-out lg:hidden"
            : "absolute inset-x-0 top-0 hidden origin-top-right scale-95 transform p-2 opacity-0 transition lg:hidden"
        }
      >
        {/* // Mobile Bar */}
        <div className="bg-blue-800 items-center z-10 rounded-lg border-2 border-gray-700 shadow-lg dark:bg-gray-800 dark:text-white ">
          <div className="mx-7 mt-5 flex items-center justify-between">
            <div
              onClick={() => setOpen(!open)}
              className="flex items-center justify-start lg:w-0 lg:flex-1"
            >
              <Logo />
            </div>

            <div className="mr-2">
              <button
                name="close menu"
                className="inline-flex items-center justify-center rounded-xl bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="space-y-6 px-5 py-6 ">
            <ul className=" grid grid-cols-2 gap-x-8 gap-y-2 border-b-2 border-t-2 border-gray-600 pb-5 pt-5">
              <div className=" col-span-2 grid grid-cols-2 gap-x-8 gap-y-5 border-b-2 border-gray-600 pb-5 pl-2">
                <Link href="/home/pentest">
                  <button
                    name="Services"
                    onClick={() => setOpen(!open)}
                    className={`${style.classes} ${
                      routerLink === "/home/pentest"
                        ? style.activeClasses
                        : style.inactiveClasses
                    } focus:${style.activeClasses.split(" ").join(" focus:")}`}
                  >
                    Services
                  </button>
                </Link>

                <Link href="/home/pricing">
                  <button
                    name="pricing"
                    onClick={() => setOpen(!open)}
                    className={`${style.classes} ${
                      routerLink === "/home/pricing"
                        ? style.activeClasses
                        : style.inactiveClasses
                    } focus:${style.activeClasses.split(" ").join(" focus:")}`}
                  >
                    Pricing
                  </button>
                </Link>
                <Link href="/account">
                  <button
                    name="Account"
                    onClick={() => setOpen(!open)}
                    className={`${style.classes} ${
                      routerLink === "/account"
                        ? style.activeClasses
                        : style.inactiveClasses
                    } focus:${style.activeClasses.split(" ").join(" focus:")}`}
                  >
                    Account
                  </button>
                </Link>
                <Link href="/home/contact">
                  <button
                    name="Contact"
                    onClick={() => setOpen(!open)}
                    className={`${style.classes} ${
                      routerLink === "/home/contact"
                        ? style.activeClasses
                        : style.inactiveClasses
                    } focus:${style.activeClasses.split(" ").join(" focus:")}`}
                  >
                    Contact us
                  </button>
                </Link>
              </div>
              <Link href="/home/pentest/web">
                <li
                  onClick={() => setOpen(!open)}
                  className="m-2 block rounded-xl text-gray-100 hover:text-blue-500"
                >
                  Web Pentest
                </li>
              </Link>
              <Link href="/home/pentest/cloud">
                <li
                  onClick={() => setOpen(!open)}
                  className="m-2 block rounded-xl text-gray-100 hover:text-blue-500"
                >
                  Cloud Pentest
                </li>
              </Link>{" "}
              <Link href="/home/pentest/network">
                <li
                  onClick={() => setOpen(!open)}
                  className="m-2 block rounded-xl text-gray-100 hover:text-blue-500"
                >
                  Network Pentest
                </li>
              </Link>
              <Link href="/home/pentest/mobile">
                <li
                  onClick={() => setOpen(!open)}
                  className="m-2 block rounded-xl text-gray-100 hover:text-blue-500"
                >
                  Mobile Pentest
                </li>
              </Link>
            </ul>
          </div>
          <div className="mx-7 mb-5 flex flex-row items-center justify-start">
            {session?.user != null ? (
              <>
                <Link href="/account">
                  <div
                    onClick={() => setOpen(!open)}
                    className="mt-1 h-9 rounded-full"
                  >
                    {session?.user?.image === undefined ? (
                      <svg
                        className="float-left h-8 w-8 rounded-full hover:shadow-md dark:text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    ) : (
                      <Image
                        width={40}
                        height={40}
                        alt="profile"
                        className="float-left h-full rounded-full hover:shadow-md"
                        src={
                          session?.user?.image ||
                          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ASample_User_Icon.png&psig=AOvVaw0JCOQQfdpgZnPdQwcbqmiB&ust=1720241423921000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLjJl-qMj4cDFQAAAAAdAAAAABAo"
                        }
                      />
                    )}
                  </div>
                </Link>
                <div className="mb-2 ml-2 h-8 text-white">
                  <p className="text-sm">{session?.user?.name}</p>
                  <p className="text-xs">{session?.user?.email}</p>
                </div>
                <button
                  name="Logout"
                  className="mx-20 text-black bg-blue-100 inline-block h-10 w-70 rounded-full border-6 border-black p-1 px-2 text-sm duration-100 hover:scale-105"
                  onClick={() => {
                    signOutFnc();
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <Link href="/auth">
                <button
                  name="Get started"
                  onClick={() => setOpen(!open)}
                  className="bg-primary-500 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white ring-1"
                >
                  Get started
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
