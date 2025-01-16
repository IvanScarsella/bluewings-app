"use client";

import { useState } from "react";

type Song = {
   name: string;
   band: string;
   src: string;
};

export default function Setlist() {
   const [selectedSong, setSelectedSong] = useState<Song>({
      name: "LFDAA",
      band: "LFDAA",
      src: "https://www.youtube.com/embed/n7iwpiGGJnk?si=TdjsWn5AjBEywoeD",
   });

   const [setList, setSetList] = useState<Song[]>([
      { name: "The Dance Of Eternity", band: "Dream Theater", src: "https://www.youtube.com/embed/eYCYGpu0OxM?si=_ygd-mETNBo954qd" },
      { name: "Home", band: "Dream Theater", src: "https://www.youtube.com/embed/6qNgrtyUIQQ?si=v2emtHzYupOrQVLf" },
      { name: "Seventh Son of a Seventh Son", band: "Iron Maiden", src: "https://www.youtube.com/embed/ZjphaXXEU9o?si=mDC-oaW6g3oDqyic" },
      { name: "Creeping Death", band: "Metallica", src: "https://www.youtube.com/embed/X8OeBZQn3_w?si=TdorGeLBLffJ79gF" },
      { name: "Psychohistory", band: "Septicflesh", src: "https://www.youtube.com/embed/SRYbE-06wiE?si=t10EvvFLWPX10Lrv" },
      { name: "Flying Whales", band: "Gojira", src: "https://www.youtube.com/embed/eg_OyqkITSE?si=Av0sK6zm0rH9E6kK" },
      { name: "Bleed", band: "Meshuggah", src: "https://www.youtube.com/embed/GAulPs96ass?si=IBFVWW6AIBwG3v4v" },
   ]);

   const [searchTerm, setSearchTerm] = useState("");

   const filteredSetList = setList.filter((song) =>
      song.name.toLowerCase().includes(searchTerm.toLowerCase())
   );

   const sortBy = (key: keyof Song, reverse: boolean = false) => {
      const sorted = [...setList].sort((a, b) =>
         a[key].localeCompare(b[key])
      );
      setSetList(reverse ? sorted.reverse() : sorted);
   };

   return (
      <div className="mt-20 w-full px-4 md:px-10">
         <p className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Our Music
         </p>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Reproductor */}
            <div>
               <iframe
                  width="100%"
                  height="315"
                  src={selectedSong.src}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  className="rounded-lg shadow-lg"
               ></iframe>
               <p className="mt-4 text-lg font-semibold">{selectedSong.name}</p>
               <p className="text-gray-500">{selectedSong.band}</p>
            </div>

            {/* Filtros y lista */}
            <div className="md:col-span-2">
               <input
                  type="text"
                  placeholder="Search songs..."
                  className="w-full p-3 mb-4 rounded-md border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
               />

               <div className="flex flex-wrap gap-3 mb-4">
                  <button
                     className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                     onClick={() => sortBy("name")}
                  >
                     Name A-Z
                  </button>
                  <button
                     className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                     onClick={() => sortBy("name", true)}
                  >
                     Name Z-A
                  </button>
                  <button
                     className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                     onClick={() => sortBy("band")}
                  >
                     Band A-Z
                  </button>
                  <button
                     className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                     onClick={() => sortBy("band", true)}
                  >
                     Band Z-A
                  </button>
               </div>

               <div className="max-h-80 overflow-y-auto bg-gray-900 text-white rounded-lg p-4 shadow-md">
                  <ul className="space-y-2">
                     {filteredSetList.map((song, index) => (
                        <li
                           key={index}
                           className={`p-3 rounded-lg cursor-pointer hover:bg-blue-700 transition-all ${song.name === selectedSong.name
                                 ? "bg-blue-600"
                                 : "bg-gray-800"
                              }`}
                           onClick={() => setSelectedSong(song)}
                        >
                           <p className="font-medium">{index + 1}. {song.name}</p>
                           <span className="text-sm text-gray-300">{song.band}</span>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
}
