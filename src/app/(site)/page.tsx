import React from "react";

import AboutContent from "@/components/home/AboutContent";
import AiComponent from "@/components/home/AiComponent";
import Cta from "@/components/home/Cta";
import DeveloperSection from "@/components/home/DeveloperSection";
import ExpertSupport from "@/components/home/ExpertSupport";
import Facts from "@/components/home/Facts";
import Featurelist from "@/components/home/Featurelist";  
import Hero from "@/components/home/Hero";
import InteractiveDemo from "@/components/home/InteractiveDemo";
import SecurityCertificate from "@/components/home/SecurityCertificate";
import Service from "@/components/home/ServiceComp";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutContent />
      <AiComponent />
      <Service />
      <SecurityCertificate />
      <InteractiveDemo />
      <DeveloperSection />
      <ExpertSupport />
      <Featurelist />
      <Cta />
      <Facts />
    </>
  );
};

export default Home;
