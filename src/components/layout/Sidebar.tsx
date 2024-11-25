"use client";

import { CalendarDays, LucideLock } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface SidebarProps {
  onToggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onToggleSidebar }) => {
  const [open, setOpen] = useState(true);
  const [notification, setnotification] = useState(true);
  const path = usePathname();
  return (
    <aside
      className="-trangray-x-full md:trangray-x-0 fixed left-0  z-40 h-[92vh] w-72  pt-4 transition-transform border-gray-700 bg-white dark:bg-gray-800 top-[8vh]"
      aria-label="Sidenav"
      id="drawer-navigation"
    >
      <div className="h-full px-3 py-1 ">
        <ul className="flex flex-col space-y-1">
          <li>
            <Link
              href="/account" // Specify the route you want to link to
              className={`group flex items-center rounded-3xl p-2 px-3 text-base font-medium ${
                path === "/account"
                  ? "bg-blue-400/30 text-blue-700"
                  : "text-gray-400 dark:hover:bg-gray-700 hover:border-gray-400 border border-transparent rounded"
              }`}
              onClick={onToggleSidebar}
            >
              <svg
                aria-hidden="true"
                className={`mt-1 h-5 w-5 ${
                  path === "/account"
                    ? "text-blue-700"
                    : "text-gray-400 hover:bg-gray-700"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
              </svg>
              <span className="ml-3">Dashboard</span>
            </Link>
          </li>

          <li>
            <Link
              href="/account/pentest" // Specify the route you want to link to
              className={`group flex items-center justify-between rounded-3xl p-2 pr-5 text-base font-medium ${
                path === "/account/pentest"
                  ? "bg-blue-400/30 text-blue-700"
                  : "text-gray-400 dark:hover:bg-gray-700 hover:border-gray-400 border border-transparent rounded"
              }`}
              onClick={onToggleSidebar}
            >
              <div className="flex flex-row">
                <span className="ml-3">Pentest History</span>
              </div>
              {/* <button onClick={() => setOpen((open) => !open)}>
                <svg
                  className={`h-4 w-4 transition-all duration-100 ${
                    open ? "rotate-0" : "-rotate-90"
                  }`}
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button> */}
            </Link>
            {/* <ul
              id="dropdown-example"
              className={`ml-5 p-2 transition-all duration-100 ${
                open ? "block h-full opacity-100" : "hidden h-0 opacity-0"
              }`}
            >
              <li className={" "}>
                <Link
                  href="/account/pentest/setting"
                  className={`group flex w-full items-center rounded-lg py-2 pl-4 transition duration-75 ${
                    path === "/account/pentest/setting"
                      ? "bg-blue-400/30 text-blue-700"
                      : "text-gray-400 dark:hover:bg-gray-700 hover:border-gray-400 border border-transparent rounded"
                  }`}
                  onClick={onToggleSidebar}
                >
                  Pentest Settings
                </Link>
              </li>
            </ul> */}
          </li>

          <li>
            <Link
              href=""
              className={`group flex items-center rounded-3xl p-2 text-base font-medium ${
                path === "/account/SchedulePentest"
                  ? "bg-blue-400/30 text-blue-700"
                  : "text-gray-300 hover:cursor-not-allowed border border-transparent rounded"
              }`}
              // onClick={onToggleSidebar}
            >
              <CalendarDays
                className={`h-6 w-6 ${
                  path === "/account/SchedulePentest"
                    ? "text-blue-700"
                    : "text-gray-300 hover:bg-gray-700"
                }`}
              />

              <span className="ml-3 flex justify-center items-center gap-2">Schedule Pentest <LucideLock size={20}/></span>
            </Link>
          </li>
          <li>
            <Link
              href="/account/helpdesk" // Specify the route you want to link to
              className={`group flex items-center rounded-3xl p-2 text-base font-medium ${
                path === "/account/helpdesk"
                  ? "bg-blue-400/30 text-blue-700"
                  : "text-gray-400 dark:hover:bg-gray-700 hover:border-gray-400 border border-transparent rounded"
              }`}
              onClick={onToggleSidebar}
            >
              <svg
                className={`h-6 w-6 ${
                  path === "/account/helpdesk"
                    ? "text-blue-700"
                    : "text-gray-400 hover:bg-gray-700"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M7.824 5.937a1 1 0 0 0 .726-.312 2.042 2.042 0 0 1 2.835-.065 1 1 0 0 0 1.388-1.441 3.994 3.994 0 0 0-5.674.13 1 1 0 0 0 .725 1.688Z" />
                <path d="M17 7A7 7 0 1 0 3 7a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V7a5 5 0 1 1 10 0v7.083A2.92 2.92 0 0 1 12.083 17H12a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a1.993 1.993 0 0 0 1.722-1h.361a4.92 4.92 0 0 0 4.824-4H17a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3Z" />
              </svg>
              <span className="ml-3">Helpdesk</span>
            </Link>
          </li>
          <li>
            <Link
              href="/account/enhance" // Specify the route you want to link to
              className={`group flex items-center rounded-3xl p-2 text-base font-medium ${
                path === "/account/enhance"
                  ? "bg-blue-400/30 text-blue-700"
                  : "text-gray-400 dark:hover:bg-gray-700 hover:border-gray-400 border border-transparent rounded"
              }`}
              onClick={onToggleSidebar}
            >
              <svg
                className={`h-6 w-6 ${
                  path === "/account/enhance"
                    ? "text-blue-700"
                    : "text-gray-400 hover:bg-gray-700"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 19V.352A3.451 3.451 0 0 0 7.5 0a3.5 3.5 0 0 0-3.261 2.238A3.5 3.5 0 0 0 2.04 6.015a3.518 3.518 0 0 0-.766 1.128c-.042.1-.064.209-.1.313a3.34 3.34 0 0 0-.106.344 3.463 3.463 0 0 0 .02 1.468A4.016 4.016 0 0 0 .3 10.5l-.015.036a3.861 3.861 0 0 0-.216.779A3.968 3.968 0 0 0 0 12a4.032 4.032 0 0 0 .107.889 4 4 0 0 0 .2.659c.006.014.015.027.021.041a3.85 3.85 0 0 0 .417.727c.105.146.219.284.342.415.072.076.148.146.225.216.1.091.205.179.315.26.11.081.2.14.308.2.02.013.039.028.059.04v.053a3.506 3.506 0 0 0 3.03 3.469 3.426 3.426 0 0 0 4.154.577A.972.972 0 0 1 9 19Zm10.934-7.68a3.956 3.956 0 0 0-.215-.779l-.017-.038a4.016 4.016 0 0 0-.79-1.235 3.417 3.417 0 0 0 .017-1.468 3.387 3.387 0 0 0-.1-.333c-.034-.108-.057-.22-.1-.324a3.517 3.517 0 0 0-.766-1.128 3.5 3.5 0 0 0-2.202-3.777A3.5 3.5 0 0 0 12.5 0a3.451 3.451 0 0 0-1.5.352V19a.972.972 0 0 1-.184.546 3.426 3.426 0 0 0 4.154-.577A3.506 3.506 0 0 0 18 15.5v-.049c.02-.012.039-.027.059-.04.106-.064.208-.13.308-.2s.214-.169.315-.26c.077-.07.153-.14.225-.216a4.007 4.007 0 0 0 .459-.588c.115-.176.215-.361.3-.554.006-.014.015-.027.021-.041.087-.213.156-.434.205-.659.013-.057.024-.115.035-.173.046-.237.07-.478.073-.72a3.948 3.948 0 0 0-.066-.68Z" />
              </svg>
              <span className="ml-3">Enhance AI</span>
            </Link>
          </li>
          <li>
            <Link
              href="/account/report" // Specify the route you want to link to
              className={`group flex items-center rounded-3xl p-2 text-base font-medium ${
                path === "/account/report"
                  ? "bg-blue-400/30 text-blue-700"
                  : "text-gray-400 dark:hover:bg-gray-700 hover:border-gray-400 border border-transparent rounded"
              }`}
              onClick={onToggleSidebar}
            >
              <svg
                aria-hidden="true"
                className={`h-6 w-6 ${
                  path === "/account/report"
                    ? "text-blue-700"
                    : "text-gray-400 hover:bg-gray-700"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span className="ml-3">Report and Notifications</span>
            </Link>
          </li>
          <li>
            <Link
              href="/account/certificate" // Specify the route you want to link to
              className={`group flex items-center rounded-3xl p-2 text-base font-medium ${
                path === "/account/certificate"
                  ? "bg-blue-400/30 text-blue-700"
                  : "text-gray-400 dark:hover:bg-gray-700 hover:border-gray-400 border border-transparent rounded"
              }`}
              onClick={onToggleSidebar}
            >
              <svg
                className={`h-6 w-6 ${
                  path === "/account/certificate"
                    ? "text-blue-700"
                    : "text-gray-400 hover:bg-gray-700"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 21"
              >
                <path d="M6.167 9.833a3 3 0 0 1 1.946-2.809L13 5.191a3 3 0 0 1 2.107 0l.893.334V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h8.641A14.03 14.03 0 0 1 6.167 9.833Z" />
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Zm14.3 3.9-4.893-1.837a1.009 1.009 0 0 0-.7 0L8.815 8.9a1 1 0 0 0-.648.936 12.263 12.263 0 0 0 5.359 10.015 1 1 0 0 0 1.06 0 12.265 12.265 0 0 0 5.358-10.015A1 1 0 0 0 19.3 8.9Zm-5.236 8.866V9.068l3.866 1.45a10.241 10.241 0 0 1-3.871 7.245l.005.003Z" />
              </svg>
              <span className="ml-3">Certificate </span>
            </Link>
          </li>
          <li>
            <Link
              href="/account/appstore" // Specify the route you want to link to
              className={`group flex items-center rounded-3xl p-2 text-base font-medium ${
                path === "/account/appstore"
                  ? "bg-blue-400/30 text-blue-700"
                  : "text-gray-400 dark:hover:bg-gray-700 hover:border-gray-400 border border-transparent rounded"
              }`}
              onClick={onToggleSidebar}
            >
              <svg
                className={`h-6 w-6 ${
                  path === "/account/appstore"
                    ? "text-blue-700"
                    : "text-gray-400 hover:bg-gray-700"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
              </svg>
              <span className="ml-3">App Store</span>
            </Link>
          </li>
        </ul>

        {notification && (
          <ul className="mt-5 space-y-2 border-t  pt-5 border-gray-700">
            <div
              id="dropdown-cta"
              className="rounded-3xl bg-blue-400/30 p-4"
              role="alert"
            >
              <div className="mb-3 flex items-center">
                <span className="me-2 rounded-md  px-2.5 py-0.5 text-sm font-semibold text-orange-800 bg-orange-200 ">
                  Coming soon
                </span>

                <button
                  type="button"
                  className="-mx-1.5 -my-1.5 ms-auto inline-flex h-6 w-6 items-center justify-center rounded-3xl  p-1 focus:ring-2 focus:ring-blue-400 bg-blue-900 text-white hover:bg-blue-800"
                  // data-dismiss-target="#dropdown-cta"
                  onClick={() => {
                    setnotification(false);
                  }}
                  aria-label="Close"
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="h-2.5 w-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>
              </div>
              <p className="mb-3 text-sm text-blue-700">
                VulnFix Assistant Coming Soon!
              </p>
              <Link
                className="text-sm font-medium text-blue-700 underline-offset-8 hover:underline"
                href="/pricing"
              >
                Upgrade Now to experience first
              </Link>
            </div>
          </ul>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
