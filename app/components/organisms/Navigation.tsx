"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  ImageIcon,
  Menu,
  Pen,
  VideoIcon,
  WandSparkles,
  X,
  Sun,
  Moon,
  Gem,
} from "lucide-react";
import { CompassTool, FolderSimple } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import logo from "../../../public/images.png";
import { Button } from "../atoms/Buttons";

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navItems = [
    { name: "Home", path: "/", icon: <Home size={20} /> },
    { name: "Image", path: "/image", icon: <ImageIcon size={20} /> },
    { name: "Video", path: "/video", icon: <VideoIcon size={20} /> },
    { name: "Enhancer", path: "/enhancer", icon: <WandSparkles size={20} /> },
    { name: "RealTime", path: "/realtime", icon: <Pen size={20} /> },
    { name: "Edit", path: "/edit", icon: <CompassTool size={20} /> },
    { name: "Assets", path: "/assets", icon: <FolderSimple size={20} /> },
  ];

  const Navlink = ({
    name,
    path,
    icon,
  }: {
    name: string;
    path: string;
    icon: React.ReactNode;
  }) => {
    const active = pathname === path;
    return (
      <li className="relative">
        <Link
          href={path}
          className={`group flex flex-col items-center gap-1 transition-colors ${
            active
              ? "text-black rounded-xl bg-gray-100 p-3 text-sm"
              : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          }`}
        >
          {icon}
          <span className="hidden group-hover:block group-focus-visible:block absolute -bottom-10 rounded-md bg-[#202020] px-2 py-1 text-xs text-white">
            {name}
          </span>
        </Link>
      </li>
    );
  };

  return (
    <nav className="bg-white dark:bg-background ">
      <div className="mx-auto flex items-center justify-between p-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Site logo"
            width={35}
            height={35}
            className="h-8 w-8"
            priority
          />
        </Link>

        {/* Center nav */}
        <ul className="hidden md:flex items-center gap-8 rounded-2xl bg-white dark:bg-[#202020] px-6 py-2 shadow-md">
          {navItems.map((item) => (
            <Navlink key={item.path} {...item} />
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-3 self-center">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-md bg-gray-100 p-2 hover:bg-gray-200 dark:bg-background dark:hover:bg-background"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="rounded-md bg-gray-100 px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            onClick={() => alert("Profile clicked")}
          >
            <Gem size={30} /> Upgrade Now
          </button>
          <button className="" onClick={() => alert("Settings clicked")}>
            Settings
          </button>
          <Button size="lg" title="sign up" children={undefined} />
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 dark:text-gray-200"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="flex flex-col gap-4 border-t bg-white px-4 py-4 dark:bg-gray-900 md:hidden">
          {navItems.map(({ name, path, icon }) => {
            const active = pathname === path;
            return (
              <li key={path}>
                <Link
                  href={path}
                  className={`flex items-center gap-2 transition-colors ${
                    active
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {icon}
                  {name}
                </Link>
              </li>
            );
          })}

          <div className="mt-4 flex flex-col gap-3">
            <button
              className="rounded-md bg-gray-100 px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              onClick={() => alert("Profile clicked")}
            >
              Profile
            </button>
            <button
              className="rounded-md bg-gray-100 px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              onClick={() => alert("Settings clicked")}
            >
              Settings
            </button>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-md bg-gray-100 px-3 py-2 text-sm hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              Toggle Dark Mode
            </button>
          </div>
        </ul>
      )}
    </nav>
  );
}
