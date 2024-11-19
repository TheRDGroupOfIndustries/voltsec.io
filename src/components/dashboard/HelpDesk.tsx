"use client";

import React, { useState, useTransition } from "react";
import { toast } from "sonner";

import { createHelpdesk } from "@/core/server/account/helpdesk/createHelpdesk";
import { deleteHelpdesk } from "@/core/server/account/helpdesk/deleteHelpdesk";
import { Helpdesks } from "@prisma/client";
import useMutation from "@/core/hooks/useMutation";
import { useSession } from "next-auth/react";
import { sendMessageUser } from "@/core/server/account/helpdesk/addMessage";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import image from "/public/pdf.png"


type Props = {
  helpdesks: Helpdesks[];
};

const HelpDesk = ({ helpdesks }: Props): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState("Create Query");
  const { mutate: createHelpdeskMutation, isPending: isPendingHelpdesk } =
    useMutation(createHelpdesk);

  const { mutate: deleteHelpdeskMutation, isPending: isPendingDelete } =
    useMutation(deleteHelpdesk);

  const [cur, setCur] = useState("");
  const [values, setValues] = useState({
    name: "",
    subject: "help",
    description: "",
    message: "",
    file: ""
  });
  
  const handleTabChange = (tab: string) => {
    // added type annotation for the 'tab' parameter
    setSelectedTab(tab);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // server action to create a new helpdesk
    const { success, error } = await createHelpdeskMutation({
      name: values.name,
      request: values.description,
      status: "pending",
      subject: values.subject,
      text: values.message,
      file: values.file
    });

    if (success) toast(success);
    else toast(error);
    setValues({
      name: "",
      subject: "help",
      description: "",
      message: "",
      file: "",
    });
  };

  const session = useSession();
  const handleDelete = async (helpdeskId: string) => {
    setCur(helpdeskId);
    // server action to delete a helpdesk
    const { success, error } = await deleteHelpdeskMutation(helpdeskId);
    if (success) toast(success);
    else toast(error);
    setCur("");
  };

  const { mutate, isPending } = useMutation(sendMessageUser);

  const handleSubmit = async (id: string, message: string) => {
    const { success, error } = await mutate({ id, message });
  };

  const uploadFile = async (e:any) => {
    e.preventDefault(); 
    const files = e.target.files[0];

    try {
      const reader = new FileReader();
      reader.readAsDataURL(files);
      reader.onloadend = async () => {
        const base64File = reader.result as string;
        try {
          const response = await fetch('/api/upload', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ file: base64File }),
          });
          const data = await response.json();
          if (response.ok) {
            setValues((prev) => ({
              ...prev,
              file: data.url
            }))
          } else {
            console.error('Upload failed:', data.error);
          }
        } 
        catch (error) {
          console.error('Error uploading file:', error);
        }
    }
  }
  catch (error) {
    console.error('Error reading file:', error);
  }
}
  return (
    <section className="p-5">
      <h2 className="mb-2 p-2 py-2 text-2xl font-semibold text-gray-700">
        HelpDesk
      </h2>

      <div>
        <div className="flex w-full space-x-2">
          <button
            className={`inline-block rounded-l-3xl px-4 py-2 ${
              selectedTab === "Create Query"
                ? "bg-[#3b83f652] text-blue-400"
                : "bg-gray-200 text-gray-400 hover:bg-gray-300 hover:text-gray-700"
            } focus:outline-none focus:ring-4 focus:ring-blue-300`}
            onClick={() => handleTabChange("Create Query")}
          >
            Create Query
          </button>
          <button
            className={`inline-block rounded-r-3xl px-4 py-2 ${
              selectedTab === "Query History"
                ? "bg-[#3b83f652] text-blue-400"
                : "bg-gray-200 text-gray-400 hover:bg-gray-300 hover:text-gray-700"
            } focus:outline-none focus:ring-4 focus:ring-blue-300`}
            onClick={() => handleTabChange("Query History")}
          >
            Query History
          </button>
        </div>

        {/* Render tab content based on the selected tab */}
        <div className="my-5 w-full ">
          {selectedTab === "Create Query" && (
            <div className="relative mb-5 h-full w-full md:h-auto">
              <div className="relative rounded-3xl bg-white p-4 shadow dark:bg-gray-800 sm:p-5">
                <div className="flex items-center justify-between dark:border-gray-600 ">
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Create Query
                  </h2>
                </div>

                <form onSubmit={onSubmit}>
                  <h3 className="mb-5 text-sm text-gray-500">
                    Note: Submit your query with the related subject, and our
                    support group will take action on it.
                  </h3>
                  <div className="mb-4 grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        name="name"
                        id="name"
                        value={values.name}
                        onChange={handleChange}
                        className="block w-full rounded-3xl border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        placeholder="Enquiry Name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        required
                        name="subject"
                        value={values.subject}
                        onChange={handleChange}
                        className="block w-11/12 rounded-3xl border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      >
                        <option value="Help Support">Help Support</option>
                        <option value="Account Upgrage">Account Upgrade</option>
                        <option value="Voltcharge⚡">Voltcharge ⚡</option>
                        <option value="Pentest Request">Pentest Request</option>
                        <option value="Payment">Payment</option>
                      </select>
                    </div>

                    
                  <div className="sm:col-span-2">
                      <label
                        htmlFor="description"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        File {"(PDF) Only"}
                      </label>
                      <input
                        id="file"
                        name="file"
                        type="file"
                        accept="application/pdf"
                        onChange={(e) => uploadFile(e)}
                        className="
                        file:mr-4 file:py-2 file:px-4 file:rounded-md
                        file:border-0 file:text-sm file:font-semibold
                      file:bg-blue-50 file:text-blue-700
                      hover:file:bg-blue-100
                        block w-full rounded-3xl border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="description"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Description
                      </label>
                      <input
                        id="description"
                        name="description"
                        required
                        type="text"
                        value={values.description}
                        onChange={handleChange}
                        className="block w-full rounded-3xl border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        placeholder="Write your description..."
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={values.message}
                        onChange={handleChange}
                        className="block w-full rounded-3xl border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        placeholder="Your message..."
                      ></textarea>
                    </div>
                  </div>




                  <div className="flex items-center space-x-4">
                    <button
                      type="submit"
                      disabled={isPendingHelpdesk}
                      className="inline-flex disabled:opacity-60 items-center rounded-3xl border border-blue-600 px-5 py-2.5 text-center text-sm font-medium bg-[#3b83f652] text-blue-400 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-4  "
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
          
          {selectedTab === "Query History" && (
            <div className="relative h-full w-full md:h-auto">
              <div className="relative rounded-3xl dark:bg-gray-800 p-4 shadow sm:p-5">
                <div className=" flex items-center justify-between dark:border-gray-600 ">
                  <h2 className=" text-2xl font-semibold text-gray-900 dark:text-white">
                    Query History
                  </h2>
                </div>

                <dl className="mt-5 w-full divide-y-2 dark:text-white rounded-3xl border  p-5 ">
                  {helpdesks?.length === 0 ? (
                    <div className="h-60 w-full text-center">
                      No Helpdesks to display
                    </div>
                  ) : (
                    <>
                      {helpdesks?.map(
                        (
                          {
                            id,
                            name,
                            request,
                            email,
                            date,
                            status,
                            subject,
                            messages,
                            text,
                            repliedFile,
                          },
                          index
                        ):any => (
        
<div key={index + name} className="flex flex-col p-3">
                            <dt className="mb-1 flex flex-row justify-between font-semibold text-blue-300 dark:text-blue-300">
                              <span> Query no. {index + 1}</span>
                              {id ? (
                                <button
                                  disabled={isPendingDelete && id === cur}
                                  onClick={() => handleDelete(id)}
                                  className="rounded-xl bg-red-500 px-2 py-1 disabled:opacity-60 text-white hover:bg-red-600"
                                >
                                  Delete
                                </button>
                              ) : (
                                <></>
                              )}
                            </dt>
                            <dd>
                              <h4 className="text-lg font-bold text-gray-900 ">
                                Title:
                                <span className="px-2 text-base font-normal text-gray-900">
                                  {name}
                                </span>
                              </h4>
                              <h4 className="text-lg font-bold text-gray-900 ">
                                Subject:
                                <span className=" ml-3 mr-2 text-base rounded-xl px-2 py-0.5 font-normal capitalize text-gray-900">
                                  {subject}
                                </span>
                              </h4>
                              <h4 className="text-lg font-bold text-gray-700 ">
                                Description:
                                <span className="px-2 text-base font-normal  text-gray-700">
                                  {request}
                                  {/* {console.log(repliedFile)} */}
                                </span>
                              </h4>
                            </dd>
                            <strong className="text-lg">Messages:</strong>
                              <p className="py-2 text-base pt-1">{text}</p>
                            <div className="max-h-[400px] overflow-y-auto w-full space-y-6 p-6 empty:p-0 border rounded">
                              {/* {messages.length === 0 && (
                                <div className="flex items-center justify-center h-full bg-transparent">
                                  {text}
                                </div>
                              ).
                              } */}
                              {/* <p> */}
                              {/* </p> */}
                              {messages
                                .sort((a: any, b: any) => {
                                  const date1 = new Date(a.createdAt).getTime();
                                  const date2 = new Date(b.createdAt).getTime();
                                  return date1 - date2;
                                })
                                .map((message: any, ind) => (
                                  <div key={`message-${ind}`}>
                                    {message.from === session.data?.user.id ? (
                                      <div className="relative  text-primary-foreground w-[60%] rounded ml-auto px-4 py-2 text-sm">
                                        <span className="absolute -top-5 right-2 text-foreground text-sm">
                                          You{" "}
                                          <span className="text-xs text-muted-foreground">
                                            {new Date(
                                              message.createdAt
                                            ).toDateString()}
                                          </span>
                                        </span>
                                        <p className="bg-primary p-3 rounded-md">{message.message}</p>
                                        {repliedFile!=="" && (
                                                      <>
                                                      <h1 className="py-4 text-xl font-bold text-black">Recevied File -</h1>
                                                      <a href={`/api/download?url=${encodeURIComponent(`${repliedFile}`)}`} className="mt-10">
                                                      <div className="hover:scale-90 transition-all w-40 h-40 rounded-md border-2 border-gray-300 bg-white flex justify-center items-center flex-col gap-1 cursor-pointer">
                                                        <img src={image.src} alt="pdf" className="w-12 h-12"/>
                                                          <h1 className="text-xl font-bold text-red-600">PDF</h1>
                                                      </div>
                                                      </a>
                                                      </>
                                        )}
                                      </div>
                                    ) : (
                                      <div className="relative bg-secondary text-secondary-foreground w-[60%] max-w-[60%] rounded mr-auto px-4 py-2 text-sm">
                                        <span className="absolute -top-5 left-0 text-foreground text-sm">
                                          Admin{" "}
                                          <span className="text-xs text-muted-foreground">
                                            {new Date(
                                              message.createdAt
                                            ).toDateString()}
                                          </span>
                                        </span>
                                        <p className="bg-primary p-3 rounded-md">{message.message}</p>
                                        {repliedFile!=="" && (
                                                      <>
                                                      <h1 className="py-4 text-xl font-bold text-black">Recevied File -</h1>
                                                      <a href={`/api/download?url=${encodeURIComponent(`${repliedFile}`)}`} className="mt-10">
                                                      <div className="hover:scale-90 transition-all w-40 h-40 rounded-md border-2 border-gray-300 bg-white flex justify-center items-center flex-col gap-1 cursor-pointer">
                                                        <img src={image.src} alt="pdf" className="w-12 h-12"/>
                                                          <h1 className="text-xl font-bold text-red-600">PDF</h1>
                                                      </div>
                                                      </a>
                                                      </>
                                        )}
                                      </div>
                                    )}
                                  </div>
                                ))}
                            </div>
                            <form
                              className="mt-2"
                              onSubmit={async (e: any) => {
                                e.preventDefault();
                                const message = e.target.message.value;
                                await handleSubmit(id, message);
                                e.target.message.value = "";
                              }}
                            >
                              <div className="grid gap-4">
                                <Textarea
                                  className="max-h-[200px]"
                                  name="message"
                                  placeholder={`Reply ${email}...`}
                                />
                                <div className="flex items-center">
                                  <Button
                                    disabled={isPending}
                                    size="sm"
                                    className="ml-auto"
                                  >
                                    Send
                                  </Button>
                                </div>
                              </div>
                            </form>
                          </div>
                        )
                      )}
                    </>
                  )}
                </dl>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HelpDesk;