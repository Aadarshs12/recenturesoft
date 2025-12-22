"use client";

import React from "react";
import { GiMouse } from "react-icons/gi";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const OurServices = () => {
  const services = [
    {
      icon: "/images/software-icon.png",
      title: "Software Development",
      description:
        "Get Feature-rich and scalable software solutions that speak of your business in an interactive manner.",
    },
    {
      icon: "/images/web-icons.png",
      title: "Web Development",
      description:
        "Get extensive website development solutions for your business from some of the most experienced coding enthusiasts.",
    },
    {
      icon: "/images/mobile-icon.png",
      title: "Mobile App Development",
      description:
        "Get your business a modern and interactive mobile application with multiple designs and frameworks to choose from.",
    },
    {
      icon: "/images/digital-icon.png",
      title: "Digital Marketing",
      description:
        "Build your website's digital marketing portfolio with excellent search engine results and greater visibility over the world wide web.",
    },
  ];

  return (
    <section className="forOurServices py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3">
          <span className="flex lg:flex-row uppercase flex-col justify-center text-base items-center gap-2 text-gray-500">
            <GiMouse className="text-3xl -rotate-90" /> At Recenturesoft,
            serving you with the best is always our motto.
          </span>
          <h1 className="text-5xl w-fit mx-auto primary-gradient text-center font-bold">
            Our Services
          </h1>
          <span className="forBorderSeperator"></span>

          <div className="mt-8">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
              pagination={false}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  autoplay: { delay: 3000 },
                  pagination: { clickable: true },
                },
                640: {
                  slidesPerView: 1,
                  pagination: false,
                },
                768: {
                  slidesPerView: 2,
                  pagination: false,
                },
                1024: {
                  slidesPerView: 4,
                  pagination: false,
                },
              }}
              className="our-services-swiper"
            >
              {[...services, ...services, ...services].map((service, index) => (
                <SwiperSlide key={index}>
                  <div
                    style={{
                      backgroundImage: `repeating-radial-gradient(circle at center center, transparent 0px, transparent 2px,rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 3px,transparent 3px, transparent 5px,rgba(0,0,0,0.03) 5px, rgba(0,0,0,0.03) 7px),repeating-radial-gradient(circle at center center, rgb(235,247,255) 0px, rgb(235,247,255) 9px,rgb(235,247,255) 9px, rgb(235,247,255) 21px,rgb(235,247,255) 21px, rgb(235,247,255) 31px,rgb(235,247,255) 31px, rgb(235,247,255) 40px)`,
                      backgroundSize: `20px 20px`,
                    }}
                    className="forServicesCard shadow-2xs flex flex-col gap-2 p-5 rounded-2xl h-full"
                  >
                    <div className="forServiceImg flex items-center gap-2">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        height={250}
                        width={250}
                        className="w-fit object-contain h-[50px]"
                      />
                      <h3 className="text-2xl font-bold text-black">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-base text-gray-700 flex-1">
                      {service.description}
                    </p>
                    <div className="text-start">
                      <Link
                        href="#"
                        className="group relative btn-non-gradient inline-flex items-center gap-2 py-1 px-6 rounded-lg font-medium overflow-hidden"
                      >
                        <span className="absolute flex items-center justify-center transition-all duration-500 ease-out group-hover:-translate-y-full group-hover:opacity-0">
                          Get in touch
                        </span>

                        <span className="flex items-center justify-center transition-all duration-500 ease-out translate-y-10 group-hover:translate-y-0">
                          Get in touch
                        </span>

                        <span className="relative bg-black p-3 rounded-full -rotate-45 transition-transform duration-500 group-hover:rotate-0">
                          <FaArrowRightLong />
                        </span>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
