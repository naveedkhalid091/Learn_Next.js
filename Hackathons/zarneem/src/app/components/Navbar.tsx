import React from "react";
import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

export default function Navbar() {
  return (
    <div className="h-20 px-4 bg-secondry md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/*Mobile Screens */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl text-primary tracking-wide">Zarneem</div>
        </Link>
        <Menu />
      </div>
      {/*BIGGER SCREENS*/}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/*Left*/}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/Logo/Style 2/skin.png"
              alt="Logo"
              height={60}
              width={60}
              className="rounded-full"
            />
            <div className="text-2xl tracking-wide text-myFont">Zarneem</div>
          </Link>
        </div>

        <div className="hidden xl:flex gap-4">
          <Link href="/">Jewellery</Link>
          <Link href="/">Cosmetics</Link>
          <Link href="/">Perfumes</Link>
        </div>
        {/*Right*/}
        <div className="w-2/3 xl:w-2/3 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
}
