"use client";

import Link from "next/link";
import { useState} from "react";
import SvgIcon from "@/app/components/SvgIcon";
import AnimationPageName from "@/app/components/AnimationPageName"; // or LoadingAnimationGSAP
import AnimationBckgroundPage from "@/app/components/AnimationBckgroundPage"
const MainPageElements = [
  { name: "About", icon: "Smile", link: "/about" },
  { name: "Contact", icon: "Letter", link: "/contact" },
  { name: "Projects", icon: "Filter", link: "/projects" },
  { name: "Testimonial", icon: "Dialog", link: "/testimonial" },
];

export default function Home() {
  const [text, setText] = useState("");
  const [hovered, setHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(false); // null indicates no element is hovered
  const [unhoveredIndex, setUnHoveredIndex] = useState(false); // null indicates no element is hovered

  // Background text animation part
  return (
    <div className="relative grid min-h-screen grid-cols-1 gap-[30px] p-[30px] lg:grid-cols-2">
      {MainPageElements.map((item, index) => {
        return (
          <Link
            href={item.link}
            key={index}
            className={`z-10 flex-row rounded-[40px] bg-transparent-black-50 bg-opacity-50 text-[#1364FF] backdrop-blur-[25px] lg:rounded-[80px] ${
              index === 0
                ? "pl-[20px] pt-[20px] lg:items-start lg:pl-[50px] lg:pt-[50px]"
                : index === 1
                ? "pl-[20px] pt-[20px] lg:pr-[50px] lg:pt-[50px]"
                : index === 2
                ? "items-end pt-[20px] pl-[20px] lg:items-end lg:pt-[50px] lg:pl-[50px]"
                : index === 3
                ? "pt-[20px] pl-[20px] lg:items-end lg:justify-end lg:pt-[50px] lg:pr-[50px]"
                : ""
            }`}
            onMouseEnter={() => {
              setText(item.name);
              setHovered(true);
              setHoveredIndex(index);
              setUnHoveredIndex(null)
            }}
            onMouseLeave={() => {
              setText(item.name);
              setHovered(false);
              setHoveredIndex(null);
              setUnHoveredIndex(index)
            }}
          >
            <div
              className={`flex flex-row items-center gap-x-[5px] text-[#1364FF] lg:gap-x-[8px]  ${
                [1, 3].includes(index) ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* <div className="size-[24px] lg:size-[30px]"> */}
                {" "}
                <SvgIcon fill="#1364FF" name={item.icon} fillOpacity={""} />
              {/* </div> */}
              <AnimationPageName
              {...{index,hoveredIndex,unhoveredIndex}}
                text={item.name}
                direction={undefined}
                hovered={undefined}
              />
            </div>
          </Link>
        );
      })}
      {/* Backround text */}
      <AnimationBckgroundPage {...{text,hovered}} />
    </div>
  );
}
