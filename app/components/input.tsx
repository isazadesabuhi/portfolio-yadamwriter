"use client";

import Image from "next/image";
import { useState, useEffect, SetStateAction } from "react";
import Confirmation from "@/app/icons/Confirmation.svg";
import Error from "@/app/icons/Error.svg";
import SvgIcon from "@/app/components/SvgIcon";
export default function Input({
  name,
  inputType,
}: {
  name: string;
  inputType: string;
}) {
  const [isLabelHovered, setIsLabelHovered] = useState(false);

  // Event handler for mouse enter
  const handleMouseEnter = () => {
    setIsLabelHovered(true);
  };

  // Event handler for mouse leave
  const handleMouseLeave = () => {
    setIsLabelHovered(false);
  };

  const [inputValue, setInputValue] = useState("");
  const [inputFocused, setInputFocused] = useState(false);
  const [inputValid, setInputValid] = useState(false);
  const [somethingWrong, setSomethingWrong] = useState(false);

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputValue(event.target.value);
  };

  const handleFocus = () => {
    setInputFocused(true);
  };

  const handleBlur = () => {
    setInputFocused(false);
  };

  useEffect(() => {
    if (inputValue.length > 0) {
      if (inputValue.length > 3) {
        setInputValid(true);
        setSomethingWrong(false)
      } else {
        setInputValid(false);
        if (!inputFocused) {
          setSomethingWrong(true);
        }
      }
    }
  }, [inputValue.length, inputFocused]);

  return (
    <label
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative flex w-full overflow-hidden"
    >
      <span className="sr-only">Search</span>
      <span className="absolute inset-y-0 left-0 flex items-center overflow-hidden bg-[#1C1C1C80/50] pl-[20px] lg:pl-[45px]">
        <SvgIcon
          name={`${inputType === "text" ? "hand" : "email"}`}
          fill={
            inputFocused || inputValid
              ? `#1364FF`
              : somethingWrong
              ? `#F16B51`
              : `white`
          }
          fillOpacity={
            inputFocused || somethingWrong || inputValid ? `1` : `0.5`
          }
        />
      </span>
      <Image
        src={
          inputFocused || inputValid || !somethingWrong ? Confirmation : Error
        }
        alt={somethingWrong ? "Error" : "Confirmation"}
        width={30}
        height={30}
        className={`absolute w-full rounded-full transition-all duration-300 ease-in-out        
         ${
           (somethingWrong && !inputFocused) || (inputValid && !inputFocused)
             ? "right-[25px] top-[26.5px] size-[24px] translate-x-1/2 lg:right-[45px] lg:top-[39.5px] lg:size-[30px]"
             : "top-[77px] group-hover:top-[57px] lg:top-[107px] lg:group-hover:top-[87px]"
         }
     `}
      />
      <input
        className="block h-[77px] w-full rounded-[32px] 
        bg-transparent-black-50 pl-[54px] text-[16px] font-normal
         leading-normal text-[#FFFFFF]
          placeholder:text-[#FFFFFF80] focus:outline-none 
         lg:h-[107px]  lg:rounded-[45px] lg:pl-[79px]
          lg:text-[18px]"
        placeholder={
          inputFocused ? "" : somethingWrong ? "Something went wrong..." : name
        }
        type={inputType}
        name="search"
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </label>
  );
}
