import BannerBreadcrum from "@/components/common/BannerBreadcrum";
import ContactInformation from "@/components/contact-us/ContactInformation";
import GetInTouchPage from "@/components/contact-us/GetInTouchPage";
import MapContainer from "@/components/contact-us/MapContainer";
import React from "react";

const page = () => {
  return (
    <>
      <BannerBreadcrum title={"Contact Us"} />
      <ContactInformation />
      <GetInTouchPage />
      {/* <MapContainer /> */}
    </>
  );
};

export default page;
