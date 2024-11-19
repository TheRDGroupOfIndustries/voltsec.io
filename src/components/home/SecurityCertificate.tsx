import Image from "next/image";
import Link from "next/link";
import React from "react";

import cert from "../../../public/Secure_Certificate.png";

const SecurityCertificate = () => {
  return (
    <section className="h-full items-center overflow-hidden bg-gradient-to-tr from-blue-700 via-blue-500 to-blue-700">
      <div className="h-full w-full  pt-10 ">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="mx-auto text-center last-of-type:p-5   md:p-0 "
        >
          <h2 className="mb-4 font-extrabold tracking-tight text-white text-4xl lg:text-5xl xl:text-6xl">
            Our Security Certificate
          </h2>
          <p className="mb-0  font-light text-gray-100 sm:text-2xl md:mb-0">
            At VoltSec.io, we believe in transparency and empowerment.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-3xl">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className=" aspect-video h-auto "
        >
          <Image
            alt="icons"
            src={cert}
            height={800}
            width={1200}
            className="h-auto w-full object-cover  shadow-black/40 drop-shadow-2xl "
          />
        </div>
      </div>
      <div className=" ">
        <div className="mx-auto px-3 grid h-full w-full max-w-6xl grid-cols-1 gap-x-10 gap-y-5 md:my-0 md:grid-cols-3 pb-6 md:pb-10">
          <div
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            className="col-span-1 flex h-full w-full flex-col items-center justify-center gap-x-5 rounded-3xl bg-white/20 px-5 py-5 text-black/90 shadow-lg md:shadow-xl "
          >
            <h2 className="my-5 text-3xl text-white">
              Our Simple Certification Process
            </h2>
            <ul className="flex list-inside list-decimal flex-col gap-5  text-sm text-white">
              <li>
                Initiate Penetration Test: Our AI-Powered platform conducts a
                thorough penetration test, highlighting vulnerabilities in your
                digital assets.
              </li>
              <li>
                Patch Vulnerabilities: Receive a comprehensive report outlining
                identified vulnerabilities. Your team addresses these issues
                promptly, fortifying your digital defenses.
              </li>
              <li>
                Free Retest: Request a retest, free of charge, to ensure all
                vulnerabilities have been successfully addressed.
              </li>
              <li>
                Certification Issued: Once your digital assets pass the retest
                and are deemed secure, we issue the VoltSec.io Security
                Certificate.
              </li>
            </ul>
          </div>
          <div
            data-aos="zoom-in-left"
            data-aos-duration="1000"
            className="  col-span-1 flex h-full w-full flex-col items-center justify-start gap-x-5 rounded-3xl bg-white/20 px-5 py-5  text-black/90 text-white shadow-lg md:shadow-xl  "
          >
            <h2 className="my-5 text-3xl text-white">
              Why VoltSec.io Security Certificate?
            </h2>
            <p className="text-sm">
              At VoltSec.io, we believe in transparency and empowerment.
              That&apos;s why, when you choose us for your penetration testing
              needs, we not only identify vulnerabilities but also provide you
              with the VoltSec.io Security Certificate upon successful
              resolution.
            </p>
            <ul className="flex list-inside list-decimal flex-col gap-5 pt-5 text-sm text-white">
              <li>
                Publicly Verifiable: Display your commitment to cybersecurity
                with a publicly verifiable certificate, showcasing your
                dedication to securing digital assets.
              </li>
              <li>
                Iterative Assurance: Our process allows for continuous
                improvement. Refix and retest until your digital infrastructure
                achieves the highest level of security.
              </li>
            </ul>
          </div>

          <div
            data-aos="zoom-in-left"
            data-aos-duration="1000"
            className="  col-span-1 flex h-full w-full flex-col items-center justify-start gap-x-5 rounded-3xl bg-white/20 px-5 py-5  text-black/90 shadow-lg md:shadow-xl  "
          >
            <h2 className="my-5 text-3xl text-white">
              Why VoltSec.io Security Certificate?
            </h2>
            <ul className="flex list-inside list-decimal flex-col gap-5 pb-10 pt-5 text-sm text-white">
              <li>
                Your Security, Your Certificate The VoltSec.io Security
                Certificate is not just a recognition; it&apos;s a testament to
                your ongoing commitment to cybersecurity. Showcase your secure
                status with pride, backed by the assurance of VoltSec.io.
              </li>
              <li>
                Ready to fortify your digital assets and showcase your
                commitment to cybersecurity? Initiate a penetration test with
                VoltSec.io and earn your Security Certificate today.
              </li>
            </ul>
            <Link href="/account/certificate">
              <div className="m-2 inline-flex w-64 items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-center text-base font-medium text-white shadow-lg md:shadow-xl shadow-black/15 hover:bg-blue-700 focus:ring-4 md:w-auto">
                Get Certified Now
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityCertificate;
