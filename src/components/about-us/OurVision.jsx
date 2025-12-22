"use client";
import React, { useEffect, useRef } from "react";
import { GiMouse } from "react-icons/gi";
import { IoBulbSharp } from "react-icons/io5";
import { MdOutlineDoubleArrow } from "react-icons/md";
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

const OurVision = () => {
  return (
    <section
      style={{
        backgroundImage: `repeating-linear-gradient(
      188deg,
      hsla(171, 0%, 87%, 0.12) 0px,
      hsla(171, 0%, 87%, 0.12) 2px,
      transparent 2px,
      transparent 5px,
      hsla(171, 0%, 87%, 0.12) 5px,
      hsla(171, 0%, 87%, 0.12) 7px,
      transparent 7px,
      transparent 9px,
      hsla(171, 0%, 87%, 0.12) 9px,
      hsla(171, 0%, 87%, 0.12) 11px
    ),
    repeating-linear-gradient(
      162deg,
      hsla(171, 0%, 87%, 0.12) 0px,
      hsla(171, 0%, 87%, 0.12) 2px,
      transparent 2px,
      transparent 5px,
      hsla(171, 0%, 87%, 0.12) 5px,
      hsla(171, 0%, 87%, 0.12) 7px,
      transparent 7px,
      transparent 14px,
      hsla(171, 0%, 87%, 0.12) 14px,
      hsla(171, 0%, 87%, 0.12) 16px
    ),
    repeating-linear-gradient(
      0deg,
      rgb(251, 232, 232) 0px,
      rgb(251, 232, 232) 0px,
      transparent 0px,
      transparent 1px,
      rgb(251, 232, 232) 1px,
      rgb(251, 232, 232) 4px,
      transparent 4px,
      transparent 5px,
      rgb(251, 232, 232) 5px,
      rgb(251, 232, 232) 8px
    ),
    repeating-linear-gradient(
      90deg,
      rgb(251, 232, 232) 0px,
      rgb(251, 232, 232) 0px,
      transparent 0px,
      transparent 1px,
      rgb(251, 232, 232) 1px,
      rgb(251, 232, 232) 4px,
      transparent 4px,
      transparent 5px,
      rgb(251, 232, 232) 5px,
      rgb(251, 232, 232) 8px
    ),
    linear-gradient(90deg, rgb(251, 251, 251), rgb(251, 251, 251))`,
      }}
      className="py-8 lg:py-14"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center lg:flex-row flex-col">
          <div className="lg:w-1/2 w-full relative z-10 flex flex-col gap-5 p-3">
            <p className="text-sm uppercase m-0 flex items-center gap-2 tracking-wider text-gray-600 font-semibold">
              <GiMouse className="text-3xl -rotate-90" /> Imagining what’s
              possible
            </p>
            <h2 className="text-3xl w-fit m-0 lg:text-5xl font-bold primary-gradient">
              Our Vision
            </h2>
            <p className="text-gray-900">
              We believe in simplicity for solutions. Our team takes pride in
              focusing and developing easy, accessible and feasible IT solutions
              that are easy to operate for both you and your business. We strive
              to put actions into a logic that draw a fruitful result that
              exceeds your expectations on a technological scale. At
              Recenturesoft, we believe in developing a sustainable software
              environment while leaving a positive imprint on society.
            </p>
            <div className="flex flex-col gap-3 mb-5">
              <div className="flex flex-col gap-3">
                <span className="flex w-full items-center gap-2 text-gray-900">
                  <MdOutlineDoubleArrow /> A team of 500+ software enthusiasts
                </span>
                <span className="flex w-full items-center gap-2 text-gray-900">
                  <MdOutlineDoubleArrow /> Complete transparency for providing
                  global IT solutions
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <span className="flex w-full items-center gap-2 text-gray-900">
                  <MdOutlineDoubleArrow /> 750+ satisfied clients
                </span>
                <span className="flex w-full items-center gap-2 text-gray-900">
                  <MdOutlineDoubleArrow /> Flexible communication for accessible
                  project delivery
                </span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full flex justify-center steps-one_image-inner relative p-5">
            <div className="relative grid place-content-center rounded-2xl forClientAndCustormer bg-white shadow  steps-one_image w-[500px] text-right h-[400px] ">
              <Image
                src="/images/about-us/vission.webp"
                alt="who"
                height={400}
                width={400}
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-contain rounded-xl"
              />
              <div className="absolute top-10 left-10 rounded-full bg-gradient-to-r from-blue-500 to-red-600 p-4 shadow-lg">
                <IoBulbSharp className="animate-pulse text-2xl text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
