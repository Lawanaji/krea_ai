import React from "react";
import logo from "../../../public/images.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="
        w-full p-5 flex justify-between items-center text-sm
        bg-background text-foreground
      "
    >
      <Link href="/" className="flex items-center gap-2">
        <Image
          src={logo}
          alt="Site logo"
          width={35}
          height={35}
          className="h-8 w-8"
          priority
        />
        <span className="font-extrabold">Krea AI</span>
      </Link>

      <span className="flex items-center gap-2">
        <p className="font-bold">curated by</p>
        <h1 className="font-extrabold text-lg">Mobbin</h1>
      </span>
    </footer>
  );
};

export default Footer;
