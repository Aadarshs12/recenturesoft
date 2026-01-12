import BannerBreadcrum from "@/components/common/BannerBreadcrum";
import GetInTouchPage from "@/components/contact-us/GetInTouchPage";
import MapContainer from "@/components/contact-us/MapContainer";
import React from "react";

const page = () => {
  return (
    <>
      <BannerBreadcrum title={"Contact Us"} />
      <GetInTouchPage />
      <MapContainer />
    </>
  );
};

export default page;
