"use client"

import { useState } from "react"

type Song = {
   name: string,
   band: string,
   src: string
}

export default function Setlist() {

   const [selectedSong, setSelectedSong] = useState<Song>(
      { name: "LFDAA", band: 'LFDAA', src: 'https://www.youtube.com/embed/n7iwpiGGJnk?si=TdjsWn5AjBEywoeD' }
   )

   const setList = [
      { name: "The Dance Of Eternity", band: 'Dream Theater', src: 'https://www.youtube.com/embed/eYCYGpu0OxM?si=_ygd-mETNBo954qd' },
      { name: "Home", band: 'Dream Theater', src: 'https://www.youtube.com/embed/6qNgrtyUIQQ?si=v2emtHzYupOrQVLf' },
      { name: "Seventh Son of a Seventh Son", band: 'Iron Maiden', src: 'https://www.youtube.com/embed/ZjphaXXEU9o?si=mDC-oaW6g3oDqyic' },
      { name: "Creeping Death", band: 'Metallica', src: 'https://www.youtube.com/embed/X8OeBZQn3_w?si=TdorGeLBLffJ79gF' },
   ]

   return (
      <div className="flex flex-col mt-20">
         <p className="text-6xl">Our Music</p>
         <div className="flex flex-row w-full justify-around mt-10">
            <iframe width="560" height="315" src={selectedSong.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <ul>
               {setList.map((song, index) => (
                  <li key={index} className={`${song.name === selectedSong.name ? 'bg-zinc-800 text-white hover:no-underline text-xl pl-4 rounded-md' : 'text-gray-100'} cursor-pointer   hover:underline px-2`} onClick={() => setSelectedSong(song)}>{index + 1}. {song.name} <span className="text-xs">({song.band})</span></li>
               ))}
            </ul>
         </div>
      </div>
   )
}