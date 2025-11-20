"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <section className="forBgBanner">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex lg:flex-row flex-col items-center py-5 px-2">
              <div className="lg:w-1/2 w-full flex flex-col gap-3">
                <h2 className="lg:text-6xl text-4xl font-bold primary-gradient">
                  Software Development
                </h2>
                <p className="lg:text-lg text-base">
                  Get Scalable yet unique software development solutions that
                  are both user centric and UI friendly as per your choice.
                </p>
              </div>
              <div className="lg:w-1/2 w-full">
                <Image
                  src="/images/banner-1.webp"
                  alt="Slide 1"
                  height={400}
                  width={400}
                  className="w-full object-contain h-[400px]"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex lg:flex-row flex-col items-center p-5">
              <div className="lg:w-1/2 w-full flex flex-col gap-3">
                <h2 className="lg:text-6xl text-4xl font-bold primary-gradient">
                  Mobile App Development
                </h2>
                <p className="lg:text-lg text-base">
                  Let your code speak for itself with AI-based mobile
                  applications and a feature-rich platform for your website.
                </p>
              </div>
              <div className="lg:w-1/2 w-full">
                <Image
                  src="/images/banner-2.png"
                  alt="Slide 2"
                  height={400}
                  width={400}
                  className="w-full object-contain h-[400px]"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex lg:flex-row flex-col items-center p-5">
              <div className="lg:w-1/2 w-full flex flex-col gap-3">
                <h2 className="lg:text-6xl text-4xl font-bold primary-gradient">
                  Ecommerce Website Development
                </h2>
                <p className="lg:text-lg text-base">
                  Give your online retail store a brand new look with product
                  catalogues, cart management and other features to build that
                  professional look.
                </p>
              </div>
              <div className="lg:w-1/2 w-full">
                <Image
                  src="/images/banner-3.webp"
                  alt="Slide 3"
                  height={400}
                  width={400}
                  className="w-full object-contain h-[400px]"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Banner;
