"use client"

import Image from "next/image";
import { useState, SetStateAction } from "react";
import Confirmation from "@/app/icons/Confirmation.svg";
import SvgIcon from "@/app/components/SvgIcon";

export default function Textarea() {

  const [inputValue, setInputValue] = useState("");
  const [inputFocused, setInputFocused] = useState(false);

  const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setInputValue(event.target.value);
  };

  const handleFocus = () => {
    setInputFocused(true);
  };

  const handleBlur = () => {
    setInputFocused(false);
  };

  return (
    <div className="group relative overflow-hidden focus:border-none">
      <textarea
        id="message"
        rows={4}
        cols={33}
        className="block h-[214px] w-full resize-none rounded-[32px] bg-transparent-black-50 pl-[54px] 
 pr-[20px] pt-[30px] text-[16px] font-normal leading-normal 
 text-[#FFFFFF] outline-none ring-purple-50 placeholder:text-[#FFFFFF80] lg:rounded-[45px] lg:pl-[79px] lg:text-[18px]"
        placeholder={`${inputFocused ? "" : "Briefly describe your project"}`} 
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      ></textarea>
      <span className="absolute left-[20px] top-[30px] flex overflow-hidden bg-[#1C1C1C80/50] lg:left-[45px]">
        <SvgIcon name="pen" fillOpacity="0.5" fill={""} />
      </span>
      <Image
        src={Confirmation}
        alt={"Confirmation"}
        width={24}
        height={24}
        className={`absolute left-1/2 top-[214px] w-full -translate-x-1/2 rounded-full 
    opacity-100 transition-all duration-300 ease-in-out group-hover:top-[194px] lg:group-hover:top-[194px] 
    ${inputValue.length >0 ? "group-hover:top-[214] lg:group-hover:top-[214px] ": ""}`}
      />
    </div>
  );
}
