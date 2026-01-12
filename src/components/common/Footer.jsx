"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { Button } from "../../components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PiCopyrightFill } from "react-icons/pi";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useForm, Controller } from "react-hook-form";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const Footer = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const {
    register,
    handleSubmit,
    control,
    setError,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setTimeout(() => {
      if (location.pathname === "/") {
        setOpen(true);
      }
    }, 10000);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        loadCaptchaEnginge(6);
      }, 100);
    }
  }, [open]);

  const onSubmit = (data) => {
    if (!validateCaptcha(data.captcha)) {
      setError("captcha", {
        type: "manual",
        message: "Captcha does not match",
      });
      loadCaptchaEnginge(6);
      return;
    }

    clearErrors("captcha");
    console.log(data);
    reset();
    setTimeout(() => {
      toast("✅ Consultation request has been sent!", {
        position: "top-right",
      });
    }, 2000);
    setTimeout(() => {
      setOpen(false);
    }, 1000);
  };

  return (
    <>
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
              <h2 className="text-2xl font-semibold primary-color">Services</h2>
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
              <span className="flex gap-1 text-sm items-center">
                {" "}
                <PiCopyrightFill className="text-2xl" /> Recenturesoft @ 2025.{" "}
              </span>
              All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      { pathname !== "/contact-us" && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <div className="forGetQuoteModal w-fit border-0" variant="outline">
              <Image
                height={80}
                width={80}
                src="/images/get-quote.webp"
                alt="get-quote-img"
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover"
              ></Image>
            </div>
          </DialogTrigger>

          <DialogContent
            className="
    forMirrorEffectModal
    sm:max-w-[800px]
    sm:max-h-[80vh]
    max-h-[90vh]
    overflow-hidden
    rounded-lg
    shadow-xl
  "
          >
            <DialogHeader>
              <DialogTitle className="text-white text-xl">
                Free Consultation ! Talk to Our{" "}
                <span className="primary-gradient font-extrabold text-2xl">
                  Professionals Now !
                </span>
              </DialogTitle>
            </DialogHeader>

            <div className="flex lg:flex-row flex-col gap-4 overflow-y-auto max-h-[70vh] sm:max-h-[85vh] p-2">
              <div className="lg:w-1/2 w-full cursor-pointer lg:h-full">
                <Image
                  className="rounded-xl lg:h-full object-cover"
                  height={400}
                  width={400}
                  src="/images/contact-us/contact.jpg"
                  alt="modal-img"
                ></Image>
              </div>
              <div className="lg:w-1/2 w-full px-5 lg:h-full">
                <form
                  className="flex flex-col gap-3"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div>
                    <input
                      className="border-b h-8 outline-0 border-slate-200  focus:border-[#db3029] placeholder:text-slate-200 text-white"
                      placeholder="Enter Full Name"
                      type="text"
                      {...register("fullName", {
                        required: "Full Name is required",
                      })}
                      style={{ width: "100%", padding: 8, marginTop: 5 }}
                    />
                    {errors.fullName && (
                      <p style={{ color: "red" }}>{errors.fullName.message}</p>
                    )}
                  </div>
                  <div>
                    <input
                      placeholder="Enter Email"
                      className="border-b h-8 outline-0 focus:border-[#db3029] border-slate-200 placeholder:text-slate-200 text-white"
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                          message: "Invalid email address",
                        },
                      })}
                      style={{ width: "100%", padding: 8, marginTop: 5 }}
                    />
                    {errors.email && (
                      <p style={{ color: "red" }}>{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <Controller
                      name="phone"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: "Phone number is required",
                        minLength: {
                          value: 10,
                          message: "Phone number must be at least 10 digits",
                        },
                      }}
                      render={({ field }) => (
                        <PhoneInput
                          className="text-white h-8"
                          {...field}
                          country={"in"}
                          onChange={field.onChange}
                          inputProps={{
                            placeholder: "Enter Phone Number",
                          }}
                          containerStyle={{ width: "100%" }} // make container full width
                          inputStyle={{
                            width: "100%",
                            border: "none", // remove default border
                            borderBottom: "1px solid #e2e8f0", // bottom border like Tailwind gray-300
                            borderRadius: 0, // remove rounded corners
                            backgroundColor: "transparent", // transparent
                            padding: "8px 0", // top/bottom padding
                            fontSize: 16,
                            outline: "none",
                            textIndent: "45px",
                            color: "#f2f2f2",
                          }}
                          buttonStyle={{
                            border: "none", // remove flag button border
                            background: "transparent", // transparent background
                          }}
                          dropdownStyle={{
                            border: "1px solid #d1d5db",
                          }}
                        />
                      )}
                    />

                    {errors.phone && (
                      <p style={{ color: "red" }}>{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <input
                      placeholder="Write Subject"
                      className="border-b h-8 outline-0 focus:border-[#db3029] border-slate-200 placeholder:text-slate-200 text-white"
                      type="text"
                      {...register("subject", {
                        required: "Subject is required",
                      })}
                      style={{ width: "100%", padding: 8, marginTop: 5 }}
                    />
                    {errors.subject && (
                      <p style={{ color: "red" }}>{errors.subject.message}</p>
                    )}
                  </div>

                  {/* Your Message */}
                  <div>
                    <textarea
                      placeholder="Your Message"
                      className="border-b outline-0 border-slate-200 placeholder:text-slate-200 text-white"
                      {...register("message", {
                        required: "Message is required",
                      })}
                      style={{
                        width: "100%",
                        padding: 8,
                        height: 80, // fixed height in pixels
                        borderBottom: "2px solid #d1d5db",
                        borderRadius: 0,
                        backgroundColor: "transparent",
                        resize: "vertical", // allow user to resize vertically only
                      }}
                    />
                    {errors.message && (
                      <p style={{ color: "red" }}>{errors.message.message}</p>
                    )}
                  </div>

                  <div className="forCaptchaAlignment">
                    <input
                      placeholder="Enter Captcha"
                      className="border-b h-8 outline-0 focus:border-[#db3029] border-slate-200 placeholder:text-slate-200 text-white"
                      {...register("captcha", {
                        required: "Captcha is required",
                      })}
                      style={{
                        width: "100%",
                        padding: 8,
                        background: "transparent",
                      }}
                    />
                    <LoadCanvasTemplate reloadText="↻" />

                    {errors.captcha && (
                      <p style={{ color: "red" }}>{errors.captcha.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="text-white w-fit  flex justify-end mt-5"
                  >
                    <div
                      href="#"
                      className="inline-flex transition-all duration-300 ease-in-out items-center gap-2 btn-gradient py-1 px-6 rounded-lg font-medium"
                    >
                      Submit{" "}
                      <span className="bg-black p-3 rounded-full -rotate-45">
                        <FaArrowRightLong />
                      </span>
                    </div>
                  </Button>
                </form>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default Footer;
