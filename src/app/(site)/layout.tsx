import Footer from "@/components/layout/Footer";
import HomeHeader from "@/components/layout/HomeHeader";
import InitAOS from "@/core/hooks/InitAOS";
import React from 'react';

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <HomeHeader  />
      {children}
      <Footer />
      {/* <Scroll /> */}
      <InitAOS />
    </>
  );
}
