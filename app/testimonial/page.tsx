import React from "react";
import Image, { StaticImageData } from "next/image";

import reviewImg1 from "@/app/images/reviewImg1.jpg";
import stars from "@/app/icons/stars.svg";

const ReviewCard = ({
  name,
  surname,
  star,
  text,
  image,
}: {
  name: string;
  surname: string;
  star: string;
  text: string;
  image: StaticImageData;
}) => {
  return (
    <div className="inline-flex h-[328px] w-[464px] flex-col items-start justify-start gap-[30px] rounded-[80px] bg-zinc-900 bg-opacity-50 p-[30px]">
      <div className="flex flex-col items-start justify-start gap-[15px]">
        <div className="inline-flex items-center justify-start gap-[15px]">
          <div className="w-[309px] text-[34px] font-semibold text-white ">
            {name}
            <br />
            {surname}
          </div>
          <Image
            className="h-[100px] w-[80px] rounded-[45px] object-fill"
            src={image}
            alt={name}
          />
        </div>
        <div className="h-[92px] w-[404px] text-lg font-normal text-white">
          {text}
        </div>
      </div>
      <div className="inline-flex items-center justify-end gap-[5px]">
        <Image src={stars} alt="stars_icon" />
        <div className="w-[353px] text-2xl font-semibold text-lime-400">
          {star}
        </div>
      </div>
    </div>
  );
};

export default function Testimonial() {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-3 gap-x-[30px] gap-y-[45px]">
        {Array.from({ length: 6 }).map((_, index) => (
          <ReviewCard
            key={index}
            name="Eva"
            surname="Smith"
            star="9.9"
            text="It was a pleasure to work with him. I learned a lot from him about his skills and expertise, and I am confident that we can achieve great things together again in the future."
            image={reviewImg1}
          />
        ))}
      </div>
    </div>
  );
}
