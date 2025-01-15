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
      {
         name: "The Dance Of Eternity",
         band: "Dream Theater",
         src: "https://www.youtube.com/embed/eYCYGpu0OxM?si=_ygd-mETNBo954qd",
      },
      {
         name: "Home",
         band: "Dream Theater",
         src: "https://www.youtube.com/embed/6qNgrtyUIQQ?si=v2emtHzYupOrQVLf",
      },
      {
         name: "Seventh Son of a Seventh Son",
         band: "Iron Maiden",
         src: "https://www.youtube.com/embed/ZjphaXXEU9o?si=mDC-oaW6g3oDqyic",
      },
      {
         name: "Creeping Death",
         band: "Metallica",
         src: "https://www.youtube.com/embed/X8OeBZQn3_w?si=TdorGeLBLffJ79gF",
      },
      {
         name: "Psychohistory",
         band: "Septicflesh",
         src: "https://www.youtube.com/embed/SRYbE-06wiE?si=t10EvvFLWPX10Lrv",
      },
      {
         name: "Flying Whales",
         band: "Gojira",
         src: "https://www.youtube.com/embed/eg_OyqkITSE?si=Av0sK6zm0rH9E6kK",
      },
      {
         name: "Bleed",
         band: "Meshuggah",
         src: "https://www.youtube.com/embed/GAulPs96ass?si=IBFVWW6AIBwG3v4v",
      },
   ]);

   const [searchTerm, setSearchTerm] = useState("");

   // Filtrar canciones según el término de búsqueda
   const filteredSetList = setList.filter((song) =>
      song.name.toLowerCase().includes(searchTerm.toLowerCase())
   );

   // Funciones de ordenación
   const sortByNameAZ = () => {
      const sorted = [...setList].sort((a, b) => a.name.localeCompare(b.name));
      setSetList(sorted);
   };

   const sortByNameZA = () => {
      const sorted = [...setList]
         .sort((a, b) => a.name.localeCompare(b.name))
         .reverse();
      setSetList(sorted);
   };

   const sortByBandAZ = () => {
      const sorted = [...setList].sort((a, b) => a.band.localeCompare(b.band));
      setSetList(sorted);
   };

   const sortByBandZA = () => {
      const sorted = [...setList]
         .sort((a, b) => a.band.localeCompare(b.band))
         .reverse();
      setSetList(sorted);
   };

   return (
      <div className="flex flex-col mt-20">
         <p className="text-6xl mb-6">Our Music</p>


         {/* Contenido principal */}
         <div className="flex flex-row w-full justify-between">
            {/* Reproductor */}
            <iframe
               width="560"
               height="315"
               src={selectedSong.src}
               title="YouTube video player"
               frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               referrerPolicy="strict-origin-when-cross-origin"
               allowFullScreen
               className="my-auto"
            ></iframe>

            {/* Lista de canciones con scroll */}
            {/* Controles */}
            <div>

               <div className="flex flex-col space-y-4 mb-4">
                  <input
                     type="text"
                     placeholder="Search songs..."
                     className="p-2 border border-gray-300 rounded-md w-full text-black"
                     value={searchTerm}
                     onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className="flex flex-wrap space-x-4">
                     <button
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        onClick={sortByNameAZ}
                     >
                        Sort Name A-Z
                     </button>
                     <button
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        onClick={sortByNameZA}
                     >
                        Sort Name Z-A
                     </button>
                     <button
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        onClick={sortByBandAZ}
                     >
                        Sort Band A-Z
                     </button>
                     <button
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        onClick={sortByBandZA}
                     >
                        Sort Band Z-A
                     </button>
                  </div>
               </div>
               <div className="w-full max-h-80 overflow-y-scroll border border-gray-300 rounded-md p-2 bg-gray-800">
                  <ul>
                     {filteredSetList.map((song, index) => (
                        <li
                           key={index}
                           className={`cursor-pointer p-2 rounded-md ${song.name === selectedSong.name
                              ? "bg-blue-600 text-white"
                              : "text-gray-100 hover:bg-gray-700"
                              }`}
                           onClick={() => setSelectedSong(song)}
                        >
                           {index + 1}. {song.name}{" "}
                           <span className="text-sm">({song.band})</span>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
}
