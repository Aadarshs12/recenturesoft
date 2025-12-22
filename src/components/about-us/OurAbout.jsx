"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { GiMouse } from "react-icons/gi";
import { MdOutlineDoubleArrow } from "react-icons/md";

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

export default function OurAbout() {
  return (
    <section className="py-10 lg:py-14 forAboutSection relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <ParallaxLayer
          scale={1.5}
          delay={0.6}
          orientation="up"
          className="about-one_pattern-two"
        >
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: "url('/images/pattern-3.png')",
                backgroundSize: "600px",
                backgroundRepeat: "repeat",
              }}
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          scale={1.3}
          delay={0.8}
          orientation="down"
          className="about-one_color-layer"
        >
          <div className="absolute inset-0 -z-20 pointer-events-none">
            <div className="h-full w-full bg-gradient-to-br from-cyan-500/10 via-purple-600/10 to-pink-500/10" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          scale={1.5}
          delay={0.6}
          orientation="up"
          className="about-one_pattern"
        >
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div
              className="h-full w-full opacity-20"
              style={{
                backgroundImage: "url('/images/pattern-2.png')",
                backgroundSize: "600px",
                backgroundRepeat: "repeat",
              }}
            />
          </div>
        </ParallaxLayer>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute top-6 bg-slate-50 shadow-2xl left-6 -rotate-90 rounded-lg p-4 text-center z-10 ">
              <h3 className="text-3xl font-bold primary-gradient">100+</h3>
              <div className="text-sm font-medium text-black">
                Our Active Members
              </div>
            </div>
            <div className="about-one_color-layer-two"></div>

            <div className="relative forAboutPageBorder -z-10">
              <Image
                src="/images/about-us/about-us-1.jpg"
                alt="About Recenturesoft Infotech"
                width={600}
                sizes="(max-width: 768px) 100vw, 300px"
                height={500}
                className="w-full forAboutPageBorder p-5 object-contain h-[350px] rounded-lg"
                priority
              />
            </div>
          </div>

          <div className="relative z-50">
            <p className="text-sm uppercase tracking-wider flex items-center gap-2 tertiary-color font-semibold mb-2">
              <GiMouse className="text-3xl -rotate-90" />
              Our About
            </p>

            <h3 className="text-3xl w-fit lg:text-4xl font-bold primary-gradient mb-6 leading-tight">
              About Us
            </h3>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Recenturesoft Infotech is a premium software and application
              development company with 10 years of experience. We have been
              focusing on end-to-end business applications, database software,
              CRM, Management systems, integrated programs, utility programs and
              much more. With a client base of more than 900 accounts, we have
              been happy to serve globally from countries like the USA, UK,
              France, Germany, Italy, etc.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Our software and management teams have a wide experience in
              development and always try to fulfil the client's expectations
              with intensive support throughout your project.
            </p>

            <div className="flex flex-col gap-3 mb-5">
              <div className="flex">
                <span className="flex w-1/2 items-center gap-2 text-gray-600">
                  <MdOutlineDoubleArrow /> Professional Services
                </span>
                <span className="flex w-1/2 items-center gap-2 text-gray-600">
                  <MdOutlineDoubleArrow /> Experience Advisors
                </span>
              </div>
              <div className="flex">
                <span className="flex w-1/2 items-center gap-2 text-gray-600">
                  <MdOutlineDoubleArrow /> Software Development
                </span>
                <span className="flex w-1/2 items-center gap-2 text-gray-600">
                  <MdOutlineDoubleArrow /> Product Engineering
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
