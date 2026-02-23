"use client";

import { ImageIcon, Folder, PartyPopper } from "lucide-react";
import PhotoGrid from "@/components/event/PhotoGrid";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const navItems = [{ icon: ImageIcon, label: "Gallery", active: true }];

export default function Sidebar() {
  return (
    <section className="flex items-stretch pb-10 forSidebar">
      <aside className="w-72 border-r border-gray-800 flex flex-col h-lvw">
        <div className="p-4 border-b border-gray-800">
          <h2 className="text-2xl font-semibold primary-gradient w-fit">
            Photos
          </h2>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-md transition-colors
              ${item.active ? "bg-gray-800 text-white font-semibold" : "hover:bg-gray-200"}`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </button>
          ))}

          {navItems[0] && (
            <div className="ml-2 mt-2 space-y-1 text-sm">
              <Accordion
                type="single"
                collapsible
                defaultValue="item-1"
                className="w-full"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="accordion-trigger-primary text-lg hover:no-underline">
                    <div className="w-full flex items-center gap-2 px-3 rounded">
                      <Folder size={18} />{" "}
                      <span className="text-[18px]">2025</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <ul className="ml-3 flex flex-col gap-3">
                      <li className="flex gap-2 items-center text-md border border-[#535353] rounded-md border-r-6 text-black py-2 px-4 ">
                        {" "}
                        <PartyPopper size={16} />
                        Holi
                      </li>
                      <li className="flex gap-2 items-center text-md border border-[#535353] rounded-md border-r-6 text-black py-2 px-4 ">
                        {" "}
                        <PartyPopper size={16} />
                        Diwali
                      </li>
                      <li className="flex gap-2 items-center text-md border border-[#535353] rounded-md border-r-6 text-black py-2 px-4 ">
                        {" "}
                        <PartyPopper size={16} />
                        Independanceday
                      </li>
                      <li className="flex gap-2 items-center text-md border border-[#535353] rounded-md border-r-6 text-black py-2 px-4 ">
                        {" "}
                        <PartyPopper size={16} />
                        Employee of the month
                      </li>
                      <li className="flex gap-2 items-center text-md border border-[#535353] rounded-md border-r-6 text-black py-2 px-4 ">
                        {" "}
                        <PartyPopper size={16} />
                        Cristmas
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="accordion-trigger-primary text-lg hover:no-underline">
                    <div className="w-full flex items-center gap-2 px-3 rounded">
                      <Folder size={18} />{" "}
                      <span className="text-[18px]">2024</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <ul className="ml-3 flex flex-col gap-3">
                      <li className="flex gap-2 items-center text-md border border-[#535353] rounded-md border-r-6 text-black py-2 px-4 ">
                        {" "}
                        <PartyPopper size={16} />
                        Holi
                      </li>
                      <li className="flex gap-2 items-center text-md border border-[#535353] rounded-md border-r-6 text-black py-2 px-4 ">
                        {" "}
                        <PartyPopper size={16} />
                        Diwali
                      </li>
                      <li className="flex gap-2 items-center text-md border border-[#535353] rounded-md border-r-6 text-black py-2 px-4 ">
                        {" "}
                        <PartyPopper size={16} />
                        Independanceday
                      </li>
                      <li className="flex gap-2 items-center text-md border border-[#535353] rounded-md border-r-6 text-black py-2 px-4 ">
                        {" "}
                        <PartyPopper size={16} />
                        Employee of the month
                      </li>
                      <li className="flex gap-2 items-center text-md border border-[#535353] rounded-md border-r-6 text-black py-2 px-4 ">
                        {" "}
                        <PartyPopper size={16} />
                        Cristmas
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="accordion-trigger-primary text-lg hover:no-underline">
                    <div className="w-full flex items-center gap-2 px-3 rounded">
                      <Folder size={18} />{" "}
                      <span className="text-[18px]">2023</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <ul className="ml-3 flex flex-col gap-3">
                      <li className="flex gap-2 items-center text-md border border-[#535353] rounded-md border-r-6 text-black py-2 px-4 ">
                        {" "}
                        <PartyPopper size={16} />
                        Holi
                      </li>
                      <li className="flex gap-2 items-center text-md border border-[#535353] rounded-md border-r-6 text-black py-2 px-4 ">
                        {" "}
                        <PartyPopper size={16} />
                        Diwali
                      </li>
                      <li className="flex gap-2 items-center text-md border border-[#535353] rounded-md border-r-6 text-black py-2 px-4 ">
                        {" "}
                        <PartyPopper size={16} />
                        Independanceday
                      </li>
                      <li className="flex gap-2 items-center text-md border border-[#535353] rounded-md border-r-6 text-black py-2 px-4 ">
                        {" "}
                        <PartyPopper size={16} />
                        Employee of the month
                      </li>
                      <li className="flex gap-2 items-center text-md border border-[#535353] rounded-md border-r-6 text-black py-2 px-4 ">
                        {" "}
                        <PartyPopper size={16} />
                        Cristmas
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          )}
        </nav>
      </aside>
      <PhotoGrid />
    </section>
  );
}
