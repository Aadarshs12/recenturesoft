import DigitalInnovation from "@/components/about-us/DigitalInnovation";
import OurAbout from "@/components/about-us/OurAbout";
import OurMission from "@/components/about-us/OurMission";
import OurVision from "@/components/about-us/OurVision";
import WhoAreWe from "@/components/about-us/WhoAreWe";
import BannerBreadcrum from "@/components/common/BannerBreadcrum";
import React from "react";

const page = () => {
  return (
    <>
      <BannerBreadcrum title="About Us" />
      <OurAbout />
      <WhoAreWe />
      <DigitalInnovation />
      <OurMission />
      <OurVision />
    </>
  );
};

export default page;
