import Link from "next/link";
import React from "react";

const BannerBreadcrum = ({ title }) => {
  return (
    <section className="forBreadCrumBanner">
      <div className="container mx-auto px-4">
        <div className="flex gap-3 relative z-10 flex-col items-center">
          <h1 className="text-5xl primary-gradient pb-1 w-fit font-bold">{title}</h1>
          <h5 className="text-2xl font-medium text-white">
            {" "}
            <Link href={"/"}>Home</Link> / {title}
          </h5>
        </div>
      </div>
    </section>
  );
};

export default BannerBreadcrum;
