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

const OurMission = () => {
  return (
    <section className="py-8 lg:py-12 forAboutSection relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">

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
            <div className="relative -z-10">
              <Image
                src="/images/about-us/mission.webp"
                alt="About Recenturesoft Infotech"
                width={600}
                sizes="(max-width: 768px) 100vw, 300px"
                height={500}
                className="w-full forFloatingImgEffect p-5 object-contain h-[350px] rounded-lg"
                priority
              />
            </div>
          </div>

          <div className="relative z-50">
            <p className="text-sm uppercase tracking-wider flex items-center gap-2 tertiary-color font-semibold mb-2">
              <GiMouse className="text-3xl -rotate-90" />
              Turning ideas into impact that matters
            </p>

            <h3 className="text-3xl w-fit lg:text-4xl font-bold primary-gradient mb-6 leading-tight">
              Our Mission
            </h3>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Our team at Recenturesoft Infotech believes in complete
              transparency in projects. Thus, we strive to create a
              customer-oriented and innovative approach to offer robust IT
              solutions for businesses belonging to wide categories.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              In recent years, our company has touched greater heights as we
              hold an impressive portfolio of working with multiple clients in
              the USA, UK, France, Germany, India and still expanding. We strive
              on our principles of integrity, innovation, unity, passion and
              balance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
