import Image from "next/image";
import React from "react";

const Partners = () => {
  const partners_img = [
    {
      image: "/images/iso.webp",
    },
    {
      image: "/images/cmmi-level-3.webp",
    },
    {
      image: "/images/google-partner.webp",
    },
  ];
  return (
    <section
      style={{
        backgroundImage: `repeating-linear-gradient(45deg, rgba(194, 194, 194,0.1) 0px, rgba(194, 194, 194,0.1) 2px,transparent 2px, transparent 4px),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255),rgb(255,255,255))`,
      }}
      className="py-5 lg:py-8"
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center gap-5 lg:gap-0">
          <div className="lg:w-1/2 w-full">
            <h2 className="lg:text-4xl text-center lg:text-start text-2xl font-bold primary-gradient">
              Certification / Member / Partner
            </h2>
          </div>
          <div className="lg:w-1/2 w-full flex items-center justify-center lg:justify-end gap-8">
            {partners_img.map((prtnr, index) => (
              <div key={index}>
                <Image
                  width={100}
                  height={100}
                  src={prtnr?.image}
                  alt="partners"
                ></Image>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
