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
                height={500}
                className="object-cover w-full h-full"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            <div>
              <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3663947963078!2d77.3771836745094!3d28.618778984706882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef5e2369b331%3A0x2d206ff025b772dc!2sRecenturesoft%20Infotech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1768231228438!5m2!1sen!2sin"
        className="w-full h-[280px] rounded-3xl shadow-2xl"
        style={{border: `0`}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
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
