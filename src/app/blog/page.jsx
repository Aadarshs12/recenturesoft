import BlogLayout from "@/components/blog/BlogLayout";
import BannerBreadcrum from "@/components/common/BannerBreadcrum";
import React from "react";

const page = () => {
  return (
    <>
      <BannerBreadcrum title={"Blog"} />
      <BlogLayout />
    </>
  );
};

export default page;
