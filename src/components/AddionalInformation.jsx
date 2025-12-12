import React from "react";
import { FaFolderOpen, FaIndustry } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";
import { HiDevicePhoneMobile } from "react-icons/hi2";

const AddionalInformation = () => {
  return (
    <section
      style={{
        backgroundImage: `repeating-radial-gradient(circle at center center, transparent 0px, transparent 2px,rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 3px,transparent 3px, transparent 5px,rgba(0,0,0,0.03) 5px, rgba(0,0,0,0.03) 7px),repeating-radial-gradient(circle at center center, rgb(235,247,255) 0px, rgb(235,247,255) 9px,rgb(235,247,255) 9px, rgb(235,247,255) 21px,rgb(235,247,255) 21px, rgb(235,247,255) 31px,rgb(235,247,255) 31px, rgb(235,247,255) 40px)`,
        backgroundSize: `20px 20px`,
      }}
      className="py-10 lg:pt-20 pb-28 lg:pb-32 forAddionalInfo"
    >
      <div className="container mx-auto px-4">
        <div
          style={{
            backgroundImage: `repeating-radial-gradient(circle at center center, transparent 0px, transparent 2px,rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 3px,transparent 3px, transparent 5px,rgba(0,0,0,0.03) 5px, rgba(0,0,0,0.03) 7px),repeating-radial-gradient(circle at center center, rgb(255,255,255) 0px, rgb(255,255,255) 9px,rgb(255,255,255) 9px, rgb(255,255,255) 21px,rgb(255,255,255) 21px, rgb(255,255,255) 31px,rgb(255,255,255) 31px, rgb(255,255,255) 40px)`,
            backgroundSize: `20px 20px`,
          }}
          className="flex flex-wrap gap-5 md:gap-0 justify-start gradient-border lg:justify-between py-12 px-8 rounded-3xl -mt-[130px] shadow-2xl"
        >
          <div className="lg:w-1/4 md:w-1/2 p-3 lg:p-0 w-full flex gap-4 items-center justify-start lg:justify-center">
            <span>
              <FaFolderOpen className="text-5xl" />
            </span>
            <div>
              <h3 className="text-4xl font-bold secondary-color">2500 +</h3>
              <p className="font-semibold tertiary-color">Total Projects</p>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-3 lg:p-0 w-full flex gap-4 items-center justify-start lg:justify-center">
            <span>
              <AiOutlineGlobal className="text-5xl" />
            </span>
            <div>
              <h3 className="text-4xl font-bold secondary-color">1200 +</h3>
              <p className="font-semibold tertiary-color">Global Customers</p>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-3 lg:p-0 w-full flex gap-4 items-center justify-start lg:justify-center">
            <span>
              <FaIndustry className="text-5xl" />
            </span>
            <div>
              <h3 className="text-4xl font-bold secondary-color">30 +</h3>
              <p className="font-semibold tertiary-color">Industries</p>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-3 lg:p-0 w-full flex gap-4 items-center justify-start lg:justify-center">
            <span>
              <HiDevicePhoneMobile className="text-5xl" />
            </span>
            <div>
              <h3 className="text-4xl font-bold secondary-color">1000 +</h3>
              <p className="font-semibold tertiary-color">Mobile App's</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddionalInformation;
