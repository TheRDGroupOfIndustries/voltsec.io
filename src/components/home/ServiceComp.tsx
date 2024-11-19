import { LucideLock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const Service = async () => {
  return (
    <section className="flex flex-col flex-wrap items-center bg-gradient-to-tl from-blue-700 via-blue-500 to-blue-700 pt-20 md:pt-20">
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className="mx-auto max-w-screen-sm text-center "
      >
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white  md:text-6xl">
          Our Services
        </h2>
        <p className="mb-0  font-light text-gray-100 sm:text-2xl md:mb-16">
          All services available according to your needs. Let&apos;s check them
          now.
        </p>
      </div>
      <div className="relative flex w-full max-w-6xl flex-row flex-wrap justify-center gap-x-10 p-5">
        <div className="absolute top-20 z-0 hidden aspect-video h-auto w-full max-w-7xl rounded-3xl bg-white/10 shadow-2xl shadow-black/5 md:block">
          <Image
            alt="icons"
            src={
              "https://images.unsplash.com/photo-1684139517679-032b7213ad2e?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            height={400}
            width={400}
            className=" h-full w-full  rounded-3xl object-cover shadow-black/40 drop-shadow-2xl"
          />
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="border-1 shadow-3xl z-10 mb-10 max-w-sm rounded-3xl border-gray-100/50 bg-gray-200/30 text-gray-900 shadow-2xl shadow-black/5 backdrop-blur-lg hover:bg-gray-200/50  "
        >
          <div className="mx-auto max-w-screen-xl px-3 py-5 sm:py-5 lg:px-4">
            <div className="flex h-full max-w-screen-md flex-col justify-between p-0">
              <h2 className="mb-2 flex flex-row text-2xl font-extrabold tracking-tight  text-white">
                <svg
                  className="mr-2 h-10 w-10 text-blue-100"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>{" "}
                Web Penetration Testing
              </h2>
              <p className="mb-3 h-48 text-sm md:text-lg font-medium text-gray-100">
                Web Applications are the primary entry point for attackers.
                Websites are often left vulnerable due to factors like enormous
                pressure on development teams to meet deadlines, vulnerable
                third-party APIs, insecure platform usages and lack of secure
                coding methodologies.
              </p>
              <div className="flex justify-end">
                <Link href="/account/dashboard">
                  <div className="m-2 my-10 inline-flex w-80 items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-primary-300 focus:ring-primary-900 text-white p-4 px-5 text-center text-base font-medium shadow-2xl shadow-black/40 md:w-auto">
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
              </div>
            </div>
          </div>
        </div>

        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="border-1 shadow-3xl z-10 mb-10 max-w-sm rounded-3xl border-gray-100/50 bg-gray-200/30 text-gray-900 shadow-2xl shadow-black/5 backdrop-blur-lg hover:bg-gray-200/50  "
        >
          <div className="mx-auto max-w-screen-xl px-3 py-5 sm:py-5 lg:px-4">
            <div className="flex h-full max-w-screen-md flex-col justify-between p-0">
              <h2 className="mb-2 flex flex-row text-2xl font-extrabold tracking-tight text-white">
                <svg
                  className="mr-2 h-10 w-10 text-blue-100"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
                Network Penetration Testing
              </h2>
              <p className="mb-3 h-48 text-sm md:text-lg font-medium text-gray-100">
                Identifying and Securing Network from Intrusion Attacks Network
                management of any organization is one of the easiest targets for
                attackers. Wireless networks are highly vulnerable to attacks
                like MiTM, DoS, Deauthentication attacks.
              </p>
              <div className="flex justify-end">
                <Link href="/account/dashboard">
                  <div className="m-2 my-10 inline-flex w-80 items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-primary-300 focus:ring-primary-900 text-white p-4 px-5 text-center text-base font-medium shadow-2xl shadow-black/40 md:w-auto">
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
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="border-1 shadow-3xl z-10 mb-10 max-w-sm rounded-3xl border-gray-100/50 bg-gray-200/30 text-gray-900 shadow-2xl shadow-black/5 backdrop-blur-lg hover:bg-gray-200/50  "
        >
          <div className="mx-auto max-w-screen-xl px-3 py-5 sm:py-5 lg:px-4">
            <div className="flex h-full max-w-screen-md flex-col justify-between p-0">
              <h2 className="mb-2 flex flex-row text-2xl font-extrabold tracking-tight text-white">
                <svg
                  className="mr-2 h-10 w-10 text-blue-100"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
                Cloud Penetration Testing
              </h2>
              <p className="mb-3 h-48 text-sm md:text-lg font-medium text-gray-100">
                Like Penetration Testing, Cloud Penetration Testing is an
                authorized simulated cyber-attack against a system that is
                hosted on a Cloud provider, e.g. Amazon’s AWS or Microsoft’s
                Azure. The main goal of a cloud pentest is to find the
                weaknesses and strengths of a system so that its security
                posture can be accurately assessed.
              </p>
              <div className="flex justify-end">
                {/* <Link href=""> */}
                  <div className="m-2 my-10 inline-flex w-80 items-center hover:invisible group relative justify-center gap-2 rounded-lg bg-blue-800 hover:cursor-not-allowed focus:ring-4 focus:ring-primary-300 focus:ring-primary-900 text-white p-4 px-5 text-center text-base font-medium shadow-2xl shadow-black/40 md:w-auto">
                    Get Started {" "}<LucideLock size={20} />
                    <span className="absolute inset-0 z-10 invisible group-hover:visible flex justify-center items-center gap-2 bg-blue-800 rounded-lg">Premium only {" "}<LucideLock size={20} /></span>
                  </div>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="border-1 shadow-3xl z-10 mb-10 max-w-sm rounded-3xl border-gray-100/50 bg-gray-200/30 text-gray-900 shadow-2xl shadow-black/5 backdrop-blur-lg hover:bg-gray-200/50  "
        >
          <div className="mx-auto max-w-screen-xl px-3 py-5 sm:py-5 lg:px-4">
            <div className="flex h-full max-w-screen-md flex-col justify-between p-0">
              <h2 className="mb-2 flex flex-row text-2xl font-extrabold tracking-tight  text-white">
                <svg
                  className="mr-2 h-10 w-10 text-blue-100"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>{" "}
                Mobile Penetration Testing
              </h2>
              <p className="mb-3 h-48 text-sm md:text-lg font-medium text-gray-100">
                Mobile Applications are the favorite entry point for attackers.
                These apps are often left vulnerable due to factors like
                enormous pressure on development teams to meet deadlines,
                vulnerable third-party APIs, insecure platform usages and lack
                of secure coding methodologies.
              </p>
              <div className="flex justify-end">
              {/* <Link href=""> */}
              <div className="m-2 my-10 inline-flex w-80 items-center hover:invisible group relative justify-center gap-2 rounded-lg bg-blue-800 hover:cursor-not-allowed focus:ring-4 focus:ring-primary-300 focus:ring-primary-900 text-white p-4 px-5 text-center text-base font-medium shadow-2xl shadow-black/40 md:w-auto">
                    Get Started {" "}<LucideLock size={20} />
                    <span className="absolute inset-0 z-10 invisible group-hover:visible flex justify-center items-center gap-2 bg-blue-800 rounded-lg">Premium only {" "}<LucideLock size={20} /></span>
                  </div>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

export default Service;
