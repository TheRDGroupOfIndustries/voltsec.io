import React from "react";

const Featurelist = () => {
  return (
    <section className="flex flex-col flex-wrap items-center overflow-hidden bg-gradient-to-tr from-blue-700 via-blue-500 to-blue-700 pt-10 md:pt-20 ">
      <h2 className="mb-4 text-4xl md:text-6xl font-extrabold tracking-tight text-center  text-white">
        Our Features
      </h2>
      <div className=" mx-auto grid max-w-6xl sm:grid-rows-1 sm:gap-6 md:grid-cols-6 md:gap-10 px-4 py-8 lg:py-16">
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="hover: col-span-2  m-1  mb-5 rounded-3xl bg-white/10 p-5 shadow-2xl hover:shadow-xl"
        >
          <h3 className="mb-4 flex items-center text-xl font-semibold  text-white">
            AI-Powered Precision
          </h3>
          <p className="text-sm  text-white">
            Leverage advanced deep learning algorithms for unparalleled accuracy
            in identifying potential threats.
          </p>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="hover: col-span-2 m-1  mb-5  rounded-3xl  bg-white/10 p-5 shadow-2xl hover:shadow-xl"
        >
          <h3 className="mb-4 flex items-center  text-xl font-semibold  text-white">
            Actionable Insights
          </h3>
          <p className="text-sm  text-white">
            Transform raw data into actionable insights, empowering you to
            address vulnerabilities effectively.
          </p>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="hover: col-span-2 m-1  mb-5  rounded-3xl  bg-white/10 p-5 shadow-2xl hover:shadow-xl"
        >
          <h3 className="mb-4 flex items-center  text-xl font-semibold  text-white">
            Certified Ethical Hacker Validation
          </h3>
          <p className="text-sm  text-white">
            Trust in findings verified by our team of certified ethical hackers
            for an added layer of assurance.
          </p>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="hover: col-span-2 m-1  mb-5  rounded-3xl  bg-white/10 p-5 shadow-2xl hover:shadow-xl"
        >
          <h3 className="mb-4 flex items-center  text-xl font-semibold  text-white">
            Strategic CXO Dashboard
          </h3>
          <p className="text-sm  text-white">
            Provide CXOs with strategic oversight, aiding in informed
            decision-making and prioritization.
          </p>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="hover: col-span-2  m-1 mb-5 rounded-3xl  bg-white/10 p-5 shadow-2xl hover:shadow-xl"
        >
          <h3 className="mb-4 flex items-center text-xl font-semibold text-white">
            Developer-Friendly Reporting
          </h3>
          <p className="text-sm  text-white">
            Tailor-made reports catered to developers, ensuring clarity and ease
            of understanding.
          </p>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="hover: col-span-2  m-1  mb-5  rounded-3xl bg-white/10 p-5 shadow-2xl hover:shadow-xl"
        >
          <h3 className="mb-4 flex items-center text-lg font-medium  text-white">
            Human Expert Support
          </h3>
          <p className="text-sm  text-white">
            Access expert human support directly within your dashboard, ensuring
            you&apos;re never alone in addressing issues.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Featurelist;
