import React from "react";
import HeroImg from "./../../assets/herox.jpg";
import TeamCaro from "../../components/carousel/TeamCaro";
import LogoCaro from "../../components/carousel/LogoCaro";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <div className="">
      <section className="lg:grid lg:h-screen lg:max-w-full lg:place-content-center overflow-hidden sm:max-w-full">
        <div
          className="mx-auto w-screen px-4 py-16 sm:px-6 sm:py-24 
                flex flex-col-reverse md:grid md:grid-cols-2 md:items-center md:gap-4 
                lg:px-8 lg:py-32 justify-items-center"
        >
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

            <div className="mt-4 flex gap-4 my-6 sm:my-6">
              <a
                className="inline-block rounded-full border border-red-600 bg-red-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-red-700"
                href="https://wa.me/601121404200?text=Hello%20CPB,%20I%20saw%20your%20website%20and%20I%20would%20like%20a%20free%20consultation%20on%20your%20services.%0A%0AClient%20Name:%0AInterested%20In:"
                target="_blank"
              >
                Start Growing
              </a>

              <a
                className="inline-block rounded-full border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-black!"
                href="https://wa.me/601139638206?text=Hello%20CPB,%20I%20saw%20your%20website%20and%20I%20would%20like%20a%20free%20consultation%20on%20your%20services.%0A%0AClient%20Name:%0AInterested%20In:"
                target="_blank"
              >
                Free Consultation
              </a>
            </div>
          </div>

          <img
            className=" w-full h-auto rounded-full sm:mt-2 sm:mb-3"
            src={HeroImg}
            alt=""
          />
        </div>
      </section>
      <section className="flex flex-col justify-center items-center">
        <div className="w-4/5">
          <LogoCaro />
        </div>
      </section>
      <section className=" lg:grid lg:h-screen lg:place-content-center">
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-prose text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              The CPB Blueprint <br />
              for
              <strong className="text-red-500"> Growth </strong>
            </h1>

            <p className="mt-4 mb-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
              Your all-in-one path to market dominance and measurable ROI.
            </p>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4 sm:mt-6 w-full">
            <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg  dark:shadow-sm dark:shadow-red-600">
              <img
                alt=""
                src="https://i.pinimg.com/736x/82/02/f6/8202f64a040f6f1caf3cbf93f04e044a.jpg"
                className="h-56 w-full object-cover"
              />

              <div className="p-4 sm:p-6">
                <Link to="/services#">
                  <h3 className="mt-0.5 text-xl font-bold text-black">
                    Digital Business Setup
                  </h3>
                </Link>

                <p className="mt-2 text-sm/relaxed text-gray-500">
                  We handle your full digital launch: Website, Logo, and Social
                  Media activation. We provide Content Creation and Ad
                  Management for instant visibility, with advanced options
                  including Unlimited Ad Boosting and full platform integration.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg dark:shadow-sm dark:shadow-red-600">
              <img
                alt=""
                src="https://i.pinimg.com/736x/30/92/cd/3092cd1dbe7bb9fcae39fd06ad06bc93.jpg"
                className="h-56 w-full object-cover"
              />

              <div className=" p-4 sm:p-6">
                <Link to="/services#">
                  <h3 className="mt-0.5 text-xl font-bold text-black">
                    Monthly Marketing Management
                  </h3>
                </Link>

                <p className="mt-2 text-sm/relaxed text-gray-500">
                  Delegate your strategy to our experts. We ensure high-volume
                  content—25 days of posting, custom designs, and videos—backed
                  by Audience Research. We provide Moderator Support and
                  continuously manage all Ad Campaigns.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg dark:shadow-sm dark:shadow-red-600">
              <img
                alt=""
                src="https://i.pinimg.com/1200x/63/74/84/637484376e86a58a4f24ba3019f558b7.jpg"
                className="h-56 w-full object-cover"
              />

              <div className=" p-4 sm:p-6">
                <Link to="/services#">
                  <h3 className="mt-0.5 text-xl font-bold text-black">
                    Creative, Printing & Event Services
                  </h3>
                </Link>

                <p className="mt-2 text-sm/relaxed text-gray-500">
                  We manage all physical branding and live events. This includes
                  end-to-end Printing for essentials like Brochures and
                  Signboards. We also offer full Event Planning & Management,
                  complete with staffing and Corporate Video Production.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className=" lg:grid lg:h-screen lg:place-content-center">
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-prose text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Why Partner with
              <strong className="text-red-600"> CPB </strong>?
            </h1>

            <p className="mt-4 mb-8 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
              We don't just manage campaigns; we offer a complete business
              growth ecosystem backed by strategy, transparency, and two decades
              of collective experience.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-center items-center">
            <div className="chooseus bg-red-50 h-74 w-74 rounded-full border-8 border-red-600 hover:shadow-md hover:shadow-red-600 hover:z-1 transition duration-300">
              <div className="h-full w-full align-middle text-center flex flex-col justify-center items-center">
                <svg
                  className="h-10 w-10 mb-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke="#CCCCCC"
                    stroke-width="0.8640000000000001"
                  >
                    {" "}
                    <path
                      d="M11.5283 1.5999C11.7686 1.29437 12.2314 1.29437 12.4717 1.5999L14.2805 3.90051C14.4309 4.09173 14.6818 4.17325 14.9158 4.10693L17.7314 3.3089C18.1054 3.20292 18.4799 3.475 18.4946 3.86338L18.6057 6.78783C18.615 7.03089 18.77 7.24433 18.9984 7.32823L21.7453 8.33761C22.1101 8.47166 22.2532 8.91189 22.0368 9.23478L20.4078 11.666C20.2724 11.8681 20.2724 12.1319 20.4078 12.334L22.0368 14.7652C22.2532 15.0881 22.1101 15.5283 21.7453 15.6624L18.9984 16.6718C18.77 16.7557 18.615 16.9691 18.6057 17.2122L18.4946 20.1366C18.4799 20.525 18.1054 20.7971 17.7314 20.6911L14.9158 19.8931C14.6818 19.8267 14.4309 19.9083 14.2805 20.0995L12.4717 22.4001C12.2314 22.7056 11.7686 22.7056 11.5283 22.4001L9.71949 20.0995C9.56915 19.9083 9.31823 19.8267 9.08421 19.8931L6.26856 20.6911C5.89463 20.7971 5.52014 20.525 5.50539 20.1366L5.39427 17.2122C5.38503 16.9691 5.22996 16.7557 5.00164 16.6718L2.25467 15.6624C1.88986 15.5283 1.74682 15.0881 1.96317 14.7652L3.59221 12.334C3.72761 12.1319 3.72761 11.8681 3.59221 11.666L1.96317 9.23478C1.74682 8.91189 1.88986 8.47166 2.25467 8.33761L5.00165 7.32823C5.22996 7.24433 5.38503 7.03089 5.39427 6.78783L5.50539 3.86338C5.52014 3.475 5.89463 3.20292 6.26857 3.3089L9.08421 4.10693C9.31823 4.17325 9.56915 4.09173 9.71949 3.90051L11.5283 1.5999Z"
                      stroke="#ed0202"
                      stroke-width="1.5"
                    ></path>{" "}
                    <path
                      d="M9 12L11 14L15 10"
                      stroke="#ed0202"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M11.5283 1.5999C11.7686 1.29437 12.2314 1.29437 12.4717 1.5999L14.2805 3.90051C14.4309 4.09173 14.6818 4.17325 14.9158 4.10693L17.7314 3.3089C18.1054 3.20292 18.4799 3.475 18.4946 3.86338L18.6057 6.78783C18.615 7.03089 18.77 7.24433 18.9984 7.32823L21.7453 8.33761C22.1101 8.47166 22.2532 8.91189 22.0368 9.23478L20.4078 11.666C20.2724 11.8681 20.2724 12.1319 20.4078 12.334L22.0368 14.7652C22.2532 15.0881 22.1101 15.5283 21.7453 15.6624L18.9984 16.6718C18.77 16.7557 18.615 16.9691 18.6057 17.2122L18.4946 20.1366C18.4799 20.525 18.1054 20.7971 17.7314 20.6911L14.9158 19.8931C14.6818 19.8267 14.4309 19.9083 14.2805 20.0995L12.4717 22.4001C12.2314 22.7056 11.7686 22.7056 11.5283 22.4001L9.71949 20.0995C9.56915 19.9083 9.31823 19.8267 9.08421 19.8931L6.26856 20.6911C5.89463 20.7971 5.52014 20.525 5.50539 20.1366L5.39427 17.2122C5.38503 16.9691 5.22996 16.7557 5.00164 16.6718L2.25467 15.6624C1.88986 15.5283 1.74682 15.0881 1.96317 14.7652L3.59221 12.334C3.72761 12.1319 3.72761 11.8681 3.59221 11.666L1.96317 9.23478C1.74682 8.91189 1.88986 8.47166 2.25467 8.33761L5.00165 7.32823C5.22996 7.24433 5.38503 7.03089 5.39427 6.78783L5.50539 3.86338C5.52014 3.475 5.89463 3.20292 6.26857 3.3089L9.08421 4.10693C9.31823 4.17325 9.56915 4.09173 9.71949 3.90051L11.5283 1.5999Z"
                      stroke="#ed0202"
                      stroke-width="1.5"
                    ></path>{" "}
                    <path
                      d="M9 12L11 14L15 10"
                      stroke="#ed0202"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
                <div className="w-3/5">
                  <h1 className="font-bold text-2xl">Complete Branding</h1>
                  <p>
                    Get all Digital & Offline Solutions from social media setup
                    to events from one trusted partner.
                  </p>
                </div>
              </div>
            </div>
            <div className="chooseus bg-red-50 h-74 w-74 rounded-full border-8 border-red-600 hover:shadow-md hover:shadow-red-600 hover:z-1 transition duration-300 sm:ml-[-46px]">
              <div className="h-full w-full align-middle text-center flex flex-col justify-center items-center">
                <svg
                  className="h-10 w-10 mb-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke="#CCCCCC"
                    stroke-width="0.8640000000000001"
                  >
                    {" "}
                    <path
                      d="M11.5283 1.5999C11.7686 1.29437 12.2314 1.29437 12.4717 1.5999L14.2805 3.90051C14.4309 4.09173 14.6818 4.17325 14.9158 4.10693L17.7314 3.3089C18.1054 3.20292 18.4799 3.475 18.4946 3.86338L18.6057 6.78783C18.615 7.03089 18.77 7.24433 18.9984 7.32823L21.7453 8.33761C22.1101 8.47166 22.2532 8.91189 22.0368 9.23478L20.4078 11.666C20.2724 11.8681 20.2724 12.1319 20.4078 12.334L22.0368 14.7652C22.2532 15.0881 22.1101 15.5283 21.7453 15.6624L18.9984 16.6718C18.77 16.7557 18.615 16.9691 18.6057 17.2122L18.4946 20.1366C18.4799 20.525 18.1054 20.7971 17.7314 20.6911L14.9158 19.8931C14.6818 19.8267 14.4309 19.9083 14.2805 20.0995L12.4717 22.4001C12.2314 22.7056 11.7686 22.7056 11.5283 22.4001L9.71949 20.0995C9.56915 19.9083 9.31823 19.8267 9.08421 19.8931L6.26856 20.6911C5.89463 20.7971 5.52014 20.525 5.50539 20.1366L5.39427 17.2122C5.38503 16.9691 5.22996 16.7557 5.00164 16.6718L2.25467 15.6624C1.88986 15.5283 1.74682 15.0881 1.96317 14.7652L3.59221 12.334C3.72761 12.1319 3.72761 11.8681 3.59221 11.666L1.96317 9.23478C1.74682 8.91189 1.88986 8.47166 2.25467 8.33761L5.00165 7.32823C5.22996 7.24433 5.38503 7.03089 5.39427 6.78783L5.50539 3.86338C5.52014 3.475 5.89463 3.20292 6.26857 3.3089L9.08421 4.10693C9.31823 4.17325 9.56915 4.09173 9.71949 3.90051L11.5283 1.5999Z"
                      stroke="#ed0202"
                      stroke-width="1.5"
                    ></path>{" "}
                    <path
                      d="M9 12L11 14L15 10"
                      stroke="#ed0202"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M11.5283 1.5999C11.7686 1.29437 12.2314 1.29437 12.4717 1.5999L14.2805 3.90051C14.4309 4.09173 14.6818 4.17325 14.9158 4.10693L17.7314 3.3089C18.1054 3.20292 18.4799 3.475 18.4946 3.86338L18.6057 6.78783C18.615 7.03089 18.77 7.24433 18.9984 7.32823L21.7453 8.33761C22.1101 8.47166 22.2532 8.91189 22.0368 9.23478L20.4078 11.666C20.2724 11.8681 20.2724 12.1319 20.4078 12.334L22.0368 14.7652C22.2532 15.0881 22.1101 15.5283 21.7453 15.6624L18.9984 16.6718C18.77 16.7557 18.615 16.9691 18.6057 17.2122L18.4946 20.1366C18.4799 20.525 18.1054 20.7971 17.7314 20.6911L14.9158 19.8931C14.6818 19.8267 14.4309 19.9083 14.2805 20.0995L12.4717 22.4001C12.2314 22.7056 11.7686 22.7056 11.5283 22.4001L9.71949 20.0995C9.56915 19.9083 9.31823 19.8267 9.08421 19.8931L6.26856 20.6911C5.89463 20.7971 5.52014 20.525 5.50539 20.1366L5.39427 17.2122C5.38503 16.9691 5.22996 16.7557 5.00164 16.6718L2.25467 15.6624C1.88986 15.5283 1.74682 15.0881 1.96317 14.7652L3.59221 12.334C3.72761 12.1319 3.72761 11.8681 3.59221 11.666L1.96317 9.23478C1.74682 8.91189 1.88986 8.47166 2.25467 8.33761L5.00165 7.32823C5.22996 7.24433 5.38503 7.03089 5.39427 6.78783L5.50539 3.86338C5.52014 3.475 5.89463 3.20292 6.26857 3.3089L9.08421 4.10693C9.31823 4.17325 9.56915 4.09173 9.71949 3.90051L11.5283 1.5999Z"
                      stroke="#ed0202"
                      stroke-width="1.5"
                    ></path>{" "}
                    <path
                      d="M9 12L11 14L15 10"
                      stroke="#ed0202"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
                <div className="w-3/5">
                  <h1 className="font-bold text-2xl">Expert Strategy</h1>
                  <p>
                    Rely on 20+ Professional Advisors and specialized audience
                    research for guaranteed results.
                  </p>
                </div>
              </div>
            </div>
            <div className="chooseus bg-red-50 h-74 w-74 rounded-full border-8 border-red-600 hover:shadow-md hover:shadow-red-600 hover:z-1 transition duration-300 sm:ml-[-46px]">
              <div className="h-full w-full align-middle text-center flex flex-col justify-center items-center">
                <svg
                  className="h-10 w-10 mb-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke="#CCCCCC"
                    stroke-width="0.8640000000000001"
                  >
                    {" "}
                    <path
                      d="M11.5283 1.5999C11.7686 1.29437 12.2314 1.29437 12.4717 1.5999L14.2805 3.90051C14.4309 4.09173 14.6818 4.17325 14.9158 4.10693L17.7314 3.3089C18.1054 3.20292 18.4799 3.475 18.4946 3.86338L18.6057 6.78783C18.615 7.03089 18.77 7.24433 18.9984 7.32823L21.7453 8.33761C22.1101 8.47166 22.2532 8.91189 22.0368 9.23478L20.4078 11.666C20.2724 11.8681 20.2724 12.1319 20.4078 12.334L22.0368 14.7652C22.2532 15.0881 22.1101 15.5283 21.7453 15.6624L18.9984 16.6718C18.77 16.7557 18.615 16.9691 18.6057 17.2122L18.4946 20.1366C18.4799 20.525 18.1054 20.7971 17.7314 20.6911L14.9158 19.8931C14.6818 19.8267 14.4309 19.9083 14.2805 20.0995L12.4717 22.4001C12.2314 22.7056 11.7686 22.7056 11.5283 22.4001L9.71949 20.0995C9.56915 19.9083 9.31823 19.8267 9.08421 19.8931L6.26856 20.6911C5.89463 20.7971 5.52014 20.525 5.50539 20.1366L5.39427 17.2122C5.38503 16.9691 5.22996 16.7557 5.00164 16.6718L2.25467 15.6624C1.88986 15.5283 1.74682 15.0881 1.96317 14.7652L3.59221 12.334C3.72761 12.1319 3.72761 11.8681 3.59221 11.666L1.96317 9.23478C1.74682 8.91189 1.88986 8.47166 2.25467 8.33761L5.00165 7.32823C5.22996 7.24433 5.38503 7.03089 5.39427 6.78783L5.50539 3.86338C5.52014 3.475 5.89463 3.20292 6.26857 3.3089L9.08421 4.10693C9.31823 4.17325 9.56915 4.09173 9.71949 3.90051L11.5283 1.5999Z"
                      stroke="#ed0202"
                      stroke-width="1.5"
                    ></path>{" "}
                    <path
                      d="M9 12L11 14L15 10"
                      stroke="#ed0202"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M11.5283 1.5999C11.7686 1.29437 12.2314 1.29437 12.4717 1.5999L14.2805 3.90051C14.4309 4.09173 14.6818 4.17325 14.9158 4.10693L17.7314 3.3089C18.1054 3.20292 18.4799 3.475 18.4946 3.86338L18.6057 6.78783C18.615 7.03089 18.77 7.24433 18.9984 7.32823L21.7453 8.33761C22.1101 8.47166 22.2532 8.91189 22.0368 9.23478L20.4078 11.666C20.2724 11.8681 20.2724 12.1319 20.4078 12.334L22.0368 14.7652C22.2532 15.0881 22.1101 15.5283 21.7453 15.6624L18.9984 16.6718C18.77 16.7557 18.615 16.9691 18.6057 17.2122L18.4946 20.1366C18.4799 20.525 18.1054 20.7971 17.7314 20.6911L14.9158 19.8931C14.6818 19.8267 14.4309 19.9083 14.2805 20.0995L12.4717 22.4001C12.2314 22.7056 11.7686 22.7056 11.5283 22.4001L9.71949 20.0995C9.56915 19.9083 9.31823 19.8267 9.08421 19.8931L6.26856 20.6911C5.89463 20.7971 5.52014 20.525 5.50539 20.1366L5.39427 17.2122C5.38503 16.9691 5.22996 16.7557 5.00164 16.6718L2.25467 15.6624C1.88986 15.5283 1.74682 15.0881 1.96317 14.7652L3.59221 12.334C3.72761 12.1319 3.72761 11.8681 3.59221 11.666L1.96317 9.23478C1.74682 8.91189 1.88986 8.47166 2.25467 8.33761L5.00165 7.32823C5.22996 7.24433 5.38503 7.03089 5.39427 6.78783L5.50539 3.86338C5.52014 3.475 5.89463 3.20292 6.26857 3.3089L9.08421 4.10693C9.31823 4.17325 9.56915 4.09173 9.71949 3.90051L11.5283 1.5999Z"
                      stroke="#ed0202"
                      stroke-width="1.5"
                    ></path>{" "}
                    <path
                      d="M9 12L11 14L15 10"
                      stroke="#ed0202"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
                <div className="w-3/5">
                  <h1 className="font-bold text-2xl">24/7 Support</h1>
                  <p>
                    We provide Guaranteed Client Support, timely reports, and
                    continuous page moderation.
                  </p>
                </div>
              </div>
            </div>
            <div className="chooseus bg-red-50 h-74 w-74 rounded-full border-8 border-red-600 hover:shadow-md hover:shadow-red-600 hover:z-1 transition duration-300 sm:ml-[-46px]">
              <div className="h-full w-full align-middle text-center flex flex-col justify-center items-center">
                <svg
                  className="h-10 w-10 mb-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke="#CCCCCC"
                    stroke-width="0.8640000000000001"
                  >
                    {" "}
                    <path
                      d="M11.5283 1.5999C11.7686 1.29437 12.2314 1.29437 12.4717 1.5999L14.2805 3.90051C14.4309 4.09173 14.6818 4.17325 14.9158 4.10693L17.7314 3.3089C18.1054 3.20292 18.4799 3.475 18.4946 3.86338L18.6057 6.78783C18.615 7.03089 18.77 7.24433 18.9984 7.32823L21.7453 8.33761C22.1101 8.47166 22.2532 8.91189 22.0368 9.23478L20.4078 11.666C20.2724 11.8681 20.2724 12.1319 20.4078 12.334L22.0368 14.7652C22.2532 15.0881 22.1101 15.5283 21.7453 15.6624L18.9984 16.6718C18.77 16.7557 18.615 16.9691 18.6057 17.2122L18.4946 20.1366C18.4799 20.525 18.1054 20.7971 17.7314 20.6911L14.9158 19.8931C14.6818 19.8267 14.4309 19.9083 14.2805 20.0995L12.4717 22.4001C12.2314 22.7056 11.7686 22.7056 11.5283 22.4001L9.71949 20.0995C9.56915 19.9083 9.31823 19.8267 9.08421 19.8931L6.26856 20.6911C5.89463 20.7971 5.52014 20.525 5.50539 20.1366L5.39427 17.2122C5.38503 16.9691 5.22996 16.7557 5.00164 16.6718L2.25467 15.6624C1.88986 15.5283 1.74682 15.0881 1.96317 14.7652L3.59221 12.334C3.72761 12.1319 3.72761 11.8681 3.59221 11.666L1.96317 9.23478C1.74682 8.91189 1.88986 8.47166 2.25467 8.33761L5.00165 7.32823C5.22996 7.24433 5.38503 7.03089 5.39427 6.78783L5.50539 3.86338C5.52014 3.475 5.89463 3.20292 6.26857 3.3089L9.08421 4.10693C9.31823 4.17325 9.56915 4.09173 9.71949 3.90051L11.5283 1.5999Z"
                      stroke="#ed0202"
                      stroke-width="1.5"
                    ></path>{" "}
                    <path
                      d="M9 12L11 14L15 10"
                      stroke="#ed0202"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M11.5283 1.5999C11.7686 1.29437 12.2314 1.29437 12.4717 1.5999L14.2805 3.90051C14.4309 4.09173 14.6818 4.17325 14.9158 4.10693L17.7314 3.3089C18.1054 3.20292 18.4799 3.475 18.4946 3.86338L18.6057 6.78783C18.615 7.03089 18.77 7.24433 18.9984 7.32823L21.7453 8.33761C22.1101 8.47166 22.2532 8.91189 22.0368 9.23478L20.4078 11.666C20.2724 11.8681 20.2724 12.1319 20.4078 12.334L22.0368 14.7652C22.2532 15.0881 22.1101 15.5283 21.7453 15.6624L18.9984 16.6718C18.77 16.7557 18.615 16.9691 18.6057 17.2122L18.4946 20.1366C18.4799 20.525 18.1054 20.7971 17.7314 20.6911L14.9158 19.8931C14.6818 19.8267 14.4309 19.9083 14.2805 20.0995L12.4717 22.4001C12.2314 22.7056 11.7686 22.7056 11.5283 22.4001L9.71949 20.0995C9.56915 19.9083 9.31823 19.8267 9.08421 19.8931L6.26856 20.6911C5.89463 20.7971 5.52014 20.525 5.50539 20.1366L5.39427 17.2122C5.38503 16.9691 5.22996 16.7557 5.00164 16.6718L2.25467 15.6624C1.88986 15.5283 1.74682 15.0881 1.96317 14.7652L3.59221 12.334C3.72761 12.1319 3.72761 11.8681 3.59221 11.666L1.96317 9.23478C1.74682 8.91189 1.88986 8.47166 2.25467 8.33761L5.00165 7.32823C5.22996 7.24433 5.38503 7.03089 5.39427 6.78783L5.50539 3.86338C5.52014 3.475 5.89463 3.20292 6.26857 3.3089L9.08421 4.10693C9.31823 4.17325 9.56915 4.09173 9.71949 3.90051L11.5283 1.5999Z"
                      stroke="#ed0202"
                      stroke-width="1.5"
                    ></path>{" "}
                    <path
                      d="M9 12L11 14L15 10"
                      stroke="#ed0202"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
                <div className="w-3/5">
                  <h1 className="font-bold text-2xl">Transparent Value</h1>
                  <p>
                    Access Affordable Packages with completely transparent
                    service and clear reporting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" lg:grid lg:h-screen lg:place-content-center">
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-prose text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Meet The
              <strong className="text-red-600"> CPB </strong>
              Team
            </h1>

            <p className="mt-4 mb-8 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
              Led by over 20+ professional business advisors, designers, and
              strategists, we bring comprehensive expertise to transform your
              brand.
            </p>
          </div>
          <div className="h-fit w-full flex justify-center items-center">
            <TeamCaro />
          </div>
        </div>
      </section>

      <section className=" lg:grid lg:h-screen lg:place-content-center">
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-prose text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              <strong className="text-red-600"> Questions You May Have </strong>
            </h1>

            <p className="mt-4 mb-8 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
              Quick answers about our complete service ecosystem and approach to
              growth.
            </p>
          </div>
          <div className="h-fit text-pretty content-center flex justify-center items-center">
            <div className="join join-vertical bg-base-100 flex  justify-center items-center">
              <div className="collapse collapse-arrow join-item border-base-300 border rounded-t-2xl">
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div className="collapse-title font-semibold">
                  1. What is the scope of your services?
                </div>
                <div className="collapse-content text-sm bg-red-200 chooseus">
                  We offer Complete Digital & Offline Branding Solutions. This
                  ranges from Digital Business Setup and Monthly Marketing
                  Management to Creative & Printing Services and Event Planning
                  & Management
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title font-semibold">
                  2. Who will manage my campaigns and strategy?
                </div>
                <div className="collapse-content text-sm bg-red-200 chooseus">
                  Your campaigns are managed by an Experienced Team of 20+
                  professional business advisors and strategists. We utilize
                  specialized Audience Research & Engagement Strategy to deliver
                  measurable results.
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title font-semibold">
                  3. How much content is provided monthly?
                </div>
                <div className="collapse-content text-sm bg-red-200 chooseus">
                  Our Standard monthly package includes 25 Days of Active
                  Posting, 25 Custom Poster Designs, and 5 Promotional Videos.
                  Premium packages offer 30 Days of Full Social Media Coverage
                  and Unlimited Poster & Video Posting.
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title font-semibold">
                  4. Is your client support truly 24/7?
                </div>
                <div className="collapse-content text-sm bg-red-200 chooseus">
                  Yes. We guarantee 24/7 Client Support. Our salary-based
                  moderator team ensures immediate replies to messages,
                  continuous client engagement, and timely reports.
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title font-semibold">
                  5. What is included in the Digital Business Setup starter
                  packages?
                </div>
                <div className="collapse-content text-sm bg-red-200 chooseus">
                  Starter packages cover Professional Logo Design, Website
                  Setup, and social media activation (Facebook, TikTok,
                  Instagram). They include Content Creation and Ad Campaign
                  Management , with advanced options offering Unlimited Ad
                  Campaign & Boosting.
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title font-semibold">
                  6. Beyond digital, what physical/creative services do you
                  offer?
                </div>
                <div className="collapse-content text-sm bg-red-200 chooseus">
                  We provide end-to-end Creative & Printing Services for
                  physical assets like Business Cards, Brochures, Signboards,
                  and Corporate Catalogs. We also handle Event Planning &
                  Management and Corporate Video Production.
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title font-semibold">
                  7. How affordable and transparent are your packages?
                </div>
                <div className="collapse-content text-sm bg-red-200 chooseus">
                  We offer Affordable Packages for every business size with
                  guaranteed Transparent Service & Reporting. You always receive
                  full visibility into budget allocation and performance
                  metrics.
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border-base-300 border">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title font-semibold">
                  8. Where are your company headquarters located?
                </div>
                <div className="collapse-content text-sm bg-red-200 chooseus">
                  Our Head Office is in Kuala Lumpur, Malaysia. We also maintain
                  a presence with our Bangladesh Office in Dhaka.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
