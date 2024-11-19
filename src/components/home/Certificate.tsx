"use client";

import type { Certificates } from "@prisma/client";
import React, { useState } from "react";
import useMutation from "@/core/hooks/useMutation";
import { getCertificate } from "@/core/server/account/Certification/getCertificateById";
import Image from "next/image";

const Certificate = () => {
  const [certificateId, setCertificateId] = useState("");
  const [error, setError] = useState("");
  const [certificateData, setCertificateData] = useState<Certificates | null>(
    null
  );

  const handleCertificateIdChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCertificateId(e.target.value);
    setError("");
    setCertificateData(null);
  };

  const { mutate: getCertif, isPending } = useMutation(getCertificate);

  const handleGetCertificate = async () => {
    setCertificateData(null);
    setError("");

    const { certificate, error } = await getCertif({ eId: certificateId });
    if (certificate) {
      setCertificateData(certificate);
      console.log(certificate);
    } else if (!certificate) {
      setError("Couldn't find a certificate with a given id.");
      console.log("Couldn't find a certificate with a given id.");
    } else if (error) {
      setError(error);
    }
  };

  /* 
   {
      "id": "cm0wlhl790000x92k12zne1se",
      "eId": "983839483829",
      "issuedDate": "2024-09-10T15:37:00.026Z",
      "expiryDate": "2024-09-10T00:00:00.000Z",
      "issuedTo": "khushal Mali"
    }
  */

  return (
    <section className="bg-gradient-to-tr from-blue-700 via-blue-500 to-blue-700 pt-10 w-[100vw]">
      <div className="py-8 lg:px-6 lg:py-16">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="mx-auto mb-8 max-w-xl text-center items-center lg:mb-12"
        >
          <h2 className="m-4 text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Verify Certificate
          </h2>
          <p className="mb-5 font-light  text-white sm:text-xl">
            Verify the Validity of Your Credentials with Our Fast, Secure, and
            User-Friendly Certification Verification Platform.
          </p>
        </div>

        <div className="flex px-4 sm:px-6 lg:pl-12 xl:pl-16 md:flex-row flex-col gap-7 md:gap-4 lg:gap-7 w-full ">
          <div className="w-full space-y-8 text-center md:text-left h-full">
            <h4 className="font-bold tracking-wide text-slate-100 text-3xl md:text-4xl lg:text-5xl">
              Ensure the Authenticity of Your Pentest Credentials with Voltesec
            </h4>

            <p className="md:text-xl text-lg select-none text-slate-50">
              Provide your unique certification ID below to quickly verify the
              authenticity of your pentest certification.
            </p>

            <div className="flex md:flex-row gap-y-4 flex-col w-full max-w-2xl items-center justify-center gap-x-4">
              <label htmlFor="certificate" className="sr-only">
                Enter Your Certificate URL or ID.
              </label>
              <input
                type="text"
                value={certificateId}
                onChange={handleCertificateIdChange}
                placeholder="Enter Certificate URL or ID"
                id="certificate"
                name="certificate"
                required
                className="w-full max-w-2xl flex-auto rounded-sm border-0 bg-blue-500 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset placeholder:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
              />
              <button
                type="submit"
                disabled={isPending}
                onClick={handleGetCertificate}
                className="flex-none rounded-sm disabled:opacity-60 bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                Get Certificate
              </button>
            </div>
            <div>
              {error && (
                <p className="text-lg font-medium my-1 text-red-500">{error}</p>
              )}
              {isPending && (
                <p className="text-lg text-slate-100 font-medium my-1 animate-pulse">
                  Finding certificate...
                </p>
              )}

              {certificateData && (
                <div>
                  <table className="min-w-full rounded-lg bg-blue-400">
                    <thead className="text-slate-50">
                      <tr>
                        <th
                          colSpan={2}
                          className="px-4 text-center py-3 text-lg font-medium uppercase tracking-wider"
                        >
                          Certificate 
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-200">
                      <tr>
                        <td className="px-4 py-4">Issued To</td>
                        <td className="px-4 py-4">
                          {certificateData?.issuedTo}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">Certificate ID</td>
                        <td className="px-4 py-4">{certificateData?.eId}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">Issued Date</td>
                        <td className="px-4 py-4">
                          {certificateData?.issuedDate?.toDateString()}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">Expiry Date</td>
                        <td className="px-4 py-4">
                          {certificateData?.expiryDate.toDateString()}
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="mt-2 text-slate-100 text-lg font-semibold">
                    {`This certificate Is issued to ${certificateData?.issuedTo} is Valid till ${certificateData?.expiryDate.toDateString()}`}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="w-full flex items-center justify-center h-full">
            <div className="h-60 xs:h-[24rem] md:h-80 lg:h-96 relative w-full">
              <Image
                className="object-cover"
                src={"/Secure_Certificate.png"}
                fill
                alt={"Certificate Image"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
