import React from 'react'
import './About.css'
import LogoCaro from '../../components/carousel/LogoCaro';

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <section className="lg:grid lg:h-screen lg:place-content-center overflow-hidden w-4/5">
        <a href="#" className="group relative block">
          <img
            alt=""
            src="https://i.pinimg.com/originals/26/45/47/2645475a9eef90f4a1fe67b76ae7d9fa.gif"
            className="absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-95 rounded-4xl"
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
      <div className='my-8 w-4/5'><LogoCaro /></div>
      
    </div>
  );
}

export default About