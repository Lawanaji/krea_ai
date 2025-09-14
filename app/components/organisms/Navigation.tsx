"use client";

import React, { useEffect, useState } from "react";
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
  Bell,
} from "lucide-react";
import {
  CompassTool,
  FolderSimple,
  Headset,
  ImageSquare,
} from "@phosphor-icons/react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import logo from "../../../public/images.png";

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const root = document.documentElement;
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      root.classList.add("dark");
      setDark(true);
    }
  }, []);
  const toggle = () => {
    const root = document.documentElement;
    if (dark) {
      root.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      root.classList.add("dark");
      localStorage.theme = "dark";
    }
    setDark(!dark);
  };
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
              ? "text-black rounded-xl bg-gray-100 p-3 text-sm dark:text-white dark:bg-gray-700"
              : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          }`}
        >
          {icon}
          <span
            className="
               absolute -bottom-10 
              rounded-md bg-[#202020] px-2 py-1 text-xs text-white opacity-0
              transition-all duration-200 ease-out
              group-hover:opacity-100 group-hover:translate-y-3
            "
          >
            {name}
          </span>
        </Link>
      </li>
    );
  };

  return (
    <nav className=" fixed top-0 left-0 z-50 w-full ">
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

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 rounded-2xl bg-white dark:bg-[#202020] px-6 py-2 shadow-md">
          {navItems.map((item) => (
            <Navlink key={item.path} {...item} />
          ))}
        </ul>

        {/* Right actions */}
        <div className="hidden  md:flex items-center gap-3 self-center">
          <button
            className="rounded-md bg-gray-100 px-3 py-1 flex items-center gap-2 text-sm text-gray-700 hover:bg-gray-200 dark:bg-[#202020] dark:text-gray-200 dark:hover:bg-gray-700"
            onClick={() => alert("Gallery clicked")}
          >
            <ImageSquare size={30} />
            Gallery
          </button>
          <button
            className="rounded-md flex items-center gap-1 bg-gray-100 px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 dark:bg-[#202020] dark:text-gray-200 dark:hover:bg-gray-700"
            onClick={() => alert("Support clicked")}
          >
            <Headset size={30} />
            Support
          </button>
          <button
            onClick={toggle}
            className="rounded-md bg-gray-100 px-3 py-1 hover:bg-gray-200 dark:bg-background dark:hover:bg-gray-700"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Bell size={20} className="text-[#202020] dark:text-gray-300" />
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

      {/* Mobile drawer with slide animation */}
      <div
        className={`fixed top-0 left-0 z-40 h-full w-64 transform border-r
          bg-white dark:bg-[#202020]
          transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="p-5 flex justify-between items-center border-b dark:border-gray-700">
          <span className="font-semibold text-gray-700 dark:text-gray-100">
            Menu
          </span>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-700 dark:text-gray-200"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <ul className="flex flex-col gap-4 px-4 py-6">
          {navItems.map(({ name, path, icon }) => {
            const active = pathname === path;
            return (
              <li key={path}>
                <Link
                  href={path}
                  className={`flex items-center gap-2 py-2 transition-colors ${
                    active
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {icon}
                  {name}
                </Link>
              </li>
            );
          })}

          <div className="mt-6 flex flex-col gap-3">
            <button
              className="rounded-md bg-gray-100 px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              onClick={() => alert("Gallery clicked")}
            >
              <ImageSquare size={24} /> Gallery
            </button>
            <button
              className="rounded-md bg-gray-100 px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              onClick={() => alert("Support clicked")}
            >
              <Headset size={24} /> Support
            </button>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-md bg-gray-100 px-3 py-2 text-sm hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              Toggle Dark Mode
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
}
