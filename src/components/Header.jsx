"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { LiaWhatsapp } from "react-icons/lia";
import { LuAlignRight, LuChevronDown } from "react-icons/lu";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/solutions", label: "Solutions", hasDropdown: true },
    { href: "/about-us", label: "About Us" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/event", label: "Event" },
    { href: "/news", label: "News" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  const openDropdown = () => {
    setIsDropdownOpen(true);
    document.body.classList.add("no-scroll");
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
    document.body.classList.remove("no-scroll");
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isDropdownOpen) {
      closeDropdown();
    } else {
      openDropdown();
    }
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    openDropdown();
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      closeDropdown();
    }, 200);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("no-scroll");
    };
  }, []);

  useEffect(() => {
    if (!isDropdownOpen) {
      document.body.classList.remove("no-scroll");
    }
  }, [isDropdownOpen]);

  return (
    <header className="relative flex justify-between py-6 bg-white items-center container mx-auto px-4 sm:px-6 lg:px-8 z-50">
      <Link href="/" className="logo w-1/2 md:w-1/5">
        <Image
          src="/images/logo.png"
          alt="Recenturesoft Logo"
          height={115}
          width={500}
          priority
          quality={95}
          className="w-full max-w-xs h-auto"
        />
      </Link>

      <div className="md:w-4/5 w-1/2 items-center justify-evenly text-lg hidden lg:flex">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href || pathname.startsWith(item.href + "/");

          if (item.hasDropdown) {
            return (
              <div
                key={item.href}
                className="relative"
                ref={dropdownRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={toggleDropdown}
                  className={`flex items-center gap-1 transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? "secondary-color font-semibold"
                      : "text-black hover:text-[#2181c2]"
                  }`}
                >
                  {item.label}
                  <LuChevronDown
                    className={`text-sm transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`${
                    isDropdownOpen
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-2 scale-95 pointer-events-none"
                  } fixed inset-x-0 top-24 mx-auto w-full max-w-7xl forDropdownBg rounded-3xl shadow-2xl border-2 border-slate-300 z-[9999] transition-all duration-300 ease-in-out`}
                  style={{ left: "50%", transform: "translateX(-50%)" }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="px-8 py-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                      <div className="hidden lg:block lg:col-span-5">
                        <div className="p-6 bg-[#ffffff38] shadow rounded-3xl">
                          <Image
                            src="/images/rsoft.jpg"
                            alt="Recenturesoft Infotech"
                            width={640}
                            height={400}
                            priority
                            quality={100}
                            sizes="(max-width: 768px) 100vw, 300px"
                            className="w-full h-40 object-cover rounded-2xl shadow-2xl border-4 border-white"
                          />
                          <div className="mt-6">
                            <h3 className="text-2xl font-bold primary-gradient">
                              Recenturesoft Infotech Pvt Ltd
                            </h3>
                            <p className="mt-3 text-gray-700 text-base leading-relaxed">
                              A Leading Software Development Company in India
                              that Offers the Best Custom Software Development,
                              eCommerce Website Development, Mobile App
                              Development and SEO Services.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-7 max-h-[65vh] overflow-y-auto overflow-x-hidden">
                        <ul className="text-lg">
                          <li className="dropdown group">
                            <a
                              href="#"
                              className="flex items-center justify-between font-semibold text-gray-800 transition mt-3"
                            >
                              Software Development
                              <span className="ml-2 transition-transform group-hover:rotate-180">
                                <LuChevronDown className="inline" />
                              </span>
                            </a>
                            <ul className="sub-menu mt-3 pl-2 space-y-2 border-l-2 border-gray-400 hover:border-[#db3029]">
                              <li>
                                <Link
                                  href="#"
                                  className="block py-1 text-gray-600 hover:text-[#2181c2] transition"
                                >
                                  CRM
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  className="block py-1 text-gray-600 hover:text-[#2181c2] transition"
                                >
                                  CMS
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  className="block py-1 text-gray-600 hover:text-[#2181c2] transition"
                                >
                                  Salesforce
                                </Link>
                              </li>
                            </ul>
                          </li>

                          <li className="dropdown group">
                            <a
                              href="#"
                              className="flex items-center justify-between font-semibold text-gray-800 transition mt-3"
                            >
                              Web Development
                              <span className="ml-2 transition-transform group-hover:rotate-180">
                                <LuChevronDown className="inline" />
                              </span>
                            </a>
                            <ul className="sub-menu mt-3 pl-6 space-y-2 border-l-2 border-gray-400 hover:border-[#db3029]">
                              <li>
                                <Link
                                  href="#"
                                  className="block py-1 text-gray-600 hover:text-[#2181c2] transition"
                                >
                                  Web Design
                                </Link>
                              </li>
                            </ul>
                          </li>

                          <li className="dropdown group">
                            <a
                              href="#"
                              className="flex items-center justify-between font-semibold text-gray-800 transition mt-3"
                            >
                              E-Commerce
                              <span className="ml-2 transition-transform group-hover:rotate-180">
                                <LuChevronDown className="inline" />
                              </span>
                            </a>
                            <ul className="sub-menu mt-3 pl-6 space-y-2 border-l-2 border-gray-400 hover:border-[#db3029]">
                              <li>
                                <Link
                                  href="#"
                                  className="block py-1 text-gray-600 hover:text-[#2181c2] transition"
                                >
                                  Opencart Development
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  className="block py-1 text-gray-600 hover:text-[#2181c2] transition"
                                >
                                  Magento Development
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  className="block py-1 text-gray-600 hover:text-[#2181c2] transition"
                                >
                                  eBay Store Management
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  className="block py-1 text-gray-600 hover:text-[#2181c2] transition"
                                >
                                  Amazon Store Management
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  className="block py-1 text-gray-600 hover:text-[#2181c2] transition"
                                >
                                  Wordpress Development
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  className="block py-1 text-gray-600 hover:text-[#2181c2] transition"
                                >
                                  Shopify Development
                                </Link>
                              </li>
                            </ul>
                          </li>

                          <li className="dropdown group">
                            <a
                              href="#"
                              className="flex items-center justify-between font-semibold text-gray-800 transition mt-3"
                            >
                              Mobile App Development
                              <span className="ml-2 transition-transform group-hover:rotate-180">
                                <LuChevronDown className="inline" />
                              </span>
                            </a>
                            <ul className="sub-menu mt-3 pl-6 space-y-2 border-l-2 border-gray-400 hover:border-[#db3029]">
                              <li>
                                <Link
                                  href="#"
                                  className="block py-1 text-gray-600 hover:text-[#2181c2] transition"
                                >
                                  iPhone Apps Development
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  className="block py-1 text-gray-600 hover:text-[#2181c2] transition"
                                >
                                  iPad Apps Development
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  className="block py-1 text-gray-600 hover:text-[#2181c2] transition"
                                >
                                  Android Apps Development
                                </Link>
                              </li>
                            </ul>
                          </li>

                          <li className="dropdown group">
                            <a
                              href="#"
                              className="flex items-center justify-between font-semibold text-gray-800 transition mt-3"
                            >
                              Technology Solution
                              <span className="ml-2 transition-transform group-hover:rotate-180">
                                <LuChevronDown className="inline" />
                              </span>
                            </a>
                            <ul className="sub-menu mt-3 pl-6 space-y-2 border-l-2 border-gray-400 hover:border-[#db3029]">
                              <li>
                                <Link
                                  href="#"
                                  className="block py-1 text-gray-600 hover:text-[#2181c2] transition"
                                >
                                  Html5 Development
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  className="block py-1 text-gray-600 hover:text-[#2181c2] transition"
                                >
                                  Node Js Development
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  className="block py-1 text-gray-600 hover:text-[#2181c2] transition"
                                >
                                  Java Development
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  className="block py-1 text-gray-600 hover:text-[#2181c2] transition"
                                >
                                  Flask Development
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  className="block py-1 text-gray-600 hover:text-[#2181c2] transition"
                                >
                                  Prestashop Development
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  className="block py-1 text-gray-600 hover:text-[#2181c2] transition"
                                >
                                  Python Development
                                </Link>
                              </li>
                            </ul>
                          </li>

                          <li className="dropdown group">
                            <a
                              href="#"
                              className="flex items-center justify-between font-semibold text-gray-800 transition mt-3"
                            >
                              Digital Marketing
                              <span className="ml-2 transition-transform group-hover:rotate-180">
                                <LuChevronDown className="inline" />
                              </span>
                            </a>
                            <ul className="sub-menu mt-3 pl-6 space-y-2 border-l-2 border-gray-400 hover:border-[#db3029]">
                              <li>
                                <Link
                                  href="#"
                                  className="block py-1 text-gray-600 hover:text-[#2181c2] transition"
                                >
                                  SEO Service
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  className="block py-1 text-gray-600 hover:text-[#2181c2] transition"
                                >
                                  SEO Package
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  className="block py-1 text-gray-600 hover:text-[#2181c2] transition"
                                >
                                  Social Networking
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  className="block py-1 text-gray-600 hover:text-[#2181c2] transition"
                                >
                                  Content Writing
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`${
                isActive
                  ? "secondary-color font-semibold"
                  : "text-black hover:text-[#2181c2] border-b-2 border-dashed border-transparent"
              } transition-colors duration-200`}
            >
              {item.label}
            </Link>
          );
        })}

        <div className="whatsapp">
          <a
            href="https://api.whatsapp.com/send?phone=+917770003288&text=Hi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl px-3 py-2 shadow-lg hover:shadow-xl border border-green-200 transition-all duration-300"
            style={{
              backgroundImage: "linear-gradient(to right, #ecfdf5, #d9f99d)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundImage =
                "linear-gradient(to right, #d9f99d, #bbf7e3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundImage =
                "linear-gradient(to right, #ecfdf5, #d9f99d)";
            }}
          >
            <LiaWhatsapp className="text-5xl text-[#25D366] drop-shadow-md" />
            <div className="text-left">
              <div className="text-xs font-medium text-gray-600">
                WhatsApp Us
              </div>
              <div className="font-bold text-lg">+91 777 000 3288</div>
            </div>
          </a>
        </div>
      </div>
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger>
            <LuAlignRight className="text-4xl cursor-pointer text-gray-800" />
          </SheetTrigger>
          <SheetContent className="forSideBarEffect">
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription className="flex flex-col gap-3">
                {navItems.map((item) => {
                  const isActive =
                    pathname === item.href ||
                    pathname.startsWith(item.href + "/");

                  if (item.hasDropdown) {
                    return (
                      <div
                        key={item.href}
                        className="relative"
                        ref={dropdownRef}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <button
                          onClick={toggleDropdown}
                          className={`flex text-lg items-center gap-1 transition-colors duration-200 cursor-pointer ${
                            isActive
                              ? "primary-color font-bold"
                              : "lg:text-black text-white hover:text-[#2181c2]"
                          }`}
                        >
                          {item.label}
                          <LuChevronDown
                            className={`text-md transition-transform duration-200 ${
                              isDropdownOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <div
                          className={`${
                            isDropdownOpen
                              ? "opacity-100 translate-y-0 scale-100"
                              : "opacity-0 translate-y-2 scale-95 pointer-events-none"
                          } fixed inset-x-0 top-24 mx-auto w-full max-w-7xl forDropdownList rounded-3xl shadow-2xl border-2 border-slate-300 z-[9999] transition-all duration-300 ease-in-out`}
                          style={{ left: "50%", transform: "translateX(-50%)" }}
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          <div className="px-4 py-5">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                              <div className="lg:col-span-7 max-h-[65vh] overflow-y-auto overflow-x-hidden">
                                <ul className="text-lg">
                                  <li className="dropdown group">
                                    <a
                                      href="#"
                                      className="flex items-center justify-between font-semibold text-slate-100 transition"
                                    >
                                      Software Development
                                      <span className="ml-2 transition-transform group-hover:rotate-180">
                                        <LuChevronDown className="inline" />
                                      </span>
                                    </a>
                                    <ul className="sub-menu mt-3 pl-2 space-y-2 border-l-2 border-[#2181c2] hover:border-[#db3029]">
                                      <li>
                                        <Link
                                          href="#"
                                          className="block py-1 text-slate-200 hover:text-[#2181c2] transition"
                                        >
                                          CRM
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          href="#"
                                          className="block py-1 text-slate-200 hover:text-[#2181c2] transition"
                                        >
                                          CMS
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          href="#"
                                          className="block py-1 text-slate-200 hover:text-[#2181c2] transition"
                                        >
                                          Salesforce
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>

                                  <li className="dropdown group">
                                    <a
                                      href="#"
                                      className="flex items-center justify-between font-semibold text-slate-100 transition mt-3"
                                    >
                                      Web Development
                                      <span className="ml-2 transition-transform group-hover:rotate-180">
                                        <LuChevronDown className="inline" />
                                      </span>
                                    </a>
                                    <ul className="sub-menu mt-3 pl-2 space-y-2 border-l-2 border-[#2181c2] hover:border-[#db3029]">
                                      <li>
                                        <Link
                                          href="#"
                                          className="block py-1 text-slate-200 hover:text-[#2181c2] transition"
                                        >
                                          Web Design
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>

                                  <li className="dropdown group">
                                    <a
                                      href="#"
                                      className="flex items-center justify-between font-semibold text-slate-100 transition mt-3"
                                    >
                                      E-Commerce
                                      <span className="ml-2 transition-transform group-hover:rotate-180">
                                        <LuChevronDown className="inline" />
                                      </span>
                                    </a>
                                    <ul className="sub-menu mt-3 pl-2 space-y-2 border-l-2 border-[#2181c2] hover:border-[#db3029]">
                                      <li>
                                        <Link
                                          href="#"
                                          className="block py-1 text-slate-200 hover:text-[#2181c2] transition"
                                        >
                                          Opencart Development
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          href="#"
                                          className="block py-1 text-slate-200 hover:text-[#2181c2] transition"
                                        >
                                          Magento Development
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          href="#"
                                          className="block py-1 text-slate-200 hover:text-[#2181c2] transition"
                                        >
                                          eBay Store Management
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          href="#"
                                          className="block py-1 text-slate-200 hover:text-[#2181c2] transition"
                                        >
                                          Amazon Store Management
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          href="#"
                                          className="block py-1 text-slate-200 hover:text-[#2181c2] transition"
                                        >
                                          Wordpress Development
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          href="#"
                                          className="block py-1 text-slate-200 hover:text-[#2181c2] transition"
                                        >
                                          Shopify Development
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>

                                  <li className="dropdown group">
                                    <a
                                      href="#"
                                      className="flex items-center justify-between font-semibold text-slate-100 transition mt-3"
                                    >
                                      Mobile App Development
                                      <span className="ml-2 transition-transform group-hover:rotate-180">
                                        <LuChevronDown className="inline" />
                                      </span>
                                    </a>
                                    <ul className="sub-menu mt-3 pl-2 space-y-2 border-l-2 border-[#2181c2] hover:border-[#db3029]">
                                      <li>
                                        <Link
                                          href="#"
                                          className="block py-1 text-slate-200 hover:text-[#2181c2] transition"
                                        >
                                          iPhone Apps Development
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          href="#"
                                          className="block py-1 text-slate-200 hover:text-[#2181c2] transition"
                                        >
                                          iPad Apps Development
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          href="#"
                                          className="block py-1 text-slate-200 hover:text-[#2181c2] transition"
                                        >
                                          Android Apps Development
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>

                                  <li className="dropdown group">
                                    <a
                                      href="#"
                                      className="flex items-center justify-between font-semibold text-slate-100 transition mt-3"
                                    >
                                      Technology Solution
                                      <span className="ml-2 transition-transform group-hover:rotate-180">
                                        <LuChevronDown className="inline" />
                                      </span>
                                    </a>
                                    <ul className="sub-menu mt-3 pl-2 space-y-2 border-l-2 border-[#2181c2] hover:border-[#db3029]">
                                      <li>
                                        <Link
                                          href="#"
                                          className="block py-1 text-slate-200 hover:text-[#2181c2] transition"
                                        >
                                          Html5 Development
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          href="#"
                                          className="block py-1 text-slate-200 hover:text-[#2181c2] transition"
                                        >
                                          Node Js Development
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          href="#"
                                          className="block py-1 text-slate-200 hover:text-[#2181c2] transition"
                                        >
                                          Java Development
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          href="#"
                                          className="block py-1 text-slate-200 hover:text-[#2181c2] transition"
                                        >
                                          Flask Development
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          href="#"
                                          className="block py-1 text-slate-200 hover:text-[#2181c2] transition"
                                        >
                                          Prestashop Development
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          href="#"
                                          className="block py-1 text-slate-200 hover:text-[#2181c2] transition"
                                        >
                                          Python Development
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>

                                  <li className="dropdown group">
                                    <a
                                      href="#"
                                      className="flex items-center justify-between font-semibold text-slate-100 transition mt-3"
                                    >
                                      Digital Marketing
                                      <span className="ml-2 transition-transform group-hover:rotate-180">
                                        <LuChevronDown className="inline" />
                                      </span>
                                    </a>
                                    <ul className="sub-menu mt-3 pl-2 space-y-2 border-l-2 border-[#2181c2] hover:border-[#db3029]">
                                      <li>
                                        <Link
                                          href="#"
                                          className="block py-1 text-slate-200 hover:text-[#2181c2] transition"
                                        >
                                          SEO Service
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          href="#"
                                          className="block py-1 text-slate-200 hover:text-[#2181c2] transition"
                                        >
                                          SEO Package
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          href="#"
                                          className="block py-1 text-slate-200 hover:text-[#2181c2] transition"
                                        >
                                          Social Networking
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          href="#"
                                          className="block py-1 text-slate-200 hover:text-[#2181c2] transition"
                                        >
                                          Content Writing
                                        </Link>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`${
                        isActive
                          ? "primary-color font-bold"
                          : "text-white lg:text-black hover:text-[#2181c2]"
                      } transition-colors duration-200 text-lg`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
