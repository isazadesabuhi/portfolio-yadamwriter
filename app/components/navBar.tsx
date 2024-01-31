"use client"

import Image from "next/image";
import Link from "next/link";
import SvgIcon from "@/app/components/SvgIcon";
import { motion } from 'framer-motion';
import { useState,useEffect } from 'react'

import { usePathname } from 'next/navigation'

const NavigationElements = [
  { name: "About", icon: "Smile", link: "/about" },
  { name: "Contact", icon: "Letter", link: "/contact" },
  { name: "Projects", icon: "Filter", link: "/projects" },
  { name: "Testimonial", icon: "Dialog", link: "/testimonial" },
];




function NavBar() {
  const pathname = usePathname()
// State to force re-render
const [key, setKey] = useState(0);

useEffect(() => {
  // Reset the key to re-trigger the animation
  setKey(prev => prev + 1);
}, [pathname]); // Dependency on pathname


  const linkVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.2, delay: index * 0.05 },
    }),
  };
  return (
    <div className="flex flex-row gap-x-0">
      {NavigationElements.map((item, index) => {
        return (
          <Link key={index} href={item.link}>
            <motion.div
              key={key}
              className="group relative flex size-[77px] flex-col items-center justify-center overflow-hidden rounded-[45px] bg-transparent-black-50 lg:h-[107px] lg:w-[160px]"
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <div className="z-30 size-[24px] lg:size-[30px]">
                <SvgIcon fill="white" name={item.icon} fillOpacity={""} />
              </div>
              <h2 className="z-30 hidden text-[18px] font-medium leading-[24px] text-white lg:block">
                {item.name}
              </h2>
              <div className="absolute bottom-[-200px] size-[165px] rounded-full bg-MaBlue opacity-0 transition-all duration-300 ease-in-out group-hover:bottom-[-150px] group-hover:opacity-100 group-focus:bottom-[-25px] group-focus:opacity-100"></div>
            </motion.div>
          </Link>
        );
      })}
    </div>
  );
}

export default NavBar;
