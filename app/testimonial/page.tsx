import React from "react";
import Image, { StaticImageData } from "next/image";
import reviewImg1 from "@/app/images/reviewImg1.jpg";
import SvgIcon from "@/app/components/SvgIcon";

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
    <div className="flex aspect-[310/282] w-full flex-col items-start justify-between gap-[30px] rounded-[80px] bg-transparent-black-50 p-[30px] lg:aspect-[464/328] ">
      <div className="flex w-full flex-col">
        <div className="flex flex-row justify-between ">
          <div className="text-[34px] font-semibold text-white">
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
        <div className=" text-lg font-normal text-white">
          {text}
        </div>
      </div>
      <div className="flex items-center justify-end gap-[5px]">
        <SvgIcon name="stars" fill={""} fillOpacity={""} />
        <div className=" text-2xl font-semibold text-lime-400">
          {star}
        </div>
      </div>
    </div>
  );
};

export default function Testimonial() {
  return (
    <div className="flex flex-col pb-[82px] lg:pb-[130px]">
      <div className="grid gap-y-[5px] sm:grid-cols-2 sm:gap-[20px] lg:grid-cols-3 lg:gap-x-[30px] lg:gap-y-[45px]">
        {Array.from({ length: 9 }).map((_, index) => (
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
