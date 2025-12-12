"use client";
import React from "react";
import { GiMouse } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Franklin Brice",
    title: "Director",
    image: "/images/reviewer5.png",
    quote:
      "Revamping my company’s official website using Recenturesoft’s SEO services did wonders for my website’s online search engine ranking! It was a great experience working with a team of such flexible and responsive employees.",
  },
  {
    name: "Philip Dixon",
    title: "Creative Director",
    image: "/images/reviewer1.png",
    quote:
      "Recenturesoft has completely changed the appearance of my website in terms of the design and customisation options. They have given me something that I can be proud of.",
  },
  {
    name: "Timothy Rios",
    title: "Marketing Manager",
    image: "/images/reviewer3.png",
    quote:
      "My company's online search engine ranking improved marginally using Recenturesoft's SEO services. They did not take it as just another URL and worked on it with complete dedication. It was a great experience working with the team!",
  },

  {
    name: "Michile Johnson",
    title: "CEO",
    image: "/images/reviewer4.png",
    quote:
      "Even though my startup started small, today it is the second top-ranking option on the first page of Google (search - custom designed T-Shirts in Detroit, Michigan). The SEO team at Recenturesoft Infotech has greatly helped me in achieving my goals.",
  },
  {
    name: "Desirae Karla",
    title: "Manager",
    image: "/images/reviewer2.png",
    quote:
      "Trusting Recenturesoft was one of the best business decisions I ever made! Today, not only does my website have more traffic but it also offers a more satisfying customer experience. I know I can always rely on the hard-work and dedication put in by their amazing team.",
  },
];

const Testimonials = () => {
  return (
    <section className="pt-5 lg:pt-10 pb-32 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center flex flex-col gap-3 mb-12 lg:mb-16">
          <span className="flex lg:flex-row uppercase flex-col justify-center text-base items-center gap-2 text-gray-500">
            <GiMouse className="text-3xl -rotate-90" /> At Recenturesoft,
            serving you with the best is always our motto.
          </span>
          <h2 className="text-5xl w-fit mx-auto primary-gradient text-center font-bold">
            What Our Clients Say
          </h2>
          <span className="forBorderSeperator"></span>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          pagination={{ clickable: true }}
          className="mx-auto h-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="forCardTestimonials relative z-10 flex flex-col gap-3 h-100 rounded-2xl p-3 lg:p-5 text-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  height={200}
                  width={200}
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="w-24 h-24 lg:w-28 lg:h-28 rounded-full mx-auto object-cover border-4 border-indigo-100"
                />

                <p className="text-base  pb-16 font-medium text-gray-700 italic mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                <div className="absolute left-0 right-0 mx-auto bottom-5">
                  <p className="secondary-color font-medium">
                    {testimonial.title}
                  </p>

                  <h4 className="text-2xl font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
