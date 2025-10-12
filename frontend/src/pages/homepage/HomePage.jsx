import React from "react";
import HeroImg from './../../assets/herox.jpg';

const HomePage = () => {
  return (
    <div className="">
      <section className="lg:grid lg:h-screen lg:place-content-center overflow-hidden">
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