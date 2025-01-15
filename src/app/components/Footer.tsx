
import Image from "next/image"
import logo from "../../../public/Logo 1.png"

export default function Footer() {

   const itemsFooter = [
      { name: 'About', src: '' },
      { name: 'Music', src: '' },
      { name: 'Concerts', src: '' },
   ]

   const socialMedia = [
      { name: 'Facebook', src: '' },
      { name: 'Instagram', src: '' },
      { name: 'Youtube', src: '' },
   ]

   return (
      <footer className="bg-[#002a43] mt-20 ">

         <div className="w-[1440] h-72 flex flex-row justify-around items-center">
            <Image src={logo} alt="band logo" className="w-64" />
            <div>
               <p className="text-2xl">Sitemap</p>
               <ul>
                  {itemsFooter.map((item) => (
                     <p className="mx-4 cursor-pointer text-[#47d0ee] text-lg hover:underline opacity-80 hover:opacity-100 " key={item.name}>{item.name}</p>
                  ))}
               </ul>
            </div>
            <div>
               <p className="text-2xl">Social Media</p>
               <ul>
                  {socialMedia.map((item) => (
                     <p className="mx-4 cursor-pointer text-[#47d0ee] text-lg hover:underline opacity-80 hover:opacity-100 " key={item.name}>{item.name}</p>
                  ))}
               </ul>
            </div>
         </div>
         <p className="text-center">© 2025. Blue Wings. Todos los derechos reservados.</p>
      </footer>
   )
}