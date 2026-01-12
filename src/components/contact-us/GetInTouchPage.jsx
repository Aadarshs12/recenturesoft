"use client";

import Image from "next/image";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import { GiMouse } from "react-icons/gi";
import "react-phone-input-2/lib/style.css";
import { FaArrowRightLong, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";

const GetInTouchPage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setError,
    clearErrors,
    reset,
  } = useForm();

  React.useEffect(() => {
    loadCaptchaEnginge(6, "#000000", "#ffffff");
  }, []);

  const onSubmit = (data) => {
    if (validateCaptcha(data.captcha)) {
      console.log("Form Data:", data);
      alert("Form submitted successfully!");
      reset();
      loadCaptchaEnginge(6, "#ffffff", "#1e293b", "numbers");
    } else {
      setError("captcha", { type: "manual", message: "Invalid CAPTCHA" });
    }
  };

  return (
    <section className="py-8 lg:py-14 forContactUsPage">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center flex flex-col gap-3 mb-12 lg:mb-16">
          <span className="flex lg:flex-row uppercase flex-col justify-center text-base items-center gap-2 text-gray-500">
            <GiMouse className="text-3xl -rotate-90" /> We'd love to hear from
            you. Send us a message and we'll respond as soon as possible.
          </span>
          <h2 className="text-5xl pb-2 w-fit mx-auto primary-gradient text-center font-bold">
            Get in Touch
          </h2>
          <span className="forBorderSeperator"></span>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          <div className="lg:w-5/12 h-full w-full order-2 lg:order-1 space-y-10">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/contact-us/contact.jpg"
                alt="Contact us"
                width={800}
                height={600}
                className="object-cover w-full h-full"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            <div
              style={{
                backgroundImage: `radial-gradient(circle at center center, transparent,rgb(255,255,255)),repeating-linear-gradient(135deg, rgb(255,255,255) 0px, rgb(255,255,255) 12px,transparent 12px, transparent 19px,rgb(255,255,255) 19px, rgb(255,255,255) 24px,transparent 24px, transparent 28px),repeating-linear-gradient(45deg, rgb(245,245,245) 0px, rgb(245,245,245) 7px,transparent 7px, transparent 14px),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255))`,
              }}
              className="space-y-6 px-10 shadow py-6 rounded-3xl"
            >
              <h3 className="text-2xl font-bold primary-gradient">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a
                  target="_blank"
                  href="mailto:info@recenturesoft.com"
                  className="flex items-center gap-4 text-black"
                >
                  <div className="p-3 bg-slate-200 shadow rounded-full">
                    <FaEnvelope className="secondary-color text-xl" />
                  </div>
                  <span>info@recenturesoft.com</span>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=+917770003288&text=Hi"
                  target="_blank"
                  className="flex items-center gap-4 text-black"
                >
                  <div className="p-3 bg-slate-200 shadow rounded-full">
                    <IoLogoWhatsapp className="secondary-color text-xl" />
                  </div>
                  <span>+91 777 000 3288</span>
                </a>
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/Recenturesoft+Infotech+Pvt+Ltd/@28.618779,77.3771837,17z/data=!3m1!4b1!4m6!3m5!1s0x390cef5e2369b331:0x2d206ff025b772dc!8m2!3d28.6187743!4d77.3797586!16s%2Fg%2F11sq1jzkdp!5m1!1e2?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoASAFQAw%3D%3D"
                  className="flex items-center gap-4 text-black"
                >
                  <div className="p-3 bg-slate-200 shadow rounded-full">
                    <FaLocationDot className="secondary-color text-xl" />
                  </div>
                  <span className="text-balance">
                    A-125, A Block, Sector 63, Noida, Uttar Pradesh, India,
                    201309
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-7/12 h-full w-full order-1 lg:order-2">
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    {...register("fullName", {
                      required: "Full name is required",
                    })}
                  />
                  {errors.fullName && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div className="flex lg:flex-row flex-col gap-7 lg:10 w-full">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <Controller
                      name="phone"
                      control={control}
                      rules={{ required: "Phone number is required" }}
                      render={({ field }) => (
                        <PhoneInput
                          {...field}
                          country={"in"}
                          inputClass="w-full !h-14 !pl-14 !rounded-xl !border-slate-300 focus:!border-blue-500"
                          buttonClass="!rounded-l-xl !border-slate-300 !bg-white"
                          dropdownClass="!rounded-xl"
                        />
                      )}
                    />
                    {errors.phone && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="How can we help you?"
                    className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                  />
                  {errors.subject && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us more about your inquiry..."
                    className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                    {...register("message", {
                      required: "Message is required",
                    })}
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Verification <span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 lg:items-end">
                    <div className="lg:w-2/3 w-full">
                      <input
                        type="text"
                        placeholder="Enter CAPTCHA"
                        className="px-5 w-full py-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        {...register("captcha", {
                          required: "CAPTCHA is required",
                        })}
                        onFocus={() => clearErrors("captcha")}
                      />
                    </div>
                    <div className="bg-[#7d797a] w-7/12 lg:w-1/3 relative rounded-xl p-3">
                      <LoadCanvasTemplate
                        reloadColor="#000000"
                        reloadText="↻"
                      />
                    </div>
                  </div>
                  {errors.captcha && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.captcha.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
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
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchPage;
