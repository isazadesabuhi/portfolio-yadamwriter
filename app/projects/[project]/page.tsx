"use client";

import Image from "next/image";

import img_About1 from "@/app/images/img_About1.jpg";
import OurRoles2 from "@/app/images/OurRoles2.jpg";
import DesignProcess3 from "@/app/images/DesignProcess3.jpg";
import Problems4 from "@/app/images/Problems4.jpg";
import Empathy5 from "@/app/images/Empathy5.jpg";
import Persona6 from "@/app/images/Persona6.jpg";
import Information7 from "@/app/images/Information7.jpg";
import Wireframe8 from "@/app/images/Wireframe8.jpg";
import Wireframe9 from "@/app/images/Wireframe9.jpg";
import FontFamily10 from "@/app/images/FontFamily10.jpg";
import ColorPalette11 from "@/app/images/ColorPalette11.jpg";
import UIComponents12 from "@/app/images/UIComponents12.jpg";
import VisualDesign13 from "@/app/images/VisualDesign13.jpg";
import SvgIcon from "@/app/components/SvgIcon";
import Button from "@/app/components/button";

const ProjectElements = [
  { name: "About", image: img_About1 },
  { name: "Contact", image: OurRoles2 },
  { name: "Projects", image: DesignProcess3 },
  { name: "Testimonial", image: Problems4 },
  { name: "About", image: Empathy5 },
  { name: "Contact", image: Persona6 },
  { name: "Projects", image: Information7 },
  { name: "Testimonial", image: Wireframe8 },
  { name: "Testimonial", image: Wireframe9 },
  { name: "About", image: FontFamily10 },
  { name: "Contact", image: ColorPalette11 },
  { name: "Projects", image: UIComponents12 },
  { name: "Testimonial", image: VisualDesign13 },
];

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

export default function Page({ params }: { params: { project: string } }) {
  return (
    <div className="">
      <div className="flex flex-col">
        {/* <h1 className="text-[34px] font-medium leading-normal text-MaBlue lg:text-[100px]">
          Budge Management App Case Study
        </h1> */}
        <div className="flex flex-col gap-y-[30px] pt-[15px]">
          {ProjectElements.map((item, index) => {
            return (
              <div key={index}>
                <Image
                  src={item.image}
                  alt={item.name}
                  // width={1500}
                  // height={800}
                  className="aspect-[1452/816] w-full rounded-[25px] lg:rounded-[80px]"
                />
              </div>
            );
          })}
        </div>
      </div>
      <button
        onClick={scrollToTop}
        className="fixed bottom-[100px] right-[30px] flex justify-center rounded-[45px] bg-transparent-black-50 p-[10px] text-MaBlue lg:bottom-[140px] lg:right-[40px] lg:px-[45px] lg:py-[30px]"
      >
        <SvgIcon name="Arrow" fill={""} fillOpacity={""} />
      </button>
      <div className="pt-[30px]">
        <Button type="link" name="See it on Behance" />
      </div>
    </div>
  );
}
