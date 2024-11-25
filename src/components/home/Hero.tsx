"use client";
import Image from "next/image";
import Link from "next/link";

import icon1 from "../../../public/icons/1.png";
import icon3 from "../../../public/icons/2.png";
import icon4 from "../../../public/icons/4.png";
import icon2 from "../../../public/icons/5.png";
import { useSession } from "next-auth/react";

const Hero = () => {
  const { data: session } = useSession();

  return (
    <section className="relative flex min-h-screen flex-row flex-wrap items-center justify-center overflow-hidden bg-gradient-to-tr from-blue-700 via-blue-500 to-blue-700 p-5 md:p-0">
      <Image
        // data-aos="fade-down-left"
        // data-aos-duration="1000"
        alt="icons"
        src={icon1}
        height={450}
        width={450}
        className="absolute right-0 top-16 xs:top-14 sm:top-12 shadow-black/40 drop-shadow-2xl md:right-0 md:top-10 h-28 w-28 xs:h-32 xs:w-32 sm:h-36 sm:w-36 md:h-44 md:w-44 xl:h-80 xl:w-80"
      />
      <Image
        // data-aos="fade-up-left"
        // data-aos-duration="1000"
        alt="icons"
        src={icon2}
        height={450}
        width={450}
        className="absolute xl:bottom-10 md:botton-12 lg:bottom-14 bottom-16 right-0 shadow-black/40 drop-shadow-2xl md:bottom-10 md:right-0 h-28 w-28 xs:h-32 xs:w-32 sm:h-36 sm:w-36 md:h-44 md:w-44 xl:h-80 xl:w-80"
      />
      <Image
        // data-aos="fade-down-right"
        // data-aos-duration="1000"
        alt="icons"
        src={icon3}
        height={450}
        width={450}
        className="absolute left-0 top-16 xs:top-14 sm:top-12 shadow-black/40 drop-shadow-2xl h-28 w-28 xs:h-32 xs:w-32 sm:h-36 sm:w-36 md:h-44 md:w-44 xl:h-80 xl:w-80"
      />
      <Image
        // data-aos="fade-up-right"
        // data-aos-duration="1000"
        alt="icons"
        src={icon4}
        height={450}
        width={450}
        className="absolute xl:bottom-10 md:botton-12 lg:bottom-14 bottom-16 left-0 shadow-black/40 drop-shadow-2xl md:bottom-0 md:left-0 h-28 w-28 xs:h-32 xs:w-32 sm:h-36 sm:w-36 md:h-44 md:w-44 xl:h-80 xl:w-80"
      />
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="mx-auto flex h-full w-full flex-row flex-wrap items-center justify-between rounded-3xl bg-white/10 p-0 shadow-2xl shadow-black/20 md:max-w-3xl md:p-10"
      >
        <div className="rounded-3xl sm:text-left lg:text-left ">
          <div className="p-5">
            <div className="text-left font-medium text-gray-900 ">
              <h2 className="block text-nowrap text-white shadow-black/40 drop-shadow-2xl text-4xl sm:text-5xl md:text-6xl lg:text-6xl">
                Welcome to
              </h2>
              {/* <br /> */}
              <h1 className="block text-white shadow-black/40 drop-shadow-2xl text-4xl sm:text-5xl md:text-6xl lg:text-6xl">
                VoltSec.io
              </h1>
            </div>
          </div>
          <div className="px-5">
            <h2 className="text-left text-xl sm:text-2xl font-light tracking-tight text-gray-900 md:text-3xl">
              <span className="block text-gray-100 xl:inline">
                Where Certified Ethical Hackers and AI Unite for Superior
                Cybersecurity
              </span>
            </h2>
          </div>
          <div className="my-5 flex h-full w-full max-w-xl flex-col items-center justify-center p-0 md:flex-row md:justify-start md:px-3 md:pt-10">
            {!session ? (
              <Link href="/auth">
                <div className="m-2 inline-flex w-64 xs:w-80 items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-center text-base font-medium text-white shadow-2xl shadow-black/40 hover:bg-blue-700 focus:ring-4 focus:ring-primary-300 focus:ring-primary-900 md:w-auto">
                  Sign-In Now
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
                </div>
              </Link>
            ) : (
              <Link href="/pentest">
                <div className="m-2 inline-flex w-64 xs:w-80 items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white shadow-2xl shadow-black/40 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-primary-300 focus:ring-primary-900 md:w-auto">
                  Get Started
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
                </div>
              </Link>
            )}

            <Link href="/contact">
              <div className="m-2 inline-flex w-64 xs:w-80 items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-center text-base font-medium text-white shadow-2xl shadow-black/40 hover:bg-blue-700 focus:ring-4 focus:ring-primary-300 focus:ring-primary-900 md:w-auto">
                <svg
                  className="mr-1 h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  ></path>
                </svg>
                Schedule Demo
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
