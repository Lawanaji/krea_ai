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

type NavItem = {
  name: string;
  path: string;
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
  { name: "Home", path: "/", icon: <Home size={20} /> },
  { name: "Image", path: "/image", icon: <ImageIcon size={20} /> },
  { name: "Video", path: "/video", icon: <VideoIcon size={20} /> },
  { name: "Enhancer", path: "/enhancer", icon: <WandSparkles size={20} /> },
  { name: "RealTime", path: "/realtime", icon: <Pen size={20} /> },
  { name: "Edit", path: "/edit", icon: <CompassTool size={20} /> },
  { name: "Assets", path: "/assets", icon: <FolderSimple size={20} /> },
];

function NavLink({ name, path, icon }: NavItem) {
  const pathname = usePathname();
  const active = pathname === path;

  return (
    <li className="relative">
      <Link
        href={path}
        className={`group flex flex-col items-center gap-1 transition-colors ${
          active
            ? "rounded-xl bg-gray-100 p-3 text-sm text-black dark:bg-gray-700 dark:text-white"
            : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        }`}
      >
        {icon}
        <span className="absolute -bottom-10 rounded-md bg-[#202020] px-2 py-1 text-xs text-white opacity-0 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-y-3">
          {name}
        </span>
      </Link>
    </li>
  );
}

export default function Navigation() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
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

  const toggleDark = () => {
    const root = document.documentElement;
    if (dark) {
      root.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      root.classList.add("dark");
      localStorage.theme = "dark";
    }
    setDark(!dark);
    setTheme(dark ? "light" : "dark");
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-transparent">
      <div className="mx-auto flex items-center justify-between p-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="Site logo" width={35} height={35} priority />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 rounded-2xl bg-white px-6 py-2 shadow-md dark:bg-[#202020]">
          {navItems.map((item) => (
            <NavLink key={item.path} {...item} />
          ))}
        </ul>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            className="flex items-center gap-2 rounded-md bg-gray-100 px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 dark:bg-[#202020] dark:text-gray-200 dark:hover:bg-gray-700"
            onClick={() => alert("Gallery clicked")}
          >
            <ImageSquare size={24} />
            Gallery
          </button>
          <button
            className="flex items-center gap-2 rounded-md bg-gray-100 px-3 py-1 text-sm text-gray-700 hover:bg-gray-200 dark:bg-[#202020] dark:text-gray-200 dark:hover:bg-gray-700"
            onClick={() => alert("Support clicked")}
          >
            <Headset size={24} />
            Support
          </button>
          <button
            onClick={toggleDark}
            className="rounded-md bg-gray-100 px-3 py-1 hover:bg-gray-200 dark:bg-background dark:hover:bg-gray-700"
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Bell size={20} className="text-[#202020] dark:text-gray-300" />
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 dark:text-gray-200"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 md:hidden left-0 z-40 h-full w-64 transform overflow-y-auto bg-white transition-transform duration-300 ease-in-out dark:bg-[#202020] ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b p-5 dark:border-gray-700">
          <Link href="/" onClick={() => setOpen(false)}>
            <Image src={logo} alt="Site logo" width={35} height={35} priority />
          </Link>
        </div>

        <div className="flex h-full flex-col justify-between p-5">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 rounded-md px-3 py-2 transition-colors ${
                    pathname === item.path
                      ? "bg-gray-100 text-black dark:bg-gray-700 dark:text-white"
                      : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-3">
            <button
              className="flex items-center gap-2 rounded-md bg-gray-100 px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 dark:bg-[#202020] dark:text-gray-200 dark:hover:bg-gray-700"
              onClick={() => alert("Gallery clicked")}
            >
              <ImageSquare size={24} /> Gallery
            </button>
            <button
              className="flex items-center gap-2 rounded-md bg-gray-100 px-3 py-2 text-sm text-gray-700 hover:bg-gray-200 dark:bg-[#202020] dark:text-gray-200 dark:hover:bg-gray-700"
              onClick={() => alert("Support clicked")}
            >
              <Headset size={24} /> Support
            </button>
            <button
              onClick={toggleDark}
              className="rounded-md bg-gray-100 px-3 py-2 hover:bg-gray-200 dark:bg-background dark:hover:bg-gray-700"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
