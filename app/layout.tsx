"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/components/navBar";
const inter = Inter({ subsets: ["latin"] });
import { usePathname } from 'next/navigation'


// export const metadata: Metadata = {
//   title: "Mahammad Khasiyev",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  const pathname = usePathname()

  console.log(pathname); // This will log the current pathname

  const HeadingObject: { [key: string]: string } = {
    "/about": "About",
    "/testimonial": "Testimonial",
    "/projects": "Projects",
  };



  return (
    <html className="max-w-[1512px] bg-black " lang="en">
      <body className={inter.className}>
      <h1 className="pb-[5px] text-[34px] font-medium text-MaBlue lg:pb-[15px] lg:text-[100px]">{HeadingObject[pathname]}</h1>
        {children}
        {Object.keys(HeadingObject).includes(pathname) ? <div className="fixed inset-x-0 bottom-[20px] flex justify-center">
          <NavBar />
        </div> : "" }
        
      </body>
    </html>
  );
}
