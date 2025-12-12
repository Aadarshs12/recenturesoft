"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";

const ClientAndPartners = () => {
  const brands = [
    "/images/client-01.webp",
    "/images/client-02.webp",
    "/images/client-03.webp",
    "/images/client-04.webp",
    "/images/client-05.webp",
    "/images/client-06.webp",
    "/images/client-07.webp",
    "/images/client-08.webp",
    "/images/client-09.webp",
    "/images/client-10.webp",
  ];

  return (
    <section
      style={{
        backgroundImage: `repeating-radial-gradient(circle at center center, transparent 0px, transparent 2px,rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 3px,transparent 3px, transparent 5px,rgba(0,0,0,0.03) 5px, rgba(0,0,0,0.03) 7px),repeating-radial-gradient(circle at center center, rgb(235,247,255) 0px, rgb(235,247,255) 9px,rgb(235,247,255) 9px, rgb(235,247,255) 21px,rgb(235,247,255) 21px, rgb(235,247,255) 31px,rgb(235,247,255) 31px, rgb(235,247,255) 40px)`,
        backgroundSize: `20px 20px`,
      }}
      className="w-full pb-40 forClientAndCustormer"
    >
      <div className="container px-4 mx-auto">
        <div className="client-content">
          <h5 className="sec-title">
            <span className="client-numbers">500+</span> Companies Trust
            
            <div className="client-text">
              <Image
                src="/images/logo.png"
                alt="logo"
                height={100}
                width={300}
                className="w-auto h-7 mx-auto"
              ></Image>
            </div>
          </h5>
        </div>
        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={40}
          loop={true}
          speed={3500}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          className="flex items-center"
        >
          {brands.map((img, index) => (
            <SwiperSlide
              className="bg-white p-5 rounded-md"
              key={index}
              style={{ width: "auto" }}
            >
              <Image
                alt="client img"
                height={200}
                width={400}
                src={img}
                className="h-12 w-auto object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientAndPartners;
