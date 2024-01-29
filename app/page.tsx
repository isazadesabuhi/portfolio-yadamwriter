"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import SvgIcon from "@/app/components/SvgIcon";
import AnimatedText from "@/app/components/AnimatedText";
const MainPageElements = [
  { name: "About", icon: "Smile", link: "/about" },
  { name: "Contact", icon: "Letter", link: "/contact" },
  { name: "Projects", icon: "Filter", link: "/projects" },
  { name: "Testimonial", icon: "Dialog", link: "/testimonial" },
];

export default function Home() {
  const [text, setText] = useState("");

  return (
    <div className="relative grid w-full grid-cols-1 gap-[30px] lg:aspect-[711/310] lg:grid-cols-2">
      {MainPageElements.map((item, index) => {
        return (
          <Link
            href={item.link}
            key={index}
            className={`z-10 flex flex-row rounded-[40px] bg-transparent-black-50 bg-opacity-50 text-[#1364FF] backdrop-blur-[25px] lg:rounded-[80px] ${
              index === 0
                ? "lg:items-start lg:pl-[50px] lg:pt-[50px]"
                : index === 1
                ? "lg:items-start lg:justify-end lg:pr-[50px] lg:pt-[50px]"
                : index === 2
                ? "items-end pb-[50px] pl-[50px] lg:items-end lg:pb-[50px] lg:pl-[50px]"
                : index === 3
                ? "lg:items-end lg:justify-end lg:pb-[50px] lg:pr-[50px]"
                : ""
            }`}
            onMouseEnter={() => setText(item.name)}
            onMouseLeave={() => setText("")}
          >
            <div
              className={`flex flex-row items-center gap-x-[5px] text-[#1364FF] lg:gap-x-[8px]  ${
                [1, 3].includes(index) ? "flex-row-reverse" : ""
              }`}
            >
                          <div className="size-[24px] lg:size-[30px]"> < SvgIcon fill="#1364FF" name={item.icon} fillOpacity={""} /></div>

              {item.name}
            </div>
          </Link>
        );
      })}
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center text-[240px] text-[#1364FF]  ">
        <AnimatedText text={text} />
      </div>
    </div>
  );
}
