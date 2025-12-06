import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { GiMouse } from "react-icons/gi";

export default function BrandsSection() {
  const brands = [
    { name: "Next JS", image: "/images/client-1.png" },
    { name: "Java", image: "/images/client-2.png" },
    { name: "Node JS", image: "/images/client-3.png" },
    { name: "OpenCart", image: "/images/client-4.png" },
    { name: "Magento", image: "/images/client-5.png" },
    { name: "Laravel", image: "/images/client-6.png" },
    { name: "Angular JS", image: "/images/client-7.png" },
    { name: "Bootstrap", image: "/images/client-8.png" },
    { name: "PrestaShop", image: "/images/client-9.png" },
    { name: "PHP", image: "/images/client-10.png" },
    { name: "React JS", image: "/images/client-11.png" },
    { name: "Tailwind CSS", image: "/images/client-12.png" },
  ];

  return (
    <section className="py-5 lg:py-12 bg-sky-100 forBrandSection">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-sm uppercase flex items-center gap-2 justify-center tracking-wider text-gray-500 font-semibold mb-3">
           <GiMouse className="text-3xl -rotate-90"/> What We Offer
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold primary-gradient">
            Recenturesoft Infotech have to offer?
          </h2>
        </div>

        <TooltipProvider>
          <div className="flex brandDiv flex-wrap justify-center gap-3 max-w-6xl mx-auto">
            {brands.map((item, index) => (
              <Tooltip key={index}>
                <TooltipTrigger className="relative h-40 w-44 card transform transition-all duration-300 hover:scale-110  hover:-translate-y-3">
                  <div className="absolute inset-0 rounded-2xl"></div>
                  <div
                    className="absolute p-3 inset-2 lg:inset-4 shaped-card bg-white rounded-xl shadow-2xs overflow-hidden"
                    style={{
                      clipPath:
                        "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                      transform: "rotate(90deg)",
                    }}
                  >
                    <Image
                      src={item?.image}
                      alt="Brand logo"
                      width={120}
                      height={120}
                      className="w-full h-full object-contain p-4 -rotate-90"
                    />
                  </div>
                </TooltipTrigger>

                <TooltipContent>
                  <p className="secondary-color text-sm font-semibold">
                    {item?.name}
                  </p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
}
