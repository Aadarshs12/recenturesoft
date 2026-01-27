import Image from "next/image";
import React from "react";

const ContactInformation = () => {
  return (
    <section
      //   style={{
      //     backgroundImage: `radial-gradient(circle at center center, transparent,rgb(255,255,255)),repeating-linear-gradient(135deg, rgb(255,255,255) 0px, rgb(255,255,255) 12px,transparent 12px, transparent 19px,rgb(255,255,255) 19px, rgb(255,255,255) 24px,transparent 24px, transparent 28px),repeating-linear-gradient(45deg, rgb(245,245,245) 0px, rgb(245,245,245) 7px,transparent 7px, transparent 14px),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255))`,
      //   }}
      className="pb-8 pt-20 bg-white"
    >
      <div className="container mx-auto px-4">
        {/* <h3 className="text-2xl font-bold mx-auto primary-gradient w-fit mb-7">
          Explore Full Conatct Details
        </h3> */}
        <div className="flex gap-10">
          <div
            style={{
              backgroundImage: `linear-gradient(489deg, rgba(187, 187, 187, 0.03) 0%, rgba(187, 187, 187, 0.03) 22%,rgba(207, 207, 207, 0.03) 22%, rgba(207, 207, 207, 0.03) 43%,rgba(148, 148, 148, 0.03) 43%, rgba(148, 148, 148, 0.03) 62%,rgba(90, 90, 90, 0.03) 62%, rgba(90, 90, 90, 0.03) 68%,rgba(195, 195, 195, 0.03) 68%, rgba(195, 195, 195, 0.03) 88%,rgba(34, 34, 34, 0.03) 88%, rgba(34, 34, 34, 0.03) 95%,rgba(215, 215, 215, 0.03) 95%, rgba(215, 215, 215, 0.03) 100%),linear-gradient(215deg, rgba(100, 100, 100, 0.03) 0%, rgba(100, 100, 100, 0.03) 9%,rgba(5, 5, 5, 0.03) 9%, rgba(5, 5, 5, 0.03) 40%,rgba(89, 89, 89, 0.03) 40%, rgba(89, 89, 89, 0.03) 44%,rgba(5, 5, 5, 0.03) 44%, rgba(5, 5, 5, 0.03) 69%,rgba(130, 130, 130, 0.03) 69%, rgba(130, 130, 130, 0.03) 79%,rgba(204, 204, 204, 0.03) 79%, rgba(204, 204, 204, 0.03) 88%,rgba(247, 247, 247, 0.03) 88%, rgba(247, 247, 247, 0.03) 100%),linear-gradient(270deg, rgb(17,26,33),rgb(12,21,30))`,
            }}
            className="lg:w-1/3 shadow rounded-2xl p-5 relative"
          >
            <div
              className="absolute left-0 right-0 mx-auto -top-[52px] w-[105px] h-[105px] grid place-content-center rounded-xl"
              style={{
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                background: "#449547",
              }}
            >
              <div
                className="w-[90px] h-[90px] grid place-content-center bg-white shadow overflow-hidden"
                style={{
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  backgroundImage:
                    "repeating-radial-gradient(circle at center center, transparent 0px, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 3px, transparent 3px, transparent 5px, rgba(0,0,0,0.03) 5px, rgba(0,0,0,0.03) 7px), repeating-radial-gradient(circle at center center, #fff 0px, #fff 9px, #fff 9px, #fff 21px, #fff 21px, #fff 31px, #fff 31px, #fff 40px)",
                  backgroundPosition: "20px 20px",
                }}
              >
                <Image
                  width={40}
                  height={40}
                  src="/images/contact-us/whatsapp-new.webp"
                  alt="whatsapp"
                />
              </div>
            </div>
            <div className="pt-10 flex items-center flex-col">
              <h3 className="font-bold text-[#449547] text-2xl">
                WhatsApp Contact
              </h3>
              <p className="text-lg font-bold text-white">
                Quick support is just a message away.
              </p>
              <p className="text-slate-200">Chat with us on WhatsApp:</p>
              <a
                href="https://api.whatsapp.com/send?phone=+917770003288&text=Hi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#449547] text-xl"
              >
                +91 7770003288
              </a>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `linear-gradient(489deg, rgba(187, 187, 187, 0.03) 0%, rgba(187, 187, 187, 0.03) 22%,rgba(207, 207, 207, 0.03) 22%, rgba(207, 207, 207, 0.03) 43%,rgba(148, 148, 148, 0.03) 43%, rgba(148, 148, 148, 0.03) 62%,rgba(90, 90, 90, 0.03) 62%, rgba(90, 90, 90, 0.03) 68%,rgba(195, 195, 195, 0.03) 68%, rgba(195, 195, 195, 0.03) 88%,rgba(34, 34, 34, 0.03) 88%, rgba(34, 34, 34, 0.03) 95%,rgba(215, 215, 215, 0.03) 95%, rgba(215, 215, 215, 0.03) 100%),linear-gradient(215deg, rgba(100, 100, 100, 0.03) 0%, rgba(100, 100, 100, 0.03) 9%,rgba(5, 5, 5, 0.03) 9%, rgba(5, 5, 5, 0.03) 40%,rgba(89, 89, 89, 0.03) 40%, rgba(89, 89, 89, 0.03) 44%,rgba(5, 5, 5, 0.03) 44%, rgba(5, 5, 5, 0.03) 69%,rgba(130, 130, 130, 0.03) 69%, rgba(130, 130, 130, 0.03) 79%,rgba(204, 204, 204, 0.03) 79%, rgba(204, 204, 204, 0.03) 88%,rgba(247, 247, 247, 0.03) 88%, rgba(247, 247, 247, 0.03) 100%),linear-gradient(270deg, rgb(17,26,33),rgb(12,21,30))`,
            }}
            className="lg:w-1/3 shadow rounded-2xl p-5 relative"
          >
            <div
              className="absolute left-0 right-0 mx-auto -top-[52px] w-[105px] h-[105px] grid place-content-center rounded-xl"
              style={{
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                background: "#fc4c4f",
              }}
            >
              <div
                className="w-[90px] h-[90px] grid place-content-center bg-white shadow overflow-hidden"
                style={{
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  backgroundImage:
                    "repeating-radial-gradient(circle at center center, transparent 0px, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 3px, transparent 3px, transparent 5px, rgba(0,0,0,0.03) 5px, rgba(0,0,0,0.03) 7px), repeating-radial-gradient(circle at center center, #fff 0px, #fff 9px, #fff 9px, #fff 21px, #fff 21px, #fff 31px, #fff 31px, #fff 40px)",
                  backgroundPosition: "20px 20px",
                }}
              >
                <Image
                  width={40}
                  height={40}
                  src="/images/contact-us/destination.webp"
                  alt="destination"
                />
              </div>
            </div>
            <div className="pt-10 flex items-center flex-col">
              <h3 className="font-bold text-[#fc4c4f] text-2xl">Location</h3>
              <p className="text-lg font-bold text-white">Our Place of Business is at</p>
              <a
                href="https://www.google.com/search?q=recenturesoft+infotech&oq=rece&gs_lcrp=EgZjaHJvbWUqBggDEEUYOzIGCAAQRRg8MgYIARBFGDwyBggCEEUYOTIGCAMQRRg7MgcIBBAAGIAEMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEIMjQ1OGowajeoAgiwAgHxBcyVqdW_r53P&sourceid=chrome&ie=UTF-8&safe=active&ssui=on"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#fc4c4f] text-xl text-center"
              >
                A-125, A Block, Sector 63, Noida, Uttar Pradesh 201309
              </a>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `linear-gradient(489deg, rgba(187, 187, 187, 0.03) 0%, rgba(187, 187, 187, 0.03) 22%,rgba(207, 207, 207, 0.03) 22%, rgba(207, 207, 207, 0.03) 43%,rgba(148, 148, 148, 0.03) 43%, rgba(148, 148, 148, 0.03) 62%,rgba(90, 90, 90, 0.03) 62%, rgba(90, 90, 90, 0.03) 68%,rgba(195, 195, 195, 0.03) 68%, rgba(195, 195, 195, 0.03) 88%,rgba(34, 34, 34, 0.03) 88%, rgba(34, 34, 34, 0.03) 95%,rgba(215, 215, 215, 0.03) 95%, rgba(215, 215, 215, 0.03) 100%),linear-gradient(215deg, rgba(100, 100, 100, 0.03) 0%, rgba(100, 100, 100, 0.03) 9%,rgba(5, 5, 5, 0.03) 9%, rgba(5, 5, 5, 0.03) 40%,rgba(89, 89, 89, 0.03) 40%, rgba(89, 89, 89, 0.03) 44%,rgba(5, 5, 5, 0.03) 44%, rgba(5, 5, 5, 0.03) 69%,rgba(130, 130, 130, 0.03) 69%, rgba(130, 130, 130, 0.03) 79%,rgba(204, 204, 204, 0.03) 79%, rgba(204, 204, 204, 0.03) 88%,rgba(247, 247, 247, 0.03) 88%, rgba(247, 247, 247, 0.03) 100%),linear-gradient(270deg, rgb(17,26,33),rgb(12,21,30))`,
            }}
            className="lg:w-1/3 shadow rounded-2xl p-5 relative"
          >
            <div
              className="absolute left-0 right-0 mx-auto -top-[52px] w-[105px] h-[105px] grid place-content-center rounded-xl"
              style={{
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                background: "#516afe",
              }}
            >
              <div
                className="w-[90px] h-[90px] grid place-content-center bg-white shadow overflow-hidden"
                style={{
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  backgroundImage:
                    "repeating-radial-gradient(circle at center center, transparent 0px, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 3px, transparent 3px, transparent 5px, rgba(0,0,0,0.03) 5px, rgba(0,0,0,0.03) 7px), repeating-radial-gradient(circle at center center, #fff 0px, #fff 9px, #fff 9px, #fff 21px, #fff 21px, #fff 31px, #fff 31px, #fff 40px)",
                  backgroundPosition: "20px 20px",
                }}
              >
                <Image
                  width={40}
                  height={40}
                  src="/images/contact-us/mail.webp"
                  alt="email"
                />
              </div>
            </div>
            <div className="pt-10 flex items-center flex-col">
              <h3 className="font-bold text-[#516afe] text-2xl">Any Query</h3>
              <p className="text-lg font-bold text-white">For Employee Related Query Mail us at</p>
              <a
                href="mailto:info@recenturesoft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#516afe] text-xl text-center"
              >
                Mail To: info@recenturesoft.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
