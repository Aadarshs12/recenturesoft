"use client";
import React, { useEffect, useRef } from "react";
import { GiMouse } from "react-icons/gi";
import { IoBulbSharp } from "react-icons/io5";
import Image from "next/image";

const ParallaxLayer = ({
  children,
  scale = 1.3,
  delay = 0.4,
  orientation = "up",
  className = "",
}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let instance = null;

    import("simple-parallax-js/vanilla")
      .then((module) => {
        if (ref.current) {
          instance = new module.default(ref.current, {
            scale,
            delay,
            orientation,
            overflow: true,
            transition: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          });
        }
      })
      .catch((err) => console.warn("Parallax failed to load:", err));

    return () => {
      if (instance && instance.destroy) instance.destroy();
    };
  }, [scale, delay, orientation]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section className="py-5 lg:py-8">
      <div className="container mx-auto px-4">
        <div className="flex">
          <div className="w-1/2 flex flex-col gap-5 p-3">
            <p className="text-sm uppercase m-0 flex items-center gap-2 tracking-wider text-gray-500 font-semibold">
              <GiMouse className="text-3xl -rotate-90" /> How it works
            </p>
            <h2 className="text-3xl m-0 lg:text-5xl font-bold primary-gradient">
              A Glimpse of what We have for You
            </h2>
            <p>
              We have certain expertise in creating scalable digital solutions
              like website development, software development, organic and paid
              marketing for your business.
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full w-20 bg-slate-300 grid place-content-center shadow-2xl">
                  <Image
                    src="/images/technical.png"
                    alt="technical support"
                    className="w-12 h-12"
                    height={60}
                    width={60}
                  ></Image>
                </div>

                <div>
                  <h3 className="text-black text-xl font-semibold">
                    89% IT Consultation
                  </h3>
                  <p>
                    Experienced professionals to offer software, website and
                    marketing services.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-slate-300 shadow-2xl">
                  <Image
                    src="/images/management.png"
                    alt="management"
                    className="w-12 h-12"
                    height={60}
                    width={60}
                  ></Image>
                </div>
                <div>
                  <h3 className="text-black text-xl font-semibold">
                    67% Management
                  </h3>
                  <p>
                    A dedicated team to walk you through our packages and
                    offers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-center steps-one_image-inner relative p-5">
            <ParallaxLayer
              scale={1.5}
              delay={0.6}
              orientation="up"
              className="steps-one_pattern-layer"
            >
              <div className="absolute inset-0 -z-10 pointer-events-none">
                <div
                  className="h-[600px] w-[600px]"
                  style={{
                    backgroundImage: "url('/images/pattern-4.png')",
                    backgroundSize: "600px",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </div>
            </ParallaxLayer>
            <div className="relative border-4 rounded-2xl border-[#2181c2] pr-8 pt-8 steps-one_image w-[400px] text-right h-[400px] ">
              <Image
                src="/images/howItWorks.png"
                alt="FAQ"
                fill
                className="object-contain p-5"
              />
              <div className="absolute bottom-5 right-8 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 p-4 shadow-lg">
                <IoBulbSharp className="animate-pulse text-2xl text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
