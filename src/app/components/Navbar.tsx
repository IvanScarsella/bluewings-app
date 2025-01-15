import Image from "next/image";
import logo from "../../../public/Logo 1.png"

export default function Navbar() {

   const itemsNav = [
      { name: 'About', src: '' },
      { name: 'Music', src: '' },
      { name: 'Concerts', src: '' },
   ]

   return (
      <div className="bg-[#002a43] text-white flex flex-row justify-between px-16 fixed top-0 left-0 right-0 mx-auto w-[1440] opacity-80">
         <Image src={logo} alt="band logo" className="w-48 " />
         <div className="flex flex-row items-center">

            {itemsNav.map((item) => (
               <p className="mx-4 cursor-pointer text-[#47d0ee] text-lg hover:underline opacity-80 hover:opacity-100 " key={item.name}>{item.name}</p>
            ))}
         </div>
      </div>
   )
}