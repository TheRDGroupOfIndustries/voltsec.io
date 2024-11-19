import Image from "next/image";
import Link from "next/link";

import icon13 from "../../../public/icons/13.png";

const AboutContent = () => {
  return (
    <section className="flex flex-col flex-wrap items-center overflow-hidden bg-gradient-to-tl from-blue-700 via-blue-500 to-blue-700 pt-10 md:pt-20">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="mx-auto max-w-screen-sm p-5 text-center md:p-0 "
      >
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white   lg:text-5xl xl:text-6xl">
          About Us
        </h2>
        <p className="mb-0  font-light text-gray-100 sm:text-2xl md:mb-16">
          Step into the world of{" "}
          <a href="http://voltsec.io/" className="text-white" target="_blank">
            VoltSec.io
          </a>
          , a realm where cybersecurity and innovation converge seamlessly...
        </p>
      </div>
      <div className="mx-auto grid h-full w-full max-w-6xl grid-cols-1 gap-10 p-5 md:grid-cols-2 md:p-0">
        <div className="col-span-1 flex items-center justify-center h-60 w-full overflow-hidden md:h-full">
          <Image
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            alt="icons"
            src={icon13}
            height={450}
            width={450}
            className=" z-10 h-60 w-60 shadow-black/40 drop-shadow-2xl md:h-80 md:w-80"
          />
        </div>

        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="z-10 col-span-1 flex h-full w-full flex-col gap-5 gap-x-5 rounded-3xl  bg-white/20 p-5 px-5 py-5 pt-10 text-left text-white/90 shadow-2xl backdrop-blur-sm"
        >
          <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            VoltSec.io
          </h2>{" "}
          <p>
            As pioneers in the cybersecurity landscape, we proudly present our
            AI-Powered platform. More than a vulnerability scanner, it&apos;s
            your strategic ally, empowering you with actionable insights derived
            from rigorous penetration tests...
          </p>
          <p>
            Experience the future of cybersecurity with{" "}
            <a
              href="http://voltsec.io/"
              className="text-white underline"
              target="_blank"
            >
              VoltSec.io
            </a>{" "}
            — not just a goal but a steadfast commitment to securing your
            digital world through advanced penetration testing expertise.
          </p>
          <Link href="/account">
            <div className="m-2 inline-flex items-center justify-center  rounded-lg   bg-blue-600 px-5 py-3 text-center text-base  font-medium text-white shadow-2xl  shadow-black/40 focus:ring-4 focus:ring-primary-300 dark:hover:bg-blue-700 dark:focus:ring-primary-900">
              Get Started Now
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

        {/* <Image
          alt='icons'
          src={
            'https://images.unsplash.com/photo-1684139517679-032b7213ad2e?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          height={400}
          width={400}
          className='absolute left-0 top-10 z-0 h-auto w-full md:max-w-2xl w-80 rounded-3xl object-cover shadow-black/40 drop-shadow-2xl'
        /> */}
      </div>
      <div className="h-20 w-full"></div>
    </section>
  );
};

export default AboutContent;
