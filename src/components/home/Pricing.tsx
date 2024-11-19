import Link from "next/link";
import React from "react";

const Pricing = () => {
  return (
    <section className="flex flex-col items-center bg-gradient-to-tr from-blue-700 via-blue-500 to-blue-700 pt-10 w-[100vw]">
      <div className="py-8 lg:px-6 lg:py-16">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="mx-auto mb-8 max-w-md text-center items-center lg:mb-12"
        >
          <h2 className="m-4 text-5xl md:text-6xl font-extrabold tracking-tight text-white ">
            VoltSec Pricing Plans
          </h2>
          <p className="mb-5 font-light  text-white sm:text-xl">
            Choose the plan that best fits your cybersecurity needs. Whether
            you&apos;re just getting started or looking for exclusive features,
            VoltSec has you covered.
          </p>
        </div>
        
        <div className="space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10">
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="mx-auto flex w-full md:max-w-lg flex-col rounded-3xl border border-white/10 bg-white/10 p-6 text-center text-white shadow-2xl hover:bg-blue-600 hover:shadow-xl xl:p-8"
          >
            <h3 className="mb-4 text-2xl font-semibold">Free Plan</h3>
            <p className="font-light  text-white sm:text-lg">
              Free and Best option for personal use.
            </p>
            <div className="my-8 flex items-baseline justify-center">
              <span className="mr-2 text-4xl font-bold">$0</span>
              <span className=" text-slate-100">/month</span>
            </div>

            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 flex-shrink-0  text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>High-End Threat Identification</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 flex-shrink-0  text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>HTML & PDF Report&apos;s</span>
              </li>
              {/* <li className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 flex-shrink-0  text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Limited Access to VoltSec App Store</span>
              </li> */}
              <li className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 flex-shrink-0  text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Community Support</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 flex-shrink-0  text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Enhanced AI</span>
              </li>
            </ul>
            <Link href="/user-details">
              <button className="inline-flex w-full items-center justify-center rounded-3xl border border-slate-300 bg-blue-600 px-5 py-3 text-center text-base  font-medium text-white hover:bg-white/10 focus:ring-4 focus:ring-slate-100  ">
                Sign Up for Free
              </button>
            </Link>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="mx-auto flex w-full md:max-w-lg flex-col rounded-3xl border border-white/10 bg-white/10 p-6 text-center text-white shadow-2xl hover:bg-blue-600 hover:shadow-xl xl:p-8"
          >
            <h3 className="mb-4 text-2xl font-semibold">Premium</h3>
            <p className="font-light  text-white sm:text-lg">
              Relevant for multiple users, extended & premium support.
            </p>
            <div className="my-8 flex items-baseline justify-center">
              <span className="mr-2 text-4xl font-extrabold">Get a Quote</span>
            </div>

            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 flex-shrink-0  text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Proactive Threat Identification</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 flex-shrink-0  text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Basic Level Zero-Day Detection</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 flex-shrink-0  text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>HTML & PDF Report&apos;s</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 flex-shrink-0  text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Vulnerability Management Dashboard</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 flex-shrink-0  text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Full Access to VoltSec App Store</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 flex-shrink-0  text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>24/7 Helpdesk Support</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 flex-shrink-0  text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Enhanced AI</span>
              </li>
            </ul>
            <Link href="/home/contact">
              <button className="inline-flex w-full items-center justify-center rounded-3xl border border-slate-300 bg-blue-600 px-5 py-3 text-center text-base  font-medium text-white hover:bg-white/10 focus:ring-4 focus:ring-slate-100">
                Buy Now
              </button>
            </Link>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="mx-auto flex w-full md:max-w-lg  flex-col rounded-3xl border border-white/10 bg-white/10 p-6 text-center text-white shadow-2xl hover:bg-blue-600 hover:shadow-xl xl:p-8"
          >
            <h3 className="mb-4 text-2xl font-semibold">Exclusive</h3>
            <p className="font-light  text-white sm:text-lg">
              Best for large scale uses and extended redistribution rights.
            </p>
            <div className="my-8 flex items-baseline justify-center">
              <span className="mr-2 text-4xl font-extrabold">Get a Quote</span>
            </div>

            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 flex-shrink-0  text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Advanced Threat Identification</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 flex-shrink-0  text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Advanced Zero-Day Detection & Patches</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 flex-shrink-0  text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>HTML & PDF Report&apos;s</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 flex-shrink-0  text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Vulnerability Management Dashboard</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 flex-shrink-0  text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>
                  Security Engineer Support In the Remediation Process
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 flex-shrink-0  text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Priority Access to VoltSec App Store</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 flex-shrink-0  text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>24/7 Helpdesk Support</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 flex-shrink-0  text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Enhanced AI</span>
              </li>
            </ul>
            <Link href="/home/contact">
              <button className="inline-flex w-full items-center justify-center rounded-3xl border border-slate-300 bg-blue-600 px-5 py-3 text-center text-base  font-medium text-white hover:bg-white/10 focus:ring-4 focus:ring-slate-100  ">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-rows-1 md:grid-cols-8 gap-10 p-16">
        <div
          data-aos="zoom-in-right"
          data-aos-duration="1000"
          className="sm:row-span-1 col-span-4 m-1 mb-5  rounded-3xl border-2 border-white/10 p-5 shadow-2xl hover:bg-blue-600 hover:shadow-xl"
        >
          <h3 className="mb-4 flex items-center text-2xl font-medium text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className=" mr-2  h-20 w-20 flex-shrink-0  text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
              />
            </svg>
            Enhanced AI Feature: Available for Everyone
          </h3>
          <p className="text-lg font-normal  text-white">
            Our Enhanced AI feature is not exclusive to premium plans. Every
            VoltSec user benefits from the power of enhanced artificial
            intelligence, ensuring that your cybersecurity defenses are always
            evolving.
          </p>
        </div>
        <div
          data-aos="zoom-in-right"
          data-aos-duration="1000"
          className="col-span-4 m-1 mb-5  rounded-3xl  border-2 border-white/10 p-5 shadow-2xl hover:bg-blue-600 hover:shadow-2xl"
        >
          <h3 className="mb-4 flex items-center text-2xl font-medium  text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="mb-5 mr-2  h-20 w-20 flex-shrink-0  text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
              />
            </svg>
            How does VoltSec&apos;s penetration testing differ from other
            providers in the market?
          </h3>
          <p className="text-lg font-normal  text-white">
            VoltSec utilizes deep learning technology for proactive threat
            identification. Our approach combines advanced AI algorithms with
            human expertise, offering a comprehensive and effective penetration
            testing service that adapts to evolving cyber threats.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
