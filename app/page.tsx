"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Smile from "@/app/icons/Smile.svg";
import Letter from "@/app/icons/Letter.svg";
import Filters from "@/app/icons/Filters.svg";
import Dialog from "@/app/icons/Dialog.svg";

const MainPageElements = [
  { name: "About", icon: Smile, link: "/about" },
  { name: "Contact", icon: Letter, link: "/contact" },
  { name: "Projects", icon: Filters, link: "/projects" },
  { name: "Testimonial", icon: Dialog, link: "/testimonial" },
];

export default function Home() {
  const [text, setText] = useState("");
  return (
    <main className="relative grid h-screen w-screen grid-cols-1 gap-[30px] py-[30px] lg:grid-cols-2">
      {MainPageElements.map((item, index) => {
        return (
          <Link
            href={item.link}
            key={index}
            className={`z-10 flex flex-row rounded-[80px] bg-gray-800 bg-opacity-50 text-[#1364FF]  ${
              index === 0
                ? "items-start pl-[50px] pt-[50px]"
                : index === 1
                ? "items-start justify-end pr-[50px] pt-[50px]"
                : index === 2
                ? "items-end pb-[50px] pl-[50px]"
                : "items-end justify-end pb-[50px] pr-[50px]"
            }`}
            onMouseEnter={() => setText(item.name)}
            onMouseLeave={() => setText("")}
          >
            <div
              className={`flex flex-row gap-x-[10px] text-[#1364FF] ${
                [1, 3].includes(index) ? "flex-row-reverse" : ""
              }`}
            >
              <Image
                src={item.icon.src}
                alt={item.name}
                width={20}
                height={20}
                className=""
              />
              {item.name}
            </div>
          </Link>
        );
      })}
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center text-[240px] text-[#1364FF]">
        {text}
      </div>
    </main>
  );
}
