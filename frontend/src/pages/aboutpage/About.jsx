import React from 'react'
import './About.css'
import LogoCaro from '../../components/carousel/LogoCaro';
import TeamCaro from '../../components/carousel/TeamCaro';
import SEO from "../../components/SEO";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <SEO
        title="About Us"
        description="Learn about Creative Planners of Bangladesh (CPB), the architects of digital and event success."
        keywords="About CPB, Marketing Agency, Event Planners, Digital Strategy"
      />
      <section className="lg:grid my-16 lg:place-content-center overflow-hidden hidden sm:visible w-4/5 border-4 border-red-500 rounded-4xl">
        <a href="#" className="group relative block">
          <img
            alt=""
            src="https://i.pinimg.com/originals/26/45/47/2645475a9eef90f4a1fe67b76ae7d9fa.gif"
            className="absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-95"
          />

          <div className="relative p-10 sm:p-6 lg:p-8">
            <p className="font-medium tracking-widest text-red-500 uppercase text-2xl text-shadow-sm text-shadow-black">
              The Architects of Digital & Event Success
            </p>

            <p className="text-5xl font-bold text-white sm:text-2xl max-w-2xl">
              From brand setup to flawless event execution, we build your
              complete business ecosystem.
            </p>

            <div className="mt-28 sm:mt-40 lg:mt-44">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-white">
                  We are the Creative Planners of Bangladesh, dedicated to
                  transforming your brand into a complete ecosystem. We fuse
                  cutting-edge digital strategy with flawless event execution,
                  ensuring your brand not only grows but dominates. Our 20+
                  experts manage everything from web setup to global campaigns,
                  offering measurable results and 24/7 transparent support. We
                  don't just plan; we build legacies.
                </p>
              </div>
            </div>
          </div>
        </a>
      </section>
      <div className="w-4/5 mt-6">
        <LogoCaro />
      </div>

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 mt-4">
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:items-center md:gap-8 gap-4">
            <div>
              <div className="max-w-prose md:max-w-none">
                <h1 className="text-3xl font-bold text-red-500 dark:text-red-600! sm:text-3xl">
                  Our Global Mission
                </h1>

                <p className="mt-4 text-gray-700">
                  <strong>
                    To build your brand, connect it with the right audience, and
                    deliver measurable business results.
                  </strong>{" "}
                  <br />
                  <br />
                  We are proud to have expanded our footprint to serve clients
                  globally. This commitment to growth is solidified by the
                  establishment of our{" "}
                  <strong>Head Office in Kuala Lumpur, Malaysia</strong>,
                  complementing our dedicated{" "}
                  <strong>Bangladesh Office in Dhaka</strong>. This dual
                  presence strengthens our capacity to deliver world-class
                  solutions across South and Southeast Asia.
                </p>
              </div>
            </div>

            <div>
              <img
                src="https://i.pinimg.com/736x/3f/6a/3a/3f6a3a60d1dfeeeca1a2e771c9b8fe69.jpg"
                className="rounded-2xl border-4 border-red-500"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <img
                src="https://i.pinimg.com/originals/9c/f7/31/9cf731acaa5e83195600ddf8965eb864.gif"
                className="rounded-2xl border-4 border-red-500"
                alt=""
              />
            </div>
            <div>
              <div className="max-w-prose md:max-w-none">
                <h1 className="text-3xl font-bold text-red-500 dark:text-red-600! sm:text-3xl">
                  Who We Are
                </h1>

                <p className="mt-4 text-gray-700">
                  <strong>Your Full-Service Creative Partner</strong> <br />
                  <br />
                  <strong>Creative Planners of Bangladesh (CPB)</strong> is a{" "}
                  <strong>
                    full-service marketing and event management agency{" "}
                  </strong>
                  committed to helping brands achieve digital growth and reach
                  their audiences effectively. We don't just execute tasks; we
                  deliver complete brand transformation, managing everything
                  from initial digital setup to advanced audience engagement and
                  lead generation. We are the single partner you need for all
                  your digital, creative, printing, and event management needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" lg:grid lg:h-screen lg:place-content-center">
        <div className="mx-auto w-screen max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
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
    </div>
  );
}

export default About