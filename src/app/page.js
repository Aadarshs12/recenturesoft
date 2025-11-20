import Banner from "@/components/Banner";
import BrandsSection from "@/components/BrandSection";
import OurAbout from "@/components/OurAbout";
import OurServices from "@/components/OurServices";
import React from "react";

const page = () => {
  return (
    <>
      <Banner />
      <OurServices />
      <OurAbout />
      <BrandsSection/>
    </>
  );
};

export default page;
