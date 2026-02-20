"use client";

import { Heart, ImageIcon, Cloud, Monitor, Folder } from "lucide-react";
import PhotoGrid from '@/components/event/PhotoGrid'

const navItems = [
  { icon: ImageIcon, label: "Gallery", active: true },
  { icon: Heart, label: "Favourites" },
  { icon: Cloud, label: "OneDrive - Personal" },
  { icon: Cloud, label: "iCloud Photos" },
  { icon: Monitor, label: "This PC", activeSub: true },
];

export default function Sidebar() {
  return (
    <section className="flex">
    <aside className="w-72 bg-[var(--sidebar)] border-r border-gray-800 flex flex-col h-screen">
      <div className="p-4 border-b border-gray-800">
        <h1 className="text-xl font-semibold">Photos</h1>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors
              ${item.active ? "bg-gray-800 text-white" : "hover:bg-gray-800/60"}`}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </button>
        ))}

        {navItems[4].activeSub && (
          <div className="ml-7 mt-2 space-y-1 text-sm">
            <button className="w-full flex items-center gap-2 px-3 py-1.5 rounded hover:bg-gray-800/50">
              <Folder size={16} /> Pictures
            </button>
            <button className="w-full flex items-center gap-2 px-3 py-1.5 rounded hover:bg-gray-800/50">
              <Folder size={16} /> Camera Roll
            </button>
            <button className="w-full flex items-center gap-2 px-3 py-1.5 rounded hover:bg-gray-800/50">
              <Folder size={16} /> Saved Pictures
            </button>
            <button className="w-full flex items-center gap-2 px-3 py-1.5 rounded hover:bg-gray-800/50">
              <Folder size={16} /> Screenshots
            </button>
          </div>
        )}
      </nav>
    </aside>
    <PhotoGrid />
    </section>
  );
}