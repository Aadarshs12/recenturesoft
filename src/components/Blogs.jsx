"use client";
import React from "react";
import { GiMouse } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Blogs = () => {
  const blogs = [
    {
      date: "10 January 2025",
      title: "How Website UI Can Become the Face of Your Brand",
      image: "/images/blog-01.webp",
      type: "Bussiness",
      provider: "Recentureoft",
      quote:
        "If you manage an online business, particularly an eCommerce website, it’s likely that you’ve already invested long hours enhancing your site’s appearance. Optimization of design, speedy download speeds, and attractive images are all aspects of making your visitors want to come to your website.",
    },
    {
      date: "12 November 2024",
      title: "5 Mobile App Development Issues You Should Know",
      image: "/images/blog-02.webp",
      type: "Bussiness",
      provider: "Recentureoft",
      quote:
        "Although the usage of mobile websites is growing across the globe, the majority of that is spent on mobile apps. At present, there are 2.9 million apps in the Google Play Store. Google Play Store, with around 70,000 new apps every month added. Experts believe that the Apple App Store holds about 4.75 million apps (MindSea).",
    },
    {
      date: "09 December 2024",
      title: "SEO Vs SEM: A Comprehensive Overview",
      image: "/images/blog-03.webp",
      type: "Bussiness",
      provider: "Recentureoft",
      quote:
        "Although both are essential components to the Search Engine cosmos, there is a huge difference between SEO as well as SEM in terms of features as well as how they are implemented. Many people believe that SEO is a part of SEM, which is not true at all.",
    },
  ];

  return (
    <section className="py-10 bg-white lg:py-14 shadow-2xl">
      <div className="text-center flex flex-col gap-3 mb-12 lg:mb-16">
        <span className="flex lg:flex-row uppercase flex-col justify-center text-base items-center gap-2 text-gray-500">
          <GiMouse className="text-3xl -rotate-90" /> Agile minds pouring in
          some informative, read-worthy content for you!
        </span>
        <h2 className="text-5xl pb-2 w-fit mx-auto primary-gradient text-center font-bold">
          Latest Blog
        </h2>
        <span className="forBorderSeperator"></span>
      </div>
      <div className="container mx-auto px-4">
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
          {blogs.map((blog, index) => (
            <SwiperSlide key={index}>
              <div className="forBlogsCard bg-indigo-50 rounded-xl">
                <div className="relative z-10 overflow-hidden">
                  <Image
                    src={blog?.image}
                    alt={blog?.title}
                    width={300}
                    height={300}
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="w-full object-cover rounded-t-xl h-56"
                  ></Image>
                  <div className="forDate uppercase">
                    <span>{blog?.date}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-3 p-5">
                  <div className="flex gap-2 items-center">
                    <h5 className="bg-slate-800 m-0 text-lg text-white rounded-md px-2">
                      {blog?.type}
                    </h5>
                    <p className="font-bold m-0 text-md tertiary-color">
                      By {blog?.provider}
                    </p>
                  </div>
                  <h3 className="text-2xl m-0 primary-color font-bold line-clamp-1">
                    {blog?.title}
                  </h3>
                  <p className="text-sm m-0 line-clamp-5">{blog?.quote}</p>
                  <Link
                    href="#"
                    className="inline-flex transition-all duration-300 ease-in-out items-center gap-2 btn-gradient py-1 px-6 rounded-lg font-medium"
                  >
                    Read more{" "}
                    <span className="bg-black p-3 rounded-full -rotate-45">
                      <FaArrowRightLong />
                    </span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Blogs;
