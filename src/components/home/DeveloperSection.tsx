import Image from "next/image";
import Link from "next/link";

import dev1 from "../../../public/1-removebg.png";
import dev2 from "../../../public/2-removebg.png";

const DeveloperSection = () => {
  return (
    <section className="flex flex-col flex-wrap items-center overflow-hidden bg-gradient-to-tr from-blue-700 via-blue-500 to-blue-700 pt-10 md:pt-20">
      <h2
        data-aos="fade-down"
        data-aos-duration="1000"
        className="mb-4 font-extrabold tracking-tight text-white text-4xl lg:text-5xl xl:text-6xl"
      >
        For Developer&apos;s
      </h2>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="mx-auto max-w-6xl text-center md:p-0 "
      >
        <div className="flex flex-col gap-5 pb-10 px-4 md:flex-row md:gap-8 md:px-10">
          <div className="flex justify-center items-center w-full md:w-1/2">
            <Image
              data-aos="fade-up-left"
              data-aos-duration="1000"
              alt="icons"
              src={dev1}
              className="w-full h-auto max-w-full rounded-3xl shadow-black/40 drop-shadow-2xl p-2"
            />
          </div>
          <div className="flex justify-center items-center w-full md:w-1/2">
            <Image
              data-aos="fade-up-right"
              data-aos-duration="1000"
              alt="icons"
              src={dev2}
              className="w-full h-auto max-w-full rounded-3xl shadow-black/40 drop-shadow-2xl p-2"
            />
          </div>
        </div>

        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="mx-auto max-w-4xl"
        >
          <p className="text-lg font-semibold text-white">
            We understand the importance of clarity and collaboration in your
            workflow. That’s why we provides you with clear, actionable steps to
            patch every issue, fostering a seamless and efficient partnership in
            securing your digital assets.
          </p>
          <Link href="/contact">
            <div className="m-2 my-10 inline-flex w-80 items-center justify-center rounded-lg bg-white/80  p-4 px-5 text-center text-base font-medium text-blue-500 shadow-2xl shadow-black/40 hover:bg-white md:w-auto">
              Speak To Sales
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
    </section>
  );
};

export default DeveloperSection;
