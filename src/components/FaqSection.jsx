import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GiMouse } from "react-icons/gi";

const FaqSection = () => {
  return (
    <section className="forFaqBg">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <div className="w-1/2 p-5 relative h-[400px]">
            <Image
              fill
              alt="FAQ"
              className="object-contain"
              src="/images/faq.png"
            ></Image>
          </div>
          <div className="w-1/2 p-5">
            <p className="text-sm uppercase flex items-center gap-2 tracking-wider text-gray-500 font-semibold mb-3">
              <GiMouse className="text-3xl -rotate-90" /> FAQ & Answer
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold primary-gradient">
              A Glimpse of what We have for You
            </h2>
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="w-full"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="accordion-trigger-primary text-lg hover:no-underline">
                  Data Management Softwares
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  Our software developers are skilled to provide high-end
                  technological solutions, applications, ERP and customised
                  platforms for your business.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="accordion-trigger-primary text-lg hover:no-underline">
                  Online Retail Store
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  The creative and research analysis team at Recenturesoft
                  strives to create a modern platform to put your store and
                  eCommerce vision on the world wide web.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="accordion-trigger-primary text-lg hover:no-underline">
                  Search Engine Optimisation
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  Our team also has customised solutions to help boost your
                  website traffic and improve search engine visibility through
                  organic and inorganic market segments.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
