
import Image from "next/image";
import logo from "../../../public/Logo 1.png";

export default function Footer() {
   const itemsFooter = [
      { name: "About", src: "#" },
      { name: "Music", src: "#" },
      { name: "Concerts", src: "#" },
   ];

   const socialMedia = [
      { name: "Facebook", src: "#" },
      { name: "Instagram", src: "#" },
      { name: "Youtube", src: "#" },
   ];

   return (
      <footer className="bg-[#002a43] text-white py-10 mt-20">
         <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
            {/* Logo */}
            <div className="flex justify-center md:justify-start">
               <Image src={logo} alt="band logo" className="w-48" />
            </div>

            {/* Sitemap */}
            <div className="text-center md:text-left">
               <h2 className="text-xl font-semibold mb-4">Sitemap</h2>
               <ul className="space-y-2">
                  {itemsFooter.map((item) => (
                     <li key={item.name}>
                        <a
                           href={item.src}
                           className="text-[#47d0ee] text-lg hover:underline opacity-80 hover:opacity-100 transition-opacity"
                        >
                           {item.name}
                        </a>
                     </li>
                  ))}
               </ul>
            </div>

            {/* Social Media */}
            <div className="text-center md:text-left">
               <h2 className="text-xl font-semibold mb-4">Social Media</h2>
               <ul className="space-y-2">
                  {socialMedia.map((item) => (
                     <li key={item.name}>
                        <a
                           href={item.src}
                           className="text-[#47d0ee] text-lg hover:underline opacity-80 hover:opacity-100 transition-opacity"
                        >
                           {item.name}
                        </a>
                     </li>
                  ))}
               </ul>
            </div>
         </div>

         {/* Copyright */}
         <div className="mt-10 text-center border-t border-gray-700 pt-4">
            <p className="text-sm">
               © 2025. <span className="font-semibold">Blue Wings</span>. Todos los derechos reservados.
            </p>
         </div>
      </footer>
   );
}
