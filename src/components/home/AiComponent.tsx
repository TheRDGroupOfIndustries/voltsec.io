import Image from "next/image";
import React from "react";

import icon2 from "../../../public/icons/16.png";
import icon1 from "../../../public/icons/22.png";

const AiComponent = () => {
  
  return (
    <section className="flex flex-col flex-wrap items-center bg-gradient-to-bl from-blue-700 via-blue-500 to-blue-700 pt-10 md:pt-20">
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className="mx-auto mb-10 max-w-screen-sm p-5 text-center md:mb-0 md:p-0 "
      >
        <h2 className="mb-4 font-extrabold tracking-tight text-white text-4xl lg:text-5xl xl:text-6xl">
          AI & Human
        </h2>
        <p className="mb-0 font-light text-gray-100 sm:text-2xl md:mb-16">
          We&apos;re your unique cybersecurity partner, blending smart
          technology with expert guidance for top-notch protection like no
          other.
        </p>
      </div>
      <div className="mx-auto my-10 grid h-full w-full max-w-6xl grid-cols-1 gap-20 p-5 md:my-0 md:grid-cols-2 md:gap-10 md:p-0">
        <div
          data-aos="zoom-in-right"
          data-aos-duration="1000"
          className="relative col-span-1 flex h-full w-full flex-col items-center justify-center gap-x-5 rounded-3xl bg-white/20 px-5 py-5 pt-10 text-black/90 shadow-2xl md:flex-row"
        >
          <div className="absolute -top-8 flex h-16 w-72 items-center justify-center rounded-3xl bg-blue-600 focus:ring-4 focus:ring-primary-300 focus:ring-primary-900 text-white px-10 text-base font-medium shadow-2xl md:-top-10 md:h-20 md:w-80 md:text-xl">
            Voltsec.io Pentest
          </div>
          <Image
            alt="icons2"
            src={icon2}
            height={450}
            width={450}
            className="h-40 w-40 shadow-black/40 drop-shadow-2xl md:w-60"
          />
          <p className="py-5 text-2xl font-medium text-white">
            Persistent scanning powered by advanced deep learning models.
          </p>
        </div>
        <div
          data-aos="zoom-in-left"
          data-aos-duration="1000"
          className="relative col-span-1 flex h-full w-full flex-col items-center justify-center gap-x-5 rounded-3xl bg-white/20 px-5 py-5 pt-10 text-black/90 shadow-2xl md:flex-row"
        >
          <div className="absolute -top-8 flex h-16 w-72 items-center justify-center rounded-3xl bg-blue-600  focus:ring-4 focus:ring-primary-300 focus:ring-primary-900 text-white px-10 text-base font-medium shadow-2xl md:-top-10 md:h-20 md:w-80 md:text-xl">
            Expert Security Support
          </div>
          <Image
            alt="icons"
            src={icon1}
            height={450}
            width={450}
            className=" h-40 w-40 shadow-black/40 drop-shadow-2xl"
          />
          <p className="py-5 text-2xl font-medium text-white">
            {" "}
            Get expert human support to assist you in fixing any issues.
          </p>
        </div>
      </div>
      <div className="h-20 w-full"></div>
    </section>
  );
};

export default AiComponent;
