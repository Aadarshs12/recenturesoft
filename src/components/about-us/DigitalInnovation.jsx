import React from "react";
import { GiMouse } from "react-icons/gi";
import Image from "next/image";

const DigitalInnovation = () => {
  return (
    <section className="py-8 lg:py-12">
      <div className="container mx-auto px-4">
        <div className="text-center flex flex-col gap-3 mb-12 lg:mb-16">
          <span className="flex lg:flex-row uppercase flex-col justify-center text-base items-center gap-2 text-gray-500">
            <GiMouse className="text-3xl -rotate-90" /> At Recenturesoft,
            serving you with the best is always our motto.
          </span>
          <h2 className="text-5xl pb-2 w-fit mx-auto primary-gradient text-center font-bold">
            Digital Innovative Solutions For IT Services
          </h2>
          <span className="forBorderSeperator"></span>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 forInnovationCard flex items-strech flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 h-full forImageInnovation">
              <Image
                height={400}
                width={400}
                alt="innovation"
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover w-full  h-[500px]"
                src="/images/about-us/who1.webp"
              ></Image>
            </div>
            <div
              style={{
                backgroundImage: `repeating-radial-gradient(circle at center center, transparent 0px, transparent 2px,rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 3px,transparent 3px, transparent 5px,rgba(0,0,0,0.03) 5px, rgba(0,0,0,0.03) 7px),repeating-radial-gradient(circle at center center, rgb(235,247,255) 0px, rgb(235,247,255) 9px,rgb(235,247,255) 9px, rgb(235,247,255) 21px,rgb(235,247,255) 21px, rgb(235,247,255) 31px,rgb(235,247,255) 31px, rgb(235,247,255) 40px)`,
                backgroundSize: `20px 20px`,
              }}
              className="w-full lg:w-1/2 cardText flex flex-col gap-3 justify-center h-full p-5"
            >
              <h3 className="text-2xl font-semibold primary-gradient w-fit">
                IP Ownership And Source Code
              </h3>
              <p>
                Our software solutions are completely transparent and require no
                licensing fees upon completion. Thus under the agreement, you
                get full rights to your intellectual property and source code.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 forInnovationCard flex items-strech flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 h-full forImageInnovation">
              <Image
                height={400}
                width={400}
                alt="innovation"
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover w-full  h-[500px]"
                src="/images/about-us/who2.webp"
              ></Image>
            </div>
            <div
              style={{
                backgroundImage: `repeating-radial-gradient(circle at center center, transparent 0px, transparent 2px,rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 3px,transparent 3px, transparent 5px,rgba(0,0,0,0.03) 5px, rgba(0,0,0,0.03) 7px),repeating-radial-gradient(circle at center center, rgb(235,247,255) 0px, rgb(235,247,255) 9px,rgb(235,247,255) 9px, rgb(235,247,255) 21px,rgb(235,247,255) 21px, rgb(235,247,255) 31px,rgb(235,247,255) 31px, rgb(235,247,255) 40px)`,
                backgroundSize: `20px 20px`,
              }}
              className="w-full lg:w-1/2 cardText flex flex-col gap-3 justify-center h-full p-5"
            >
              <h3 className="text-2xl font-semibold primary-gradient w-fit">
                Developers And Designers With Industry-Specific Experience
              </h3>
              <p>
                Our UX designers and developers have multiple years of industry
                exposure and have exceptional knowledge to offer top-notch
                software and IT solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 forInnovationCard flex items-strech flex-col-reverse lg:flex-row">
            <div
              style={{
                backgroundImage: `repeating-radial-gradient(circle at center center, transparent 0px, transparent 2px,rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 3px,transparent 3px, transparent 5px,rgba(0,0,0,0.03) 5px, rgba(0,0,0,0.03) 7px),repeating-radial-gradient(circle at center center, rgb(235,247,255) 0px, rgb(235,247,255) 9px,rgb(235,247,255) 9px, rgb(235,247,255) 21px,rgb(235,247,255) 21px, rgb(235,247,255) 31px,rgb(235,247,255) 31px, rgb(235,247,255) 40px)`,
                backgroundSize: `20px 20px`,
              }}
              className="w-full lg:w-1/2 cardText flex flex-col gap-3 justify-center h-full p-5"
            >
              <h3 className="text-2xl font-semibold primary-gradient w-fit">
                Highly Advanced Support As Per Your Software Needs
              </h3>
              <p>
                Our team puts careful attention towards analysing your
                development needs and work closely to define an application
                software that complements your business and organisation.
              </p>
            </div>
            <div className="w-full lg:w-1/2 h-full forImageInnovation">
              <Image
                height={400}
                width={400}
                alt="innovation"
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover w-full  h-[500px]"
                src="/images/about-us/who3.webp"
              ></Image>
            </div>
          </div>
          <div className="w-full lg:w-1/2 forInnovationCard flex items-strech flex-col-reverse lg:flex-row">
            <div
              style={{
                backgroundImage: `repeating-radial-gradient(circle at center center, transparent 0px, transparent 2px,rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 3px,transparent 3px, transparent 5px,rgba(0,0,0,0.03) 5px, rgba(0,0,0,0.03) 7px),repeating-radial-gradient(circle at center center, rgb(235,247,255) 0px, rgb(235,247,255) 9px,rgb(235,247,255) 9px, rgb(235,247,255) 21px,rgb(235,247,255) 21px, rgb(235,247,255) 31px,rgb(235,247,255) 31px, rgb(235,247,255) 40px)`,
                backgroundSize: `20px 20px`,
              }}
              className="w-full lg:w-1/2 cardText flex flex-col gap-3 justify-center h-full p-5"
            >
              <h3 className="text-2xl font-semibold primary-gradient w-fit">
                What Does Our Team Have For You?
              </h3>
              <p>
                Our company comprises light-minded professionals who always try
                to develop something innovative that our clients can be proud
                of. With post-delivery support and complete requirement
                assistance, we will make sure that you get what you paid for.
              </p>
            </div>
            <div className="w-full lg:w-1/2 h-full forImageInnovation">
              <Image
                height={400}
                width={400}
                alt="innovation"
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover w-full  h-[500px]"
                src="/images/about-us/who4.webp"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalInnovation;
