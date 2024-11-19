import React from 'react'
  
const InteractiveDemo = () => {
  return (
    <section className="flex flex-col flex-wrap items-center bg-gradient-to-br from-blue-700 via-blue-500 to-blue-700 pt-10 md:pt-20">
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className="mx-auto mb-10 max-w-5xl p-5 text-center md:mb-5 md:p-0 "
      >
        <h2 className="mb-4 font-extrabold tracking-tight text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Explore the Features: Voltsec.io Pentest
        </h2>

        <div
          style={{
            position: "relative",
            paddingBottom: "47.657393850658856%",
            height: 0,
          }}
        >
          <iframe
            src="https://app.guideflow.com/embed/dr92zw2snk "
            width="100%"
            height="100%"
            className="absolute overflow-hidden border-none"
            allow="clipboard-read; clipboard-write"
            allowFullScreen={true}
            // allowTransparency={true}
            title="Vulnerability Management Dashboard"
          ></iframe>
        </div>
      </div>
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className="mx-auto mb-10 max-w-5xl p-5 text-center md:mb-0 md:p-0 "
      >
        <h2 className="mb-4 font-extrabold tracking-tight text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Explore Your Simple Vulnerability Management Dashboard
        </h2>

        <div
          style={{
            position: "relative",
            paddingBottom: "46.925329428989755%",
            height: 0,
          }}
        >
          <iframe
            src="https://app.guideflow.com/embed/yr4nenb4p3"
            width="100%"
            height="100%"
            className="absolute overflow-hidden border-none"
            allow="clipboard-read; clipboard-write"
            allowFullScreen={true}
            // allowTransparency={true}
            title="Vulnerability Management Dashboard"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default InteractiveDemo
