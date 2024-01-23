"use client";

import React from "react";

const textAboutMe =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae,itaque voluptas libero ullam consectetur molestias eos ametipsumorem,ipsum dolor sit amet consectetur adipisicing elit. Molestiae, itaquevoluptas libero ullam consectetur molestias eos ametipsu dolor sit ametconsectetur adipisicing elit. Molestiae, itaque voluptas libero ullamconsectetur molestias eos amet nisi facere ut? Amet nesciunt repellendusvoluptates eum quisquam optio dolorem nobis odirem, ipsum dolor sit ametconsectetur adipisicing elit. Molestiae, itaque voluptas libero ullamconsectetur molestias eos amet nisi facere ut? Amet nesciunt repellendusvoluptates eum quisquam optio dolorem nobis odio.";
export default function About() {
  return (
    <div className="flex flex-col">
      <p
        className="h-[400px] overflow-y-scroll rounded-[80px]
             bg-[#1C1C1C80] p-[60px] text-[40px] text-white"
      >
        {textAboutMe}
      </p>
    </div>
  );
}
