"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Image
        src="/menu.svg"
        alt="Menu Button"
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((openIt) => !openIt)}
      />
      {open && (
        <div className="absolute bg-yellow-200 text-green-950 font-semibold left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-12 text-lg z-10">
          <Link href="/">HomePage</Link>
          <Link href="/">Jewellery</Link>
          <Link href="/">Cosmetics</Link>
          <Link href="/">Perfumes</Link>
          <Link href="/">ContactUs</Link>
          <Link href="/">About Us</Link>
        </div>
      )}
    </div>
  );
}
