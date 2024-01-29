"use client";

import { useState } from "react";
import Link from "next/link";
import Input from "@/app/components/input";
import NavBar from "@/app/components/navBar";
import Textarea from "@/app/components/textarea";
import Button from "@/app/components/button";
import SvgIcon from "@/app/components/SvgIcon";

export default function Contact() {
  const [exitBtn, setExitBtn] = useState(false);
  const modalExitBtn = () => {
    setExitBtn(true);
    window.location.reload();
  };

  const [btnIsClicked, setBtnIsClicked] = useState(false);

  const handleDataFromBtn = (data: any) => {
    setBtnIsClicked(data);
  };

  return (
    <div className="relative">
      <div
        className={`grid grid-cols-1 gap-x-[30px] gap-y-[5px] pb-[82px] lg:grid-cols-2 lg:gap-y-[30px] lg:pb-[130px] ${
          !btnIsClicked ? "" : "blur-[12.5px]"
        }`}
      >
        <h1 className="col-span-2 pb-[5px] text-[34px] font-medium leading-normal text-MaBlue lg:pb-[15px] lg:text-[100px]">
          Contact
        </h1>
        <div className="col-span-2 lg:col-span-1">
          <Input name="Name or Company" inputType="text" />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <Input name="Email" inputType="email" />
        </div>

        <div className="col-span-2 lg:col-span-2">
          <Textarea />
        </div>
        <div className="col-span-2">
          <Button
            type="button"
            name="Send Message"
            onDataFromButton={handleDataFromBtn}
          />
        </div>
        <h2 className="col-span-2 text-[18px] font-normal leading-normal text-[#1364FF] lg:text-[60px]">
          Keep in touch
        </h2>
        <Link
          href="https://www.linkedin.com/in/mahammadkhasiyev/"
          className="col-span-2 lg:col-span-1"
          target="_blank"
        >
          <Button type="link" name="Linkedin" />
        </Link>
        <Link
          href="https://www.behance.net/mahammadkhasiyev"
          className="col-span-2 lg:col-span-1"
          target="_blank"
        >
          <Button type="link" name="Behance" />
        </Link>
        <div className="fixed inset-x-0 bottom-[5px] lg:bottom-[30px] flex justify-center">
          <NavBar />
        </div>
      </div>
      {/* modal part */}
      <div
        className={`fixed inset-0 flex items-center justify-center ${btnIsClicked ? "" : "hidden"}`}
        style={{ 
          overflow: 'hidden' // Prevent scrolling on the body when the modal is open
        }}
      >
        <div
          className="absolute left-1/2 top-[250px] flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center
     rounded-[40px] p-[30px] lg:top-[400px] lg:w-auto lg:rounded-[80px]"
          style={{
            background:
              "var(--transparent-colors-black-50, rgba(28, 28, 28, 0.50))",
          }}
        >
          <h1 className="flex flex-col text-[34px] font-normal leading-normal text-MaBlue lg:text-[60px]">
            <span>Your message</span>
            <span>has been sent</span>
          </h1>
          <p className="text-center text-[16px] font-normal leading-[24px] text-[#FFFFFF] lg:text-[34px] lg:leading-[50px]">
            Thank you for reaching out to me. I will get back to you within 36
            hours
          </p>
        </div>
        <button
          onClick={modalExitBtn}
          className="absolute right-[5px] top-[5px] flex size-[77px] flex-col items-center  justify-center rounded-full lg:right-[30px] lg:top-[30px] lg:h-[107px] lg:w-[160px] lg:rounded-[45px]"
          style={{
            background:
              "var(--transparent-colors-black-50, rgba(28, 28, 28, 0.50))",
          }}
        >
          <p className="top-0 size-[24px] text-white">
            <SvgIcon name="X" fill={""} fillOpacity={""} />
          </p>
          <p className="top-0 hidden text-[18px] text-white lg:block">ESC</p>
        </button>
      </div>
    </div>
  );
}
