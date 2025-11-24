import React from 'react'
import SEO from "../../components/SEO";

const Contact = () => {
  return (
    <div className="lg:grid lg:h-auto lg:place-content-center">
      <SEO
        title="Contact Us"
        description="Get in touch with Creative Planners of Bangladesh for a free consultation. Serving Bangladesh and Malaysia."
        keywords="Contact CPB, Free Consultation, Marketing Inquiry, Event Booking"
      />
      <section className="">
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-prose text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              <strong className="text-red-500"> Contact </strong>
              Us
            </h1>

            <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
              Get in touch with our team to discuss how we can help transform
              your business. We're here to help.
            </p>

            <div className="mt-4 flex justify-center gap-4 sm:mt-6">
              <a
                className="inline-block rounded border border-red-600 bg-red-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-red-700"
                href="https://wa.me/601139638206?text=Hello%20CPB,%20I%20saw%20your%20website%20and%20I%20would%20like%20a%20free%20consultation%20on%20your%20services.%0A%0AClient%20Name:%0AInterested%20In:"
                target="_blank"
              >
                Get In Touch Now
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mt-16">
            <div className="google-map-codevh-40 order-2 lg:order-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d736.1406376701847!2d101.71018004409835!3d3.027603616238121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdcb01c2fc4eb9%3A0x5aeef78f97ebaa51!2sThe%20Academia%20Block%20B%20%40%20South%20City%20Apartment!5e1!3m2!1sen!2smy!4v1761290879564!5m2!1sen!2smy"
                width="600"
                height="490"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                className="rounded-2xl border-4 border-red-600 w-full"
              />
            </div>

            <div className="rounded">
              <div class="lg:col-span-1">
                <div class="bg-red-600 p-8 rounded-xl shadow-2xl h-full flex flex-col justify-between">
                  <div>
                    <h3 class="text-2xl font-bold text-white mb-6 border-b border-red-400 pb-3">
                      Connect Directly
                    </h3>

                    <div class="space-y-6">
                      <div class="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="w-6 h-6 text-white mt-1 flex-shrink-0"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            {" "}
                            <path
                              d="M14.05 6C15.0268 6.19057 15.9244 6.66826 16.6281 7.37194C17.3318 8.07561 17.8095 8.97326 18 9.95M14.05 2C16.0793 2.22544 17.9716 3.13417 19.4163 4.57701C20.8609 6.01984 21.7721 7.91101 22 9.94M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>{" "}
                          </g>
                        </svg>
                        <div class="ml-4">
                          <h4 class="text-lg font-semibold text-white">
                            Hotlines
                          </h4>
                          <a
                            href="tel:+601139638206"
                            class="text-white text-sm font-light leading-snug hover:underline"
                          >
                            +60 11-3963 8206
                          </a>
                          <p class="text-white text-sm font-light leading-snug">
                            <a href="tel:+601121404200" class="hover:underline">
                              +60 11-2140 4200
                            </a>
                          </p>
                        </div>
                      </div>

                      <div class="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="w-6 h-6 text-white mt-1 flex-shrink-0"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        <div class="ml-4">
                          <h4 class="text-lg font-semibold text-white">
                            Email
                          </h4>
                          <a
                            href="mailto:creativeplannersofbd@gmail.com"
                            class="text-white text-sm font-light leading-snug hover:underline"
                          >
                            creativeplannersofbd@gmail.com
                          </a>
                        </div>
                      </div>

                      <div class="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="w-6 h-6 text-white mt-1 flex-shrink-0"
                        >
                          <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <div class="ml-4">
                          <h4 class="text-lg font-semibold text-white">
                            Head Office (Malaysia)
                          </h4>
                          <p class="text-white text-sm font-light leading-snug">
                            B-06-03, Academia, South City Plaza, Seri Kembangan,
                            Kuala Lumpur, Malaysia
                          </p>
                        </div>
                      </div>

                      <div class="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="w-6 h-6 text-white mt-1 flex-shrink-0"
                        >
                          <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <div class="ml-4">
                          <h4 class="text-lg font-semibold text-white">
                            Bangladesh Office
                          </h4>
                          <p class="text-white text-sm font-light leading-snug">
                            Level 05, Avenue-10, Mirpur DOHS, Dhaka, Bangladesh
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="mt-8 pt-4 border-t border-red-400">
                    <p class="text-white text-sm opacity-90 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="w-4 h-4 mr-2"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                      Serving Bangladesh & Malaysia
                    </p>
                  </div>
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

export default Contact