import Banner from "@/components/Banner";
import BrandsSection from "@/components/BrandSection";
import FaqSection from "@/components/FaqSection";
import HowItWorks from "@/components/HowItWorks";
import OurAbout from "@/components/OurAbout";
import OurServices from "@/components/OurServices";
import Testimonials from "@/components/Testimonials";
import React from "react";

const page = () => {
  return (
    <>
      <Banner />
      <OurServices />
      <OurAbout />
      <BrandsSection />
      <HowItWorks />
      <FaqSection />
      <Testimonials />
    </>
  );
};

export default page;
