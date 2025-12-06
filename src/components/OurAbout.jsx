"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { GiMouse } from "react-icons/gi";
import { FaArrowRightLong } from "react-icons/fa6";

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

export default function AboutSection() {
  return (
    <section className="py-16 forAboutSection relative overflow-hidden">
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

            <div className="relative -z-10">
              <Image
                style={{
                  backgroundImage: `
        linear-gradient(157.5deg, rgb(95,97,179) 0%, rgb(95,97,179) 16%, rgb(115,120,184) 16%, rgb(115,120,184) 20%, rgb(135,142,188) 20%, rgb(135,142,188) 32%, rgb(155,165,193) 32%, rgb(155,165,193) 38%, rgb(175,187,198) 38%, rgb(175,187,198) 48%, rgb(195,210,203) 48%, rgb(195,210,203) 51%, rgb(215,232,207) 51%, rgb(215,232,207) 59%, rgb(235,255,212) 59%, rgb(235,255,212) 100%),
        linear-gradient(135deg, rgb(95,97,179) 0%, rgb(95,97,179) 16%, rgb(115,120,184) 16%, rgb(115,120,184) 20%, rgb(135,142,188) 20%, rgb(135,142,188) 32%, rgb(155,165,193) 32%, rgb(155,165,193) 38%, rgb(175,187,198) 38%, rgb(175,187,198) 48%, rgb(195,210,203) 48%, rgb(195,210,203) 51%, rgb(215,232,207) 51%, rgb(215,232,207) 59%, rgb(235,255,212) 59%, rgb(235,255,212) 100%),
        linear-gradient(112.5deg, rgb(95,97,179) 0%, rgb(95,97,179) 16%, rgb(115,120,184) 16%, rgb(115,120,184) 20%, rgb(135,142,188) 20%, rgb(135,142,188) 32%, rgb(155,165,193) 32%, rgb(155,165,193) 38%, rgb(175,187,198) 38%, rgb(175,187,198) 48%, rgb(195,210,203) 48%, rgb(195,210,203) 51%, rgb(215,232,207) 51%, rgb(215,232,207) 59%, rgb(235,255,212) 59%, rgb(235,255,212) 100%),
        linear-gradient(90deg, rgb(33,129,194), rgb(201,243,43))
      `,
                  backgroundBlendMode: "overlay, overlay, overlay, normal",
                }}
                src="/images/about.png"
                alt="About Recenturesoft Infotech"
                width={600}
                height={500}
                className="w-full bg-yellow-50 p-5 object-contain h-[450px] rounded-lg"
                priority
              />

              <div className="absolute top-16 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 p-4 shadow-lg">
                <Image
                  src="/images/pattern-1.png"
                  alt="Pattern"
                  width={60}
                  height={60}
                  className="animate-pulse"
                />
              </div>
            </div>
          </div>

          <div className="relative z-50">
            <p className="text-sm uppercase tracking-wider flex items-center gap-2 tertiary-color font-semibold mb-2">
              <GiMouse className="text-3xl -rotate-90" />
              Our About
            </p>

            <h3 className="text-3xl lg:text-4xl font-bold primary-gradient mb-6 leading-tight">
              Software Development and Integrated Solutions for Your Business
            </h3>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Recenturesoft Infotech is a premier web development company with
              some of the industry's highly skilled developers and UI/UX
              engineers...
            </p>

            <div className="flex items-center gap-4 mb-8">
              <Image
                src="/images/factory.png"
                alt="Factory"
                width={40}
                height={40}
              />
              <div>
                <h6 className="text-lg font-semibold primary-gradient mb-1">
                  Plus specialised industries
                </h6>
                <p className="text-gray-600">
                  We have a unique yet simple approach for designing and
                  structuring your site.
                </p>
              </div>
            </div>

            <Link
              href="#"
              className="inline-flex items-center gap-2 btn-gradient py-3 px-6 rounded-lg font-medium"
            >
              Get our services <FaArrowRightLong />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
