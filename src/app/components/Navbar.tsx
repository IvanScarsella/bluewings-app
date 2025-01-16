"use client"

import { useState } from "react";
import Image from "next/image";
import logo from "../../../public/Logo 1.png";

export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false);

   const itemsNav = [
      { name: "About", src: "#" },
      { name: "Music", src: "#" },
      { name: "Concerts", src: "#" },
   ];

   return (
      <nav className="bg-[#002a43] text-white fixed top-0 left-0 right-0 z-50 shadow-md overflow-hidden">
         <div className="container mx-auto px-6 flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
               <Image src={logo} alt="band logo" className="w-36" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
               {itemsNav.map((item) => (
                  <a
                     key={item.name}
                     href={item.src}
                     className="text-lg text-[#47d0ee] hover:underline hover:opacity-100 opacity-80 transition-opacity"
                  >
                     {item.name}
                  </a>
               ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
               <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="focus:outline-none text-[#47d0ee]"
               >
                  {isOpen ? (
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={2}
                           d="M6 18L18 6M6 6l12 12"
                        />
                     </svg>
                  ) : (
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={2}
                           d="M4 6h16M4 12h16m-7 6h7"
                        />
                     </svg>
                  )}
               </button>
            </div>
         </div>

         {/* Mobile Menu Dropdown */}
         {isOpen && (
            <div className="md:hidden bg-[#002a43] text-white px-6 pb-4 space-y-2">
               {itemsNav.map((item) => (
                  <a
                     key={item.name}
                     href={item.src}
                     className="block text-lg text-[#47d0ee] hover:underline hover:opacity-100 opacity-80 transition-opacity"
                  >
                     {item.name}
                  </a>
               ))}
            </div>
         )}
      </nav>
   );
}
