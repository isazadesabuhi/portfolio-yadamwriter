"use client";
import Link from "next/link";
import Image from "next/image";
import CardAvatar from "@/app/images/CardAvatar.png";
import NFTFIGMA from "@/app/images/NFTFIGMA.png";
import Thumbnail from "@/app/images/Thumbnail.jpg";
import Arrow from "@/app/icons/Arrow.svg";

const ProjectElements = [
  {
    name: "Budge Management App Case Study",
    image: CardAvatar,
    link: "/projects/project1",
  },
  {
    name: "NFT App Design for IOS Case Study",
    image: NFTFIGMA,
    link: "/projects/project2",
  },
  {
    name: "Clothing Store App for IOS Case Study",
    image: Thumbnail,
    link: "/projects/project2",
  },
];

export default function Projects() {


  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-[10px]">
        {ProjectElements.map((item, index) => {
          return (
            <div key={index} className="flex flex-col">
              <div className="group relative overflow-hidden rounded-[45px] lg:h-[600px] lg:w-[450px]">
                <Image
                  src={item.image.src}
                  alt={item.name}
                  width={464}
                  height={727}
                  className="aspect-[323/255] w-full object-center transition-transform duration-300 ease-in-out hover:scale-110 lg:aspect-[464/727]"
                />

                <Link href={item.link} className="absolute right-[10px] top-[10px] rounded-full bg-[#0A0A0A] p-[10px] opacity-100  lg:right-[30px] lg:top-[110px] lg:rounded-[45px] lg:bg-[#1C1C1C80] lg:px-[45px] lg:py-[30px] lg:opacity-0 lg:transition-all lg:duration-300 lg:ease-in-out lg:group-hover:top-[30px] lg:group-hover:opacity-50">
                  <Image src={Arrow} alt="Arrow" className="rotate-45"/>
                </Link>
              </div>

              <h2 className="pt-[20px] text-[18px] font-medium text-white lg:text-[34px] lg:leading-[50px]">
                {item.name}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
