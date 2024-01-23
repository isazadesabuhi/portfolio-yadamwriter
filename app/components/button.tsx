"use client";

import Image from "next/image";
import { useState } from "react";
import Circle from "@/app/icons/Circle.svg";
import SvgIcon from "@/app/components/SvgIcon";

export default function Button({ type, name, onDataFromButton } : {type:string; name:string;onDataFromButton?: (clicked: boolean) => void;}) {
  const [animationState, setAnimationState] = useState("initial");
  const [secondAnimation, setSecondAnimation] = useState(false);
  const [btnClicked, setBtnClicked] = useState(false);
  const handleClick = () => {
    // Start the animation
    setAnimationState("animate");

    // Set a timeout to revert the animation after 300ms
    setTimeout(() => {
      setAnimationState("revert");
    }, 300);

    setTimeout(() => {
      setSecondAnimation(!secondAnimation);
      setBtnClicked(true);
    }, 600);
  };

  const sendDataToContactPage = () => {
    if (typeof onDataFromButton === 'function') {
      onDataFromButton(btnClicked);
    }
  };
  

  return (
    <button
      onClick={() => {
        handleClick();
        sendDataToContactPage();
      }}
      className="group relative h-[77px] w-full overflow-hidden rounded-full border-MaBlue
     bg-[#1C1C1C80] text-[#FFFFFF] lg:h-[107px]"
    >
      <div
        className={`relative z-20 flex w-full flex-row gap-x-[10px] ${
          type === "button" ? "justify-center" : ""
        }`}
      >
        {type === "button" ? (
          <span className="text-[16px] font-normal text-[#FFFFFF] lg:text-[18px]">
            {name}
          </span>
        ) : (
          <div className="flex w-full flex-row justify-between px-[20px] lg:px-[45px]">
            <p className="text-[16px] font-normal text-[#FFFFFF] lg:text-[18px]">
              {name}
            </p>
            <div
              className="rotate-45 transition-all duration-300 
            ease-in-out group-hover:translate-x-[7px] group-hover:translate-y-[-7px]"
            >
              <SvgIcon name="Arrow" fill={""} fillOpacity={""} />
            </div>
          </div>
        )}

        {type === "button" ? (
          <>
            <span
              className={`transition-all duration-300 ease-in-out group-hover:translate-x-[7px] 
        group-hover:translate-y-[-7px] group-focus:translate-x-[70px] group-focus:translate-y-[-70px] ${
          animationState === "animate" ? "opacity-0" : "opacity-100"
        } ${secondAnimation ? "hidden" : ""}`}
            >
              <SvgIcon name="PaperPlane" fill={""} fillOpacity={""} />
            </span>
            <span
              className={`transition-all duration-300 ease-in-out
          ${
            secondAnimation
              ? "translate-x-0 translate-y-0 opacity-100"
              : "translate-x-[-70px] translate-y-[-70px] opacity-0"
          }`}
            >
              <SvgIcon name="PaperPlane" fill={""} fillOpacity={""} />
            </span>
          </>
        ) : (
          ""
        )}
      </div>
      <Image
        src={Circle}
        alt={"Circle"}
        width={24}
        height={24}
        className={`absolute left-1/2 top-[77px] w-full -translate-x-1/2 
        rounded-full opacity-100 
        transition-all duration-300 ease-in-out group-hover:top-[57px] 
        
        lg:top-[107px] lg:group-hover:top-[87px] 
        ${
          animationState === "animate"
            ? "group-focus:top-[57px] group-focus:-translate-y-1/2"
            : ""
        }`}
      />
    </button>
  );
}