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

const WhoAreWe = () => {
  return (
    <section className="forWhoWeAre overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center lg:flex-row flex-col">
          <div className="lg:w-1/2 w-full relative z-10 flex flex-col gap-5 p-3">
            <p className="text-sm uppercase m-0 flex items-center gap-2 tracking-wider text-white font-semibold">
              <GiMouse className="text-3xl -rotate-90" /> Know Us More
            </p>
            <h2 className="text-3xl w-fit m-0 lg:text-5xl font-bold primary-gradient">
              Who are We?
            </h2>
            <p className="text-white leading-7 text-lg">
              We are a software and web development company with expertise in
              providing custom technology solutions to organisations worldwide.
              As software and mobile-based development company, we have a team
              of 500+ developers, quality assurance engineers, UX designers, and
              project managers. Our team combines specific domain experience
              along with technological expertise to deliver enterprise-grade
              solutions.
            </p>
          </div>
          <div className="lg:w-1/2 w-full flex justify-center steps-one_image-inner relative p-5">
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
            <div className="relative grid place-content-center border-4 rounded-2xl border-[#2181c2]  steps-one_image w-[500px] text-right h-[400px] ">
              <Image
                src="/images/about-us/who.jpg"
                alt="who"
                height={400}
                width={400}
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-contain rounded-xl"
              />
              <div className="absolute bottom-20 right-20 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 p-4 shadow-lg">
                <IoBulbSharp className="animate-pulse text-2xl text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
