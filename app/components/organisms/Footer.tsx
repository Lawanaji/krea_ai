import React from "react";
import logo from "../../../public/images.png";
import Image from "next/image";
import Link from "next/link";
// import mobbinLogo from "../../../public/0_0mCVA-dhOm65eaLm.webp";
const Footer = () => {
  return (
    <div className="w-full p-5 flex justify-between items-center text-sm text-gray-500 bg-[#202020] dark:bg-background">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src={logo}
          alt="Site logo"
          width={35}
          height={35}
          className="h-8 w-8"
          priority
        />
        <span className="font-extrabold dark:text-white">Krea AI</span>
      </Link>
      <span className="dark:text-white flex items-center gap-2">
        <p className="font-bold">curated by</p>
        <h1 className="font-extrabold text-lg">Mobbin</h1>
      </span>
    </div>
  );
};

export default Footer;
