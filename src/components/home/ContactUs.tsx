"use client";

import useMutation from "@/core/hooks/useMutation";
import { createContacts } from "@/core/server/account/Contact/createContact";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { toast } from "sonner";

const ContactUs = () => {
  const { data: session } = useSession();
  const [showPopup, setShowPopup] = useState(false);
  const [contactFormData, setContactFormData] = useState({
    email: (session?.user?.email as string) || "",
    subject: "",
    message: "",
  });
  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContactFormData({
      ...contactFormData,
      [e.target.name]: e.target.value,
    });
  };

  const { mutate, isPending } = useMutation(createContacts);

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const payload = contactFormData;
    const { success, error } = await mutate({
      fromEmail: payload.email,
      message: payload.message,
      subject: payload.subject,
    });
    if (success) toast.success(success);
    else toast.error(error);
    setShowPopup(true);
    setContactFormData({
      email: (session?.user?.email as string) || "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="flex flex-col flex-wrap items-center overflow-hidden bg-gradient-to-tl from-blue-700 via-blue-500 to-blue-700 pt-10 md:pt-20">
      <div className="mx-auto max-w-screen-md px-4 py-8  lg:py-16">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className=""
        >
          <h2 className="mb-4 text-center text-6xl font-extrabold tracking-tight  text-white">
            Contact Us
          </h2>
          <p className="mb-8 text-center font-light  text-slate-100 sm:text-xl lg:mb-16">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
        </div>
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-80 z-50">
            <div
              id="alert-additional-content-3"
              className="container mx-auto mb-4 max-w-3xl rounded-3xl  bg-blue-500 p-4   text-white"
              role="alert"
            >
              <div className="flex items-center">
                <svg
                  aria-hidden="true"
                  className="mr-2 h-10 w-10"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Info</span>
                <h3 className="text-2xl font-medium text-white">
                  Form Submitted Successfully
                </h3>
              </div>
              <div className="mb-4 mt-2 text-xl">
                Thankyou for submitting we will get back to you soon.
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="rounded-3xl border    bg-white px-3 py-1.5 text-center text-lg  font-medium text-black hover:text-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300  "
                  data-dismiss-target="#alert-additional-content-3"
                  aria-label="Close"
                  onClick={() => setShowPopup(false)}
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        )}
        <form
          className="space-y-8"
          onSubmit={onSubmit}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium  text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              value={contactFormData.email}
              name="email"
              onChange={handleChange}
              className="outline-none shadow-sm-light block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-sm  text-black placeholder-slate-400 shadow-sm focus:border-primary-500 focus:ring-primary-500  "
              placeholder="name@mail.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="outline-none mb-2 block text-sm font-medium  text-white"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={contactFormData.subject}
              name="subject"
              onChange={handleChange}
              className="outline-none shadow-sm-light block w-full rounded-lg border border-slate-300 bg-slate-50 p-3 text-sm  text-black placeholder-slate-400 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium  text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              name="message"
              required
              value={contactFormData.message}
              onChange={handleChange}
              className="outline-none block w-full rounded-lg border border-slate-300 bg-slate-50 p-2.5 text-sm  text-black placeholder-slate-400    shadow-sm focus:border-primary-500  focus:ring-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="hover: inline-flex items-center rounded-lg border-2 border-slate-300 bg-white/10 px-4 py-2 text-center text-sm  font-medium text-white hover:text-blue-500 hover:bg-white focus:outline-none focus:ring-4 focus:ring-slate-200 "
            disabled={isPending} // Disable the button while loading
          >
            {isPending ? "Submitting..." : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
