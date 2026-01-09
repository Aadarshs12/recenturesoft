"use client";

import Image from "next/image";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FaArrowRightLong, FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";

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
      // Here you can send the data to your backend/API
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
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold primary-gradient w-fit mx-auto mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="flex gap-12 lg:gap-20 items-start">
          {/* Left Side - Image + Contact Info */}
          <div className="lg:w-2/5 order-2 lg:order-1 space-y-10">
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

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-slate-900">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-slate-700">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <FaEnvelope className="text-blue-600 text-xl" />
                  </div>
                  <span>hello@example.com</span>
                </div>
                <div className="flex items-center gap-4 text-slate-700">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <FaPhone className="text-blue-600 text-xl" />
                  </div>
                  <span>+91 123 456 7890</span>
                </div>
                <div className="flex items-center gap-4 text-slate-700">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <FaLocationDot className="text-blue-600 text-xl" />
                  </div>
                  <span>123 Business Street, City, Country</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 order-1 lg:order-2">
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    {...register("fullName", { required: "Full name is required" })}
                  />
                  {errors.fullName && <p className="mt-2 text-sm text-red-600">{errors.fullName.message}</p>}
                </div>

               <div className="flex justify-between w-full">
                 {/* Email */}
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
                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
                </div>

                {/* Phone */}
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
                  {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>}
                </div>
               </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="How can we help you?"
                    className="w-full px-5 py-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    {...register("subject", { required: "Subject is required" })}
                  />
                  {errors.subject && <p className="mt-2 text-sm text-red-600">{errors.subject.message}</p>}
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
                    {...register("message", { required: "Message is required" })}
                  />
                  {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>}
                </div>

                {/* Captcha */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Verification <span className="text-red-500">*</span>
                  </label>
                  <div className="flex justify-between items-end">
                    <div className="w-2/3">
                      <input
                        type="text"
                        placeholder="Enter CAPTCHA"
                        className="px-5 w-full py-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        {...register("captcha", { required: "CAPTCHA is required" })}
                        onFocus={() => clearErrors("captcha")}
                      />
                    </div>
                    <div className="bg-[#7d797a] w-1/3 relative rounded-xl p-3">
                      <LoadCanvasTemplate reloadColor="#000000" reloadText="↻" />
                    </div>
                  </div>
                  {errors.captcha && <p className="mt-2 text-sm text-red-600">{errors.captcha.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Send Message
                  <FaArrowRightLong className="text-lg" />
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