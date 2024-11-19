"use client";

import React, { useState } from "react";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Enhances } from "@prisma/client";
import useMutation from "@/core/hooks/useMutation";
import { deleteEnhance } from "@/core/server/account/Enhance/IdEnhance";
import { createEnhance } from "@/core/server/account/Enhance/createEnhance";
import { toast } from "sonner";

const Enhance = ({ enhances }: { enhances: Enhances[] }) => {
  const [shareDetails, setShareDetails] = useState(false);
  const [summary, setSummary] = useState("");
  const [details, setDetails] = useState("");

  const { mutate: deleteAction, isPending: isDeleting } =
    useMutation(deleteEnhance);
  const { mutate: createAction, isPending: isCreating } =
    useMutation(createEnhance);
  const [deletingId, setDeletingId] = useState("");

  const handleAdd = async () => {
    const { success, error } = await createAction({
      businessSummary: summary,
      extraKeyDetails: details,
      toggleOn: shareDetails,
      uploadedDoc: "",
    });
    if (success) toast.success(success);
    else toast.error(error);
  };
  const handleRemove = async (idToRemove: string) => {
    setDeletingId(idToRemove);
    const { success, error } = await deleteAction(idToRemove);
    setDeletingId("");
    if (success) toast.success(success);
    else toast.error(error);
  };

  const handleToggleChange = async (val: boolean) => {
    setShareDetails(val);
  };

  return (
    <section className="p-5">
      <h2 className="mb-2 p-2 py-2 text-2xl font-semibold text-gray-700">
        Enhance AI
      </h2>
      <div className="rounded-3xl bg-blue-500 p-5">
        <h1 className="text-2xl font-semibold text-white">
          <span className="inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="inline h-12 w-12 pb-0.5 pr-2 "
            >
              <path
                fillRule="evenodd"
                d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          Enhance VoltSec.io&apos;s AI for Improved Application Scanning.
        </h1>
        <p className="text-white">
          Through the provision of comprehensive details about your application,
          you can empower the AI of Voltsec.io to make precise security test
          cases.
        </p>
      </div>
      <div className="flex flex-row items-center justify-between px-5 pt-5">
        <div className="">
          <h2 className="text-xl font-semibold text-black">
            Share details about your app for better penetration testing
            optimization.
          </h2>
          <p className="text-black text-sm">
            Kindly provide the specifics of the application&apos;s features to
            facilitate the creation of test cases for penetration testing.
          </p>
        </div>
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl">
          {/* Checkbox input with label */}
          <Switch checked={shareDetails} onCheckedChange={handleToggleChange} />
        </div>
      </div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await handleAdd();
          setSummary("");
          setDetails("");
          setShareDetails(false);
        }}
      >
        <div className="px-5">
          <h2 className="py-3 text-xl font-semibold text-black">
            Summary of the Application.
          </h2>
          <p className="text-black text-sm mb-2">
            Kindly offer a concise summary of the application under scrutiny,
            including its intended purpose and functionality.
          </p>
          <textarea
            data-aos="zoom-in"
            data-aos-duration="1000"
            id="data"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            rows={4}
            required
            name="data"
            className="block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-sm  text-black placeholder-slate-400    shadow-sm focus:border-primary-500  focus:ring-primary-500"
            placeholder="The demo text application is a user-friendly platform designed for creating and
          testing various text-based functionalities. Its simple interface allows users to
          experiment with different text formats, styles, and structures. With an array of
          built-in tools, it facilitates easy manipulation and analysis of text data for testing
          purposes."
          ></textarea>
        </div>
        <div className=" relative flex w-full flex-col p-5">
          <h2 className="py-5 text-xl font-semibold text-black">
            Add Details That you think are Important to consider
          </h2>
          <div className="flex flex-row items-center justify-between gap-5">
            <label
              htmlFor="default-input"
              className="sr-only text-sm font-medium text-gray-900 dark:text-black"
            >
              Add More Details
            </label>
            <Input
              type="text"
              required
              placeholder="Payment Gateway Integrated Via Strip In Dashboard Payment Gateway."
              id="default-input"
              onChange={(e) => setDetails(e.target.value)}
              value={details}
            />
          </div>
          <Button type="submit" className="w-min mt-4" disabled={isCreating}>
            {isCreating ? "Adding..." : "Add Enhance"}
          </Button>
        </div>
      </form>
      <div className="px-5">
        <h3 className="py-5 text-xl font-semibold text-gray-900 dark:text-black/70">
          Manage Added List
        </h3>
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {enhances.map(({ id, businessSummary, extraKeyDetails }) => {
            return (
              <li
                key={id}
                className="mb-10 ms-4 flex flex-row justify-between rounded-lg border border-white/30 p-2"
              >
                <div className="absolute -start-1.5 mt-2 h-3 w-3 rounded-full border border-white bg-gray-400 dark:border-gray-900 dark:bg-gray-700"></div>
                <h3 className="text-lg  text-gray-900 dark:text-white/80">
                  {/* Need to add more data in form of table or list */}
                  {businessSummary}
                </h3>

                {/* Need to add more data in form of table or list */}
                <h3 className="text-lg hidden lg:block  text-gray-900 dark:text-white/80">
                  {extraKeyDetails}
                </h3>
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  disabled={isDeleting && deletingId === id}
                  onClick={() => handleRemove(id)}
                >
                  Delete
                </Button>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Enhance;
