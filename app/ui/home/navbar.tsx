"use client";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import ProfileDropdown from "./profileDropdown";
import NavLinks from "./nav-links";
import Link from "next/link";
import { ThemeSwitch } from "./ThemeSwitch";
import Login from "./login";

const navigation = [
  { name: "Dashboard", href: "/dashboard", current: true },

  { name: "How it works", href: "#/how-it-works", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-4 dark:bg-gray-800 dark:border-gray-700">
      <nav
        className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <a
            className="flex-none text-xl font-semibold dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="/"
            aria-label="Brand"
          >
            Brand
          </a>
          <div className="sm:hidden">
            <button
              id="navbar-collapse-basic"
              type="button"
              className="hs-collapse-toggle w-9 h-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              data-hs-collapse="#navbar-collapse-basic-content"
              aria-controls="navbar-collapse-basic-content"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6"></line>
                <line x1="3" x2="21" y1="12" y2="12"></line>
                <line x1="3" x2="21" y1="18" y2="18"></line>
              </svg>
              <svg
                className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-basic-content"
          className="hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div
            data-hs-scrollspy="#scrollspy"
            className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5 [--scrollspy-offset:220] md:[--scrollspy-offset:70]"
          >
            <NavLinks />
            <ThemeSwitch />
            {/* Profilo loggato */}
            <ProfileDropdown />
            {/* LOGIN link */}
            <a
              href="/login"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Sign in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </nav>
    </header>

    // <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700">
    //   <nav
    //     className="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
    //     aria-label="Global"
    //   >
    //     <div className="flex items-center justify-between">
    //       <a
    //         className="flex-none text-xl font-semibold dark:text-white"
    //         href="/"
    //         aria-label="Brand"
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           height="16"
    //           width="18"
    //           viewBox="0 0 576 512"
    //         >
    //           <path d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32V448c0 35.3 28.7 64 64 64H448.5c35.5 0 64.2-28.8 64-64.3l-.7-160.2h32zM256 208c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H320v48c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V320H208c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h48V208z" />
    //         </svg>
    //       </a>
    //       <div className="sm:hidden">
    //         <button
    //           type="button"
    //           className="hs-collapse-toggle w-9 h-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
    //           data-hs-collapse="#navbar-collapse-with-animation"
    //           aria-controls="navbar-collapse-with-animation"
    //           aria-label="Toggle navigation"
    //         >
    //           <svg
    //             className="hs-collapse-open:hidden w-4 h-4"
    //             width="16"
    //             height="16"
    //             fill="currentColor"
    //             viewBox="0 0 16 16"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
    //             />
    //           </svg>
    //           <svg
    //             className="hs-collapse-open:block flex-shrink-0 hidden w-4 h-4"
    //             width="16"
    //             height="16"
    //             fill="currentColor"
    //             viewBox="0 0 16 16"
    //           >
    //             <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
    //           </svg>
    //         </button>
    //       </div>
    //     </div>
    //     <div
    //       id="navbar-collapse-with-animation"
    //       className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
    //     >
    //       <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
    //         <NavLinks />
    //         <ThemeSwitch />
    //         <div className="flex gap-x-2">
    //           <Login />
    //           <Link href="/signup">Sign up</Link>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    // </header>
  );
}
