import Image from "next/image";
import Link from "next/link";

import SmileWhite from "@/app/icons/SmileWhite.svg";
import LetterWhite from "@/app/icons/LetterWhite.svg";
import FiltersWhite from "@/app/icons/FiltersWhite.svg";
import DialogWhite from "@/app/icons/DialogWhite.svg";

const NavigationElements = [
  { name: "About", icon: SmileWhite, link: "/about" },
  { name: "Contact", icon: LetterWhite, link: "/contact" },
  { name: "Projects", icon: FiltersWhite, link: "/projects" },
  { name: "Testimonial", icon: DialogWhite, link: "/testimonial" },
];

function NavBar() {
  return (
    <div className="flex flex-row gap-x-0">
      {NavigationElements.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.link}
            className="group relative flex size-[77px] flex-col items-center justify-center overflow-hidden rounded-[45px] bg-[#1C1C1C80] lg:h-[107px] lg:w-[160px]"
          >
            <Image
              src={item.icon.src}
              alt={item.name}
              width={30}
              height={30}
              className="z-30 size-[24px] lg:size-[30px]"
            />
            <h2 className="z-30 hidden text-[18px] font-medium leading-[24px] text-white lg:block">
              {item.name}
            </h2>
            <div className="absolute bottom-[-200px] size-[165px] rounded-full bg-MaBlue opacity-0 transition-all duration-300 ease-in-out group-hover:bottom-[-150px] group-hover:opacity-100 group-focus:bottom-[-25px] group-focus:opacity-100"></div>
          </Link>
        );
      })}
    </div>
  );
}

export default NavBar;
