"use client";
import React from "react";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { TbArrowBadgeRightFilled } from "react-icons/tb";

import { PiCopyrightFill } from "react-icons/pi";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="forFooterBg py-3 py-md-5">
      <video
        className="footer-video"
        src="/videos/footerBgVideo1.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="footer-content container mx-auto px-4">
        <div className="flex flex-row flex-wrap justify-between">
          <div className="lg:w-1/4 md:w-1/2 w-full flex flex-col gap-4">
            <div>
              <Image
                className="w-fit mb-2"
                alt="logo"
                height={150}
                width={300}
                src="/images/logo-dark.png"
              ></Image>
            </div>
            <p className="m-0 text-slate-200 text-base font-light">
              Don't hesitate to contact with our expertise.
            </p>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg m-0 font-semibold primary-color">
                General Inquiries
              </h3>
              <a
                className="flex gap-2 items-center hover:text-[#2181c2]"
                href="tel:+917770003288"
              >
                <FaPhoneAlt className="mt-1 text-lg" />
                +91 777 000 3288
              </a>
              <a
                className="flex gap-2 items-center hover:text-[#2181c2]"
                href="mailto:info@recenturesoft.com"
              >
                <IoIosMail className="mt-1 text-2xl" />
                info@recenturesoft.com
              </a>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full flex flex-col gap-4">
            <h2 className="text-2xl font-semibold primary-color">Company</h2>
            <div className="flex flex-col gap-3">
              <ul>
                <li>
                  <Link
                    className="flex gap-1 items-center group transition-all duration-300 w-fit text-slate-400 hover:text-white"
                    href="#"
                  >
                    <TbArrowBadgeRightFilled className="transition-transform duration-300 group-hover:translate-x-1" />
                    <span className="relative after:block after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-0 after:bg-sky-500 after:transition-all after:duration-300 group-hover:after:w-full">
                      About Us
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex gap-1 items-center group transition-all duration-300 w-fit text-slate-400 hover:text-white"
                    href="#"
                  >
                    <TbArrowBadgeRightFilled className="transition-transform duration-300 group-hover:translate-x-1" />
                    <span className="relative after:block after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-0 after:bg-sky-500 after:transition-all after:duration-300 group-hover:after:w-full">
                      Contact Us
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex gap-1 items-center group transition-all duration-300 w-fit text-slate-400 hover:text-white"
                    href="#"
                  >
                    <TbArrowBadgeRightFilled className="transition-transform duration-300 group-hover:translate-x-1" />
                    <span className="relative after:block after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-0 after:bg-sky-500 after:transition-all after:duration-300 group-hover:after:w-full">
                      Career
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex gap-1 items-center group transition-all duration-300 w-fit text-slate-400 hover:text-white"
                    href="#"
                  >
                    <TbArrowBadgeRightFilled className="transition-transform duration-300 group-hover:translate-x-1" />
                    <span className="relative after:block after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-0 after:bg-sky-500 after:transition-all after:duration-300 group-hover:after:w-full">
                      Sitemap
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex gap-1 items-center group transition-all duration-300 w-fit text-slate-400 hover:text-white"
                    href="#"
                  >
                    <TbArrowBadgeRightFilled className="transition-transform duration-300 group-hover:translate-x-1" />
                    <span className="relative after:block after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-0 after:bg-sky-500 after:transition-all after:duration-300 group-hover:after:w-full">
                      Privacy Policy
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex gap-1 items-center group transition-all duration-300 w-fit text-slate-400 hover:text-white"
                    href="#"
                  >
                    <TbArrowBadgeRightFilled className="transition-transform duration-300 group-hover:translate-x-1" />
                    <span className="relative after:block after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-0 after:bg-sky-500 after:transition-all after:duration-300 group-hover:after:w-full">
                      Terms & Conditions
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full flex flex-col gap-4">
            <h2 className="text-2xl font-semibold primary-color">
              Technology
            </h2>
            <div className="flex flex-col gap-3">
              <ul>
                <li>
                  <Link
                    className="flex gap-1 items-center group transition-all duration-300 w-fit text-slate-400 hover:text-white"
                    href="#"
                  >
                    <TbArrowBadgeRightFilled className="transition-transform duration-300 group-hover:translate-x-1" />
                    <span className="relative after:block after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-0 after:bg-sky-500 after:transition-all after:duration-300 group-hover:after:w-full">
                      Open Cart Development
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex gap-1 items-center group transition-all duration-300 w-fit text-slate-400 hover:text-white"
                    href="#"
                  >
                    <TbArrowBadgeRightFilled className="transition-transform duration-300 group-hover:translate-x-1" />
                    <span className="relative after:block after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-0 after:bg-sky-500 after:transition-all after:duration-300 group-hover:after:w-full">
                      Magento Development
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex gap-1 items-center group transition-all duration-300 w-fit text-slate-400 hover:text-white"
                    href="#"
                  >
                    <TbArrowBadgeRightFilled className="transition-transform duration-300 group-hover:translate-x-1" />
                    <span className="relative after:block after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-0 after:bg-sky-500 after:transition-all after:duration-300 group-hover:after:w-full">
                      Wordpress Development
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex gap-1 items-center group transition-all duration-300 w-fit text-slate-400 hover:text-white"
                    href="#"
                  >
                    <TbArrowBadgeRightFilled className="transition-transform duration-300 group-hover:translate-x-1" />
                    <span className="relative after:block after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-0 after:bg-sky-500 after:transition-all after:duration-300 group-hover:after:w-full">
                      Node Js Development
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex gap-1 items-center group transition-all duration-300 w-fit text-slate-400 hover:text-white"
                    href="#"
                  >
                    <TbArrowBadgeRightFilled className="transition-transform duration-300 group-hover:translate-x-1" />
                    <span className="relative after:block after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-0 after:bg-sky-500 after:transition-all after:duration-300 group-hover:after:w-full">
                      Python Development
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex gap-1 items-center group transition-all duration-300 w-fit text-slate-400 hover:text-white"
                    href="#"
                  >
                    <TbArrowBadgeRightFilled className="transition-transform duration-300 group-hover:translate-x-1" />
                    <span className="relative after:block after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-0 after:bg-sky-500 after:transition-all after:duration-300 group-hover:after:w-full">
                      Technology List
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full flex flex-col gap-4">
            <h2 className="text-2xl font-semibold primary-color">
              Services
            </h2>
            <div className="flex flex-col gap-3">
              <ul>
                <li>
                  <Link
                    className="flex gap-1 items-center group transition-all duration-300 w-fit text-slate-400 hover:text-white"
                    href="#"
                  >
                    <TbArrowBadgeRightFilled className="transition-transform duration-300 group-hover:translate-x-1" />
                    <span className="relative after:block after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-0 after:bg-sky-500 after:transition-all after:duration-300 group-hover:after:w-full">
                      Software Development
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex gap-1 items-center group transition-all duration-300 w-fit text-slate-400 hover:text-white"
                    href="#"
                  >
                    <TbArrowBadgeRightFilled className="transition-transform duration-300 group-hover:translate-x-1" />
                    <span className="relative after:block after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-0 after:bg-sky-500 after:transition-all after:duration-300 group-hover:after:w-full">
                      Web Development
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex gap-1 items-center group transition-all duration-300 w-fit text-slate-400 hover:text-white"
                    href="#"
                  >
                    <TbArrowBadgeRightFilled className="transition-transform duration-300 group-hover:translate-x-1" />
                    <span className="relative after:block after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-0 after:bg-sky-500 after:transition-all after:duration-300 group-hover:after:w-full">
                      Mobile App Development
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex gap-1 items-center group transition-all duration-300 w-fit text-slate-400 hover:text-white"
                    href="#"
                  >
                    <TbArrowBadgeRightFilled className="transition-transform duration-300 group-hover:translate-x-1" />
                    <span className="relative after:block after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-0 after:bg-sky-500 after:transition-all after:duration-300 group-hover:after:w-full">
                      E-Commerce
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex gap-1 items-center group transition-all duration-300 w-fit text-slate-400 hover:text-white"
                    href="#"
                  >
                    <TbArrowBadgeRightFilled className="transition-transform duration-300 group-hover:translate-x-1" />
                    <span className="relative after:block after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-0 after:bg-sky-500 after:transition-all after:duration-300 group-hover:after:w-full">
                      Digital Marketing
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex gap-1 items-center group transition-all duration-300 w-fit text-slate-400 hover:text-white"
                    href="#"
                  >
                    <TbArrowBadgeRightFilled className="transition-transform duration-300 group-hover:translate-x-1" />
                    <span className="relative after:block after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-0 after:bg-sky-500 after:transition-all after:duration-300 group-hover:after:w-full">
                      SEO Service
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full text-center py-5">
          <p className="text-white text-sm text-nowrap font-extralight flex items-center justify-center gap-1">
           <span className="flex gap-1 text-sm items-center"> <PiCopyrightFill className="text-2xl"/> Recenturesoft  @ 2025. </span>
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
