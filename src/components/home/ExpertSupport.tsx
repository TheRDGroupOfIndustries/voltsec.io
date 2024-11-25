import Image from "next/image";
import Link from "next/link";

import exp from "../../../public/exp.png";

const ExpertSupport = () => {
  return (
    <section className="flex flex-col flex-wrap items-center overflow-hidden bg-gradient-to-tl from-blue-700 via-blue-500 to-blue-700 pt-10 md:pt-20">
      <h2
        data-aos="fade-down"
        data-aos-duration="1000"
        className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-6xl"
      >
        Expert Support
      </h2>
      <div className="mx-auto max-w-5xl pt-10">
        <div className="grid grid-cols-1 py-5 md:grid-cols-2">
          <div className="col-span-1 flex justify-center items-center p-4 md:p-8">
            <Image
              data-aos="fade-up-right"
              data-aos-duration="1000"
              alt="icons"
              src={exp}
              className="
                w-full h-auto 
                sm:max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl
                p-2 md:p-4 
                rounded-3xl shadow-2xl shadow-black/40 drop-shadow-2xl
              "
            />
          </div>

          <div className="col-span-1 p-5">
            <p
              data-aos="fade-down"
              data-aos-duration="1000"
              className="pb-5 text-lg font-normal text-white "
            >
              Empower your cybersecurity strategy with guidance from our team of
              experts. Allow our certified security engineers to meticulously
              review each vulnerability, providing you with clear and actionable
              steps to address every issue. Don&apos;t let the momentum of your
              penetration test waver. Access direct human support seamlessly
              integrated into your dashboard through our helpdesk. Ensure that
              your cybersecurity journey is backed by the expertise needed to
              fortify your digital defenses effectively.
            </p>
            <Link href="/contact">
              <div
                data-aos="fade-down"
                data-aos-duration="1000"
                className="m-2 my-10 inline-flex w-80 items-center justify-center rounded-lg bg-white/80  p-4 px-5 text-center text-base font-medium text-blue-500 shadow-2xl shadow-black/40 hover:bg-white md:w-auto"
              >
                Connect with experts!
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

export default ExpertSupport;
