"use client";

import useMutation from "@/core/hooks/useMutation";
import { getCertificate } from "@/core/server/account/Certification/getCertificateById";
import { Certificates } from "@prisma/client";
import React, { useState } from "react";

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
    if (certificate) setCertificateData(certificate);
    else if (!certificate)
      setError("Couldn't find a certificate with a given id.");
    else if (error) setError(error);
  };

  return (
    <section className="p-5">
      <h2 className="mb-2 p-2 py-2 text-2xl bg-transparent font-semibold text-gray-700">
        Certificate
      </h2>
      <div className=" bbg-white flex h-full w-full max-w-6xl flex-col items-center justify-center rounded-3xl border dark:bg-gray-800 p-5  py-10 shadow-xl">
        <div className="flex w-full flex-col items-center justify-center gap-5 py-10">
          <h2 className="w-full max-w-2xl text-3xl font-semibold tracking-tight  text-gray-500 sm:text-4xl">
            <span className="text-gray-500">Voltsec.io</span> |
            <span className="font-light">
              {" "}
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mb-1 inline h-10 w-10 text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
              Certificate Validator
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-500">
            Voltsec Certificate Validator allows users to verify the
            authenticity and validity of digital certificates.
          </p>
          <div className="mt-6 flex w-full max-w-2xl items-center justify-center gap-x-4">
            <label
              htmlFor="certificate"
              className="sr-only"
            >
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
              className="w-full max-w-2xl flex-auto rounded-md border-0 bg-blue-500 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset placeholder:text-white   focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
            />
            <button
              type="submit"
              disabled={isPending}
              onClick={handleGetCertificate}
              className="flex-none rounded-md disabled:opacity-60 bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              Get Certificate
            </button>
          </div>
          
          <span className="flex w-full items-center justify-center p-5 py-2 text-2xl">
            {error && <p className="text-lg text-red-500">{error}</p>}
            {isPending && (
              <p className="text-lg animate-pulse">Finding certificate...</p>
            )}
            {certificateData && (
              <p className="  text-green-500">
                {` This certificate Is issued to ${certificateData?.issuedTo} is Valid till ${certificateData?.expiryDate.toDateString()}`}
              </p>
            )}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
