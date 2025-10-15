import React from 'react'

const About = () => {
  return (
    <div className="">
      <section className="lg:grid lg:h-screen lg:place-content-center overflow-hidden w-full">
        <a href="#" className="group relative block">
          <img
            alt=""
            src="https://i.pinimg.com/originals/23/cd/cb/23cdcbb4e77524b09d5f7e772b5ff53f.gif"
            className="absolute inset-0 h-96 w-full object-cover transition-opacity group-hover:opacity-95 rounded-4xl"
          />

          <div className="relative p-10 sm:p-6 lg:p-8">
            <p className="font-medium tracking-widest text-red-500 uppercase text-2xl text-shadow-sm text-shadow-black">
              The Architects of Digital & Event Success
            </p>

            <p className="text-5xl font-bold text-white sm:text-2xl max-w-2xl">
              From brand setup to flawless event execution, we build your
              complete business ecosystem.
            </p>

            <div className="mt-32 sm:mt-48 lg:mt-64">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Omnis perferendis hic asperiores quibusdam quidem voluptates
                  doloremque reiciendis nostrum harum. Repudiandae?
                </p>
              </div>
            </div>
          </div>
        </a>
      </section>
    </div>
  );
}

export default About