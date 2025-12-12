import AddionalInformation from "@/components/AddionalInformation";
import Banner from "@/components/Banner";
import Blogs from "@/components/Blogs";
import BrandsSection from "@/components/BrandSection";
import ClientAndPartners from "@/components/ClientAndPartners";
import FaqSection from "@/components/FaqSection";
import HowItWorks from "@/components/HowItWorks";
import OurAbout from "@/components/OurAbout";
import OurServices from "@/components/OurServices";
import Partners from "@/components/Partners";
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
      <AddionalInformation />
      <ClientAndPartners />
      <Blogs />
      <Partners />
    </>
  );
};

export default page;
