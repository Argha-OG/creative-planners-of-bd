import React from 'react'

const Services = () => {
  return (
    <div className="lg:grid lg:h-auto lg:place-content-center">
      <section className="">
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-prose text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              All
              <strong className="text-red-500"> Services </strong>
              Package
            </h1>

            <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
              We offer a complete, integrated suite of services across digital
              marketing, event management, and creative design, providing
              everything your brand needs from a single partner.
            </p>
          </div>

          <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
              {/* --------------------- CARD 1: STARTER (Digital Launch) --------------------- */}
              <div className="divide-y divide-red-500 rounded-2xl border border-red-500 hover:shadow-xl hover:shadow-red-500 hover:border-2 transition">
                <div className="p-6 sm:px-8">
                  <h2 className="text-lg font-bold text-gray-900">
                    Starter
                    <span className="sr-only">Digital Launch</span>
                  </h2>
                  <h2 className="text-lg font-medium text-gray-900">
                    <span className="mt-2 text-red-500!">Digital Launch</span>
                  </h2>

                  <p className="mt-2 text-gray-700">
                    New brands or those needing a professional digital
                    foundation to launch their presence online.
                  </p>

                  <p className="mt-2 sm:mt-4">
                    <strong className="text-3xl font-bold text-red-500 sm:text-4xl">
                      {" "}
                      1,650 RM{" "}
                    </strong>
                    <span className="text-sm font-medium text-gray-700">
                      /One-Time Setup
                    </span>
                  </p>

                  <a
                    className="mt-4 block rounded-sm border border-red-500 bg-red-500 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-red-500 focus:ring-3 focus:outline-hidden sm:mt-6"
                    href="#"
                  >
                    Get Started
                  </a>
                </div>

                <div className="p-6 sm:px-8">
                  <p className="text-lg font-medium text-gray-900 sm:text-xl">
                    What's included:
                  </p>

                  <ul className="mt-2 space-y-2 sm:mt-4">
                    {/* INCLUDED FEATURES: CHECK MARK (Red) */}
                    <li className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 text-red-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-gray-700">
                        {" "}
                        Professional Logo & Cover Design{" "}
                      </span>
                    </li>

                    <li className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 text-red-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-gray-700">
                        {" "}
                        Website Setup (Initial Structure){" "}
                      </span>
                    </li>

                    <li className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 text-red-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-gray-700">
                        {" "}
                        FB, TikTok & Instagram Page Setup{" "}
                      </span>
                    </li>

                    <li className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 text-red-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-gray-700">
                        {" "}
                        Content Creation & Promotional Video{" "}
                      </span>
                    </li>

                    <li className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 text-red-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-gray-700">
                        {" "}
                        Initial Ad Campaign Management{" "}
                      </span>
                    </li>

                    {/* NOT INCLUDED FEATURES: X-MARK (Gray) */}
                    <li className="flex items-center gap-1 opacity-60">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      <span className="text-gray-700">
                        {" "}
                        Dedicated Monthly Content Strategy{" "}
                      </span>
                    </li>

                    <li className="flex items-center gap-1 opacity-60">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      <span className="text-gray-700">
                        {" "}
                        24/7 Moderator Team Support{" "}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* --------------------- CARD 2: PRO (Managed Growth) --------------------- */}
              <div className="divide-y divide-red-500 rounded-2xl border border-red-500 hover:shadow-xl hover:shadow-red-500 hover:border-2 transition">
                <div className="p-6 sm:px-8">
                  <h2 className="text-lg font-bold text-gray-900">
                    Pro
                    <span className="sr-only">Managed Growth</span>
                  </h2>
                  <h2 className="text-lg font-medium text-gray-900">
                    <span className="mt-2 text-red-500!">Managed Growth</span>
                  </h2>

                  <p className="mt-2 text-gray-700">
                    Businesses needing consistent content, reliable engagement,
                    and measurable results.
                  </p>

                  <p className="mt-2 sm:mt-4">
                    <strong className="text-3xl font-bold text-red-500 sm:text-4xl">
                      {" "}
                      2,350 RM{" "}
                    </strong>
                    <span className="text-sm font-medium text-gray-700">
                      /Month
                    </span>
                  </p>

                  <a
                    className="mt-4 block rounded-sm border border-red-500 bg-red-500 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-red-500 focus:ring-3 focus:outline-hidden sm:mt-6"
                    href="#"
                  >
                    Get Started
                  </a>
                </div>

                <div className="p-6 sm:px-8">
                  <p className="text-lg font-medium text-gray-900 sm:text-xl">
                    What's included:
                  </p>

                  <ul className="mt-2 space-y-2 sm:mt-4">
                    {/* INCLUDED FEATURES: CHECK MARK (Red) */}
                    <li className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 text-red-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-gray-700">
                        {" "}
                        <strong>25 Days of Active Posting</strong> per Month{" "}
                      </span>
                    </li>

                    <li className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 text-red-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-gray-700">
                        {" "}
                        <strong>25 Custom Poster Designs</strong> & 5
                        Promotional Videos{" "}
                      </span>
                    </li>

                    <li className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 text-red-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-gray-700">
                        {" "}
                        Salary Based Moderator Team Service{" "}
                      </span>
                    </li>

                    <li className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 text-red-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-gray-700">
                        {" "}
                        Audience Research & Engagement Strategy{" "}
                      </span>
                    </li>

                    <li className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 text-red-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-gray-700">
                        {" "}
                        Weekly Updates & Reports{" "}
                      </span>
                    </li>

                    {/* NOT INCLUDED: X-MARK (Gray) */}
                    <li className="flex items-center gap-1 opacity-60">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      <span className="text-gray-700">
                        {" "}
                        Unlimited Ad Campaign & Boosting{" "}
                      </span>
                    </li>

                    <li className="flex items-center gap-1 opacity-60">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      <span className="text-gray-700">
                        {" "}
                        Event Management Access{" "}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* --------------------- CARD 3: ENTERPRISE (Full Ecosystem) --------------------- */}
              <div className="divide-y divide-red-500 rounded-2xl border border-red-500 hover:shadow-xl hover:shadow-red-500 hover:border-2 transition">
                <div className="p-6 sm:px-8">
                  <h2 className="text-lg font-bold text-gray-900">
                    Enterprise
                    <span className="sr-only">Full Ecosystem</span>
                  </h2>
                  <h2 className="text-lg font-medium text-gray-900">
                    <span className="mt-2 text-red-500!">Full Ecosystem</span>
                  </h2>

                  <p className="mt-2 text-gray-700">
                    Brands aiming for aggressive growth, maximum visibility, and
                    full project/event support.
                  </p>

                  <p className="mt-2 sm:mt-4">
                    <strong className="text-3xl font-bold text-red-500 sm:text-4xl">
                      {" "}
                      4,700 RM+{" "}
                    </strong>
                    <span className="text-sm font-medium text-gray-700">
                      /Month
                    </span>
                  </p>

                  <a
                    className="mt-4 block rounded-sm border border-red-500 bg-red-500 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-red-500 focus:ring-3 focus:outline-hidden sm:mt-6"
                    href="#"
                  >
                    Get Started
                  </a>
                </div>

                <div className="p-6 sm:px-8">
                  <p className="text-lg font-medium text-gray-900 sm:text-xl">
                    What's included:
                  </p>

                  <ul className="mt-2 space-y-2 sm:mt-4">
                    {/* INCLUDED FEATURES: CHECK MARK (Red) */}
                    <li className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 text-red-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-gray-700">
                        {" "}
                        <strong>
                          30 Days of Full Social Media Coverage
                        </strong>{" "}
                      </span>
                    </li>

                    <li className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 text-red-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-gray-700">
                        {" "}
                        <strong>Unlimited Poster & Video Posting</strong>{" "}
                      </span>
                    </li>

                    <li className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 text-red-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-gray-700">
                        {" "}
                        Viral Content Creation & Sales Strategy{" "}
                      </span>
                    </li>

                    <li className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 text-red-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-gray-700">
                        {" "}
                        Full Page Moderation (FB, IG, YT, Tik Tok){" "}
                      </span>
                    </li>

                    <li className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 text-red-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-gray-700">
                        {" "}
                        2 Live Sessions per Month (with Malaysian Model if
                        needed){" "}
                      </span>
                    </li>

                    <li className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 text-red-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-gray-700">
                        {" "}
                        Weekly & Monthly Performance Reports{" "}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-4xl lg:text-5xl font-bold lg:font-bold text-red-500 dark:text-red-500! md:text-3xl">
              Unlock Exclusive Growth Strategies
            </h1>

            <p className="hidden text-gray-500 sm:mt-4 sm:block">
              Get CPB's expert insights on digital trends, event planning
              mastery, and market growth delivered straight to your inbox.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-xl">
            <form action="#" className="sm:flex sm:gap-4">
              <div className="sm:flex-1">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-md border-red-200 bg-white p-3 text-gray-700 shadow-md shadow-red-500 transition focus:border-red-500 focus:ring-3 focus:ring-red-500 focus:outline-hidden"
                />
              </div>

              <button
                type="submit"
                className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-3 text-white transition focus:ring-3 focus:ring-red-500 focus:outline-hidden sm:mt-0 sm:w-auto"
              >
                <span className="text-sm font-medium"> Sign Up </span>

                <svg
                  className="size-5 shadow-sm rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services