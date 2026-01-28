"use client"

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const TrendingBlogs = () => {
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
    <div className="flex flex-col gap-8">
      {blogs.map((item, index) => (
        <div key={index} className="flex flex-col forBlogsPage gap-5 bg-slate-50 p-5 border-2 shadow border-gray-300 rounded-2xl">
          <div className="relative z-10 overflow-hidden">
            <Image
              sizes="(max-width: 768px) 100vw, 300px"
              className="w-full h-[400px] rounded-2xl object-cover"
              height={600}
              width={600}
              src={item?.image}
              alt="blog"
            />
            <div className="forDate uppercase">
              <span>{item?.date}</span>
            </div>
          </div>
          <div className="flex flex-col gap-3 p-5">
            <div className="flex gap-2 items-center">
              <h5 className="bg-slate-800 m-0 text-lg text-white rounded-md px-2">
                {item?.type}
              </h5>
              <p className="font-bold m-0 text-md tertiary-color">
                By {item?.provider}
              </p>
            </div>
            <h3 className="text-2xl m-0 primary-gradient font-bold line-clamp-1">
              {item?.title}
            </h3>
            <p className="text-sm m-0 line-clamp-5">
              {item?.quote}
            </p>
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
      ))}
    </div>
  );
};

export default TrendingBlogs;
