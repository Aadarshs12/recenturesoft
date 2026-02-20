"use client";

import React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import TrendingBlogs from "./TrendingBlogs";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const BlogLayout = () => {
  const { register, handleSubmit, reset } = useForm();
  const categories = [
    { name: "Innovation", count: 3 },
    { name: "Leadership", count: 2 },
    { name: "Technology", count: 3 },
    { name: "Marketing", count: 6 },
    { name: "Management", count: 4 },
  ];
  const tags = [
    { tag: "Growth" },
    { tag: "Drive" },
    { tag: "Lead" },
    { tag: "Success" },
    { tag: "Optimize" },
    { tag: "Results" },
    { tag: "Innovate" },
    { tag: "Impact" },
    { tag: "Focus" },
    { tag: "Tech" },
  ];

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
  const onSubmit = (data) => {
    console.log("Searching for:", data.search);
    reset();
  };
  return (
    <section className="py-8 lg:py-14">
      <div className="container mx-auto px-4">
        <div className="flex lg:flex-row flex-col gap-8">
          <div className="lg:w-8/12 w-full">
            <TrendingBlogs />
          </div>
          <div className="lg:w-4/12 w-full flex flex-col gap-7 sticky top-7 self-start">
            <div className="forBlogLayout p-5 rounded-xl">
              <h2 className="font-semibold text-xl primary-color mb-2 w-fit">
                Search here
              </h2>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="forBlogLayout flex gap-3"
              >
                <input
                  type="text"
                  placeholder="Search blogs..."
                  {...register("search")}
                  className="flex-1 w-2/3 px-3 placeholder:text-sm py-2 placeholder-gray-500 bg-white border border-gray-300 rounded-lg outline-none"
                />
                <button
                  type="submit"
                  href="#"
                  className="inline-flex w-1/3 transition-all duration-300 ease-in-out items-center gap-2 btn-gradient py-1 px-6 rounded-lg font-medium"
                >
                  Search{" "}
                  <span className="bg-black p-3 rounded-full -rotate-45">
                    <FaArrowRightLong />
                  </span>
                </button>
              </form>
            </div>
            <div className="forBlogLayout p-5 rounded-xl">
              <h2 className="font-semibold text-xl primary-color mb-2 w-fit">
                Related post
              </h2>
              <div className="flex flex-col gap-5">
                {blogs.map((item, index) => {
                  return (
                    <div className="flex items-center gap-5" key={index}>
                      <div className="w-1/3">
                        <Image
                          className="w-full h-[100px] rounded-2xl object-cover"
                          height={200}
                          width={200}
                          src={item?.image}
                          alt="blog"
                        />
                      </div>
                      <div className="w-2/3 flex flex-col">
                        <h2 className="font-bold primary-gradient line-clamp-1 w-fit text-xl">
                          {item?.title}
                        </h2>
                        <p className="line-clamp-2 text-slate-700 text-sm">
                          {item?.quote}
                        </p>
                        <p className="text-sm primary-color">{item?.date}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="forBlogLayout p-5 rounded-xl">
              <h2 className="font-semibold text-xl primary-color mb-2 w-fit">
                Categories
              </h2>
              <ul className="flex flex-col gap-3">
                {categories.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="bg-white text-[#2181c2] hover:bg-slate-50 cursor-pointer p-4 rounded-2xl shadow text-lg "
                    >
                      <Link href="#">
                        {item?.name}{" "}
                        <span className="float-end tertiary-color">
                          (0{item?.count})
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="forBlogLayout p-5 rounded-xl">
              <h2 className="font-semibold text-xl primary-color mb-2 w-fit">
                Tags
              </h2>
              <ul className="flex flex-wrap gap-2">
                {tags.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="bg-white text-[#2181c2] hover:bg-slate-50 cursor-pointer px-2 py-1 rounded-md shadow text-sm"
                    >
                      <Link href="#">{item?.tag}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogLayout;
