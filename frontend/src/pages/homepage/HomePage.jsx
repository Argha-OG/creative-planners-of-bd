import React from "react";
import HeroImg from './../../assets/herox.jpg';

const HomePage = () => {
  return (
    <div className="">
      <section className="lg:grid lg:h-screen lg:place-content-center overflow-hidden">
        <div
          role="alert"
          className="alert alert-vertical sm:alert-horizontal mt-14 text-red-500 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info h-6 w-6 shrink-0 text-red-500 dark:text-red-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <div>
            <p className="font-bold text-xl text-red-500 dark:text-red-600!">
              We Are Now In Malaysia
            </p>
          </div>
          <button className="btn btn-sm">Explore Our services</button>
        </div>

        <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32 ">
          <div className="max-w-prose text-left">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl ">
              We Grow Your
              <strong className="text-red-600"> Business </strong>
              With Smart Marketing Solutions
            </h1>

            <p className="mt-4 text-pretty text-gray-700 text-base sm:text-lg/relaxed">
              Full service Marketing With Business Tech Developer Experts &
              Event Management agency dedicated to complete brand transformation
              and measurable results now serving clients across Bangladesh and
              Malaysia.
            </p>

            <div className="mt-4 flex gap-4 sm:mt-6">
              <a
                className="inline-block rounded border border-red-600 bg-red-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-red-700"
                href="#"
              >
                START YOUR DIGITAL GROWTH
              </a>

              <a
                className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-black!"
                href="#"
              >
                GET FREE CONSULTATION
              </a>
            </div>
          </div>

          <img className=" w-full h-auto rounded-full" src={HeroImg} alt="" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;