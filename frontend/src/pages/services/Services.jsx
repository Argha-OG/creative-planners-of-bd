import React from 'react'
import ServiceCardGrid from '../../components/Service/Services';

const Services = () => {

  const headline = "Flawless Execution: Event Planning & Professional Staffing";
  const tagline =
    "From corporate launches to grand celebrations, we ensure every detail is handled with precision and professional support.";
  const hoverText =
    "We offer full-scale **Event Planning & Management**, including **Corporate Video Production** and **Professional Staff Support**. Our operations team guarantees seamless execution, allowing you to focus on your guests and your brand's presence. Trust CPB to turn your vision into a successful, memorable reality.";

  // Placeholder Image URL adjusted for a professional event setting
  const printImage =
    "https://cdn.prod.website-files.com/63a239cf8a90f75cb35a00fd/6883d3a68c2641b28af61e8c_what-is-event-organising.webp";

  return (
    <div className="lg:grid lg:place-content-center">
      <div className="flex flex-col justify-center items-center pt-16">
        <section className="lg:grid  lg:place-content-center overflow-hidden w-4/5 border-4 border-red-500 rounded-3xl">
          <a
            href="https://wa.me/601121404200?text=I%20need%20a%20quote%20for%20the%20Event%20Planning%20&%20Management%20service."
            target='_blank'
            className="group relative block"
          >
            <img
              alt="Creative Printing and Physical Asset Design"
              src={printImage} // Placeholder image URL
              // NOTE: className is used here instead of class as this is JSX
              className="absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-95 rounded-xl"
            />

            <div className="relative p-10 sm:p-6 lg:p-8">
              {/* PRIMARY HEADLINE */}
              <p
                className="font-medium tracking-widest text-red-500! uppercase text-2xl"
                style={{ textShadow: "2px 2px 4px #000000" }}
              >
                {headline}
              </p>

              {/* TAGLINE */}
              <p
                className="text-5xl font-bold text-white sm:text-2xl max-w-2xl"
                style={{ textShadow: "1px 1px 3px #000000" }}
              >
                {tagline}
              </p>

              {/* HOVER CONTENT */}
              <div className="mt-28 sm:mt-40 lg:mt-44">
                <div className="translate-y-8 transform opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 bg-black/70 p-4 rounded-lg">
                  <p className="text-sm text-white">{hoverText}</p>
                </div>
              </div>
            </div>
          </a>
        </section>
      </div>

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
              <div className="divide-y bg-base-300 divide-red-500 rounded-2xl border border-red-500 hover:shadow-xl hover:shadow-red-500 hover:border-2 transition">
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
                    href="https://wa.me/601121404200?text=I%20am%20interested%20in%20the%20Digital%20Launch%20Package.%20I%20need%20a%20new%20Logo%2C%20Website%2C%20and%20Social%20Setup.%0A%0AClient%20Name%3A%0AEmail%3A"
                    target="_blank"
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
              <div className="divide-y bg-base-300 divide-red-500 rounded-2xl border border-red-500 hover:shadow-xl hover:shadow-red-500 hover:border-2 transition">
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
                    href="https://wa.me/601121404200?text=I%20would%20like%20details%20on%20your%20Monthly%20Marketing%20Management%20Packages.%20Please%20send%20me%20info%20on%20the%20Pro%20Managed%20Growth%20tier.%0A%0AClient%20Name%3A%0ACompany%3A"
                    target="_blank"
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
              <div className="divide-y bg-base-300 divide-red-500 rounded-2xl border border-red-500 hover:shadow-xl hover:shadow-red-500 hover:border-2 transition">
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
                    href="https://wa.me/601121404200?text=I%20need%20a%20quote%20for%20Creative%20Services%2FEvent%20Management.%20I%20am%20looking%20for%20%5BBrochures%2FVideo%2FEvent%5D.%0A%0APlease%20advise%20on%20next%20steps%3A"
                    target="_blank"
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
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-10 sm:px-6 sm:pb-24 lg:px-8 lg:pb-32">
          <div className="mx-auto max-w-prose text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Our
              <strong className="text-red-500"> Services </strong>
              Ecosystem
            </h1>

            <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
              Build your custom solution by choosing specific services that meet
              your exact brand needs.
            </p>
          </div>
          <ServiceCardGrid />
        </div>
      </section>

      <section className="">
        <div className="p-8 md:p-12 lg:px-16 lg:pb-24">
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