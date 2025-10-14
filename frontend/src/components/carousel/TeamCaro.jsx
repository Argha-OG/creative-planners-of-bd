import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "./caroCard.css";


import ima1 from "./../../assets/moin.jpg";
import ima2 from "./../../assets/argha.jpg";
import ima3 from "./../../assets/tohidul.jpg";
import ima4 from "./../../assets/eventplanner.jpg";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const TeamCaro = () => {
  return (
    <Swiper
      spaceBetween={30}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      effect={"coverflow"}
      autoplay={{
        delay: 3000,
      }}
      grabCursor={true}
      centeredSlides={true}
      loop="true"
      slidesPerView="3"
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 0,
        slideShadows: false,
      }}
      // pagination={true}

      className="mySwiper"
    >
      <SwiperSlide>
        <a href="#" className="">
          <div class="group">
            <div class="relative overflow-hidden rounded-4xl mb-4 border-4 border-red-600">
              <img
                src={ima1}
                alt="Team member"
                class="w-full h-96 aspect-[3/4] object-cover object-center transform group-hover:scale-105 transition duration-300 ease-in-out"
              />
            </div>
            <div class="text-center">
              <h3 class="text-xl font-bold text-gray-800">
                MD Mashrafi Sarker Moin
              </h3>
              <p class="text-red-600 font-medium">
                Marketing Expert & Business Adviser
              </p>
            </div>
          </div>
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a href="#" className="">
          <div class="group">
            <div class="relative overflow-hidden rounded-4xl mb-4 border-4 border-red-600">
              <img
                src={ima2}
                alt="Team member"
                class="w-full h-96 aspect-[3/4] object-cover object-center transform group-hover:scale-105 transition duration-300 ease-in-out"
              />
            </div>
            <div class="text-center">
              <h3 class="text-xl font-bold text-gray-800">Argha Biswas</h3>
              <p class="text-red-600 font-medium">
                Web Devoloper & Operation Incharge
              </p>
            </div>
          </div>
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a href="#" className="">
          <div class="group">
            <div class="relative overflow-hidden rounded-4xl mb-4 border-4 border-red-600">
              <img
                src={ima3}
                alt="Team member"
                class="w-full h-96 aspect-[3/4] object-cover object-center transform group-hover:scale-105 transition duration-300 ease-in-out"
              />
            </div>
            <div class="text-center">
              <h3 class="text-xl font-bold text-gray-800">
                Tohidul Islam Tusher
              </h3>
              <p class="text-red-600 font-medium">Chief Marketing Officer</p>
            </div>
          </div>
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a href="#" className="">
          <div class="group">
            <div class="relative overflow-hidden rounded-4xl mb-4 border-4 border-red-600">
              <img
                src={ima4}
                alt="Team member"
                class="w-full h-96 aspect-[3/4] object-cover object-center transform group-hover:scale-105 transition duration-300 ease-in-out"
              />
            </div>
            <div class="text-center">
              <h3 class="text-xl font-bold text-gray-800">Rahat Jubair</h3>
              <p class="text-red-600 font-medium">
                Event Planner/Management Team
              </p>
            </div>
          </div>
        </a>
      </SwiperSlide>
    </Swiper>
  );
};

export default TeamCaro;
