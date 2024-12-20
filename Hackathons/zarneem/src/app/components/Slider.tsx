"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const slides = [
  {
    id: "1",
    title: "Exclusive Deals on Jewelry, Perfumes & Cosmetics!",
    description: "Sale! Up to 50% Off!",
    img: "/Promotions/announcement.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: "2",
    title: "Dazzling Discounts Just for You!",
    description: "Sale! Up to 50% Off!",
    img: "/Promotions/Rings.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: "3",
    title: "Fragrance Frenzy - Your Favorite Scents, Slashed!",
    description: "Sale! Up to 50% Off!",
    img: "/Promotions/Perfumes.jpg",
    url: "/",
    bg: "",
  },
  {
    id: "4",
    title: "Upgrade Your Beauty Kit Without Breaking the Bank!",
    description: "Sale! Up to 50% Off!",
    img: "/Promotions/Cosmetics.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="h-[calc(100vh-80px) overflow-hidden]">
      <div className="w-max h-full flex transition-all ease-in-out duration-1000">
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            {/*Text Container */}
            <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className="rounded-md bg-myFont text-Accent py-3 px-4">
                  SHOP NOW!
                </button>
              </Link>
            </div>
            {/*Image Container */}
            <div className="h-1/2 xl:w-1/2  xl:h-full relative">
              <Image
                src={slide.img}
                alt="Promotion click"
                width={500}
                height={300}
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4 ">
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
