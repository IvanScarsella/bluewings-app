"use client";

import image01 from "../../public/image01.jpeg"
import image02 from "../../public/image02.jpeg"
import image03 from "../../public/image03.jpeg"
import image04 from "../../public/image04.jpeg"
import image05 from "../../public/image05.jpeg"
import image06 from "../../public/image06.jpeg"
import image07 from "../../public/image07.jpeg"
import image08 from "../../public/image08.jpeg"
import image09 from "../../public/image09.jpeg"
import image10 from "../../public/image10.jpeg"
import image11 from "../../public/image11.jpeg"
import image12 from "../../public/image12.jpeg"
import { useState, useEffect } from "react";
import Image from "next/image";
import mainImage from "../../public/mainImage.jpeg";
import imageEliana from "../../public/imageEliana.jpeg";
import imageGabriel from "../../public/imageGabriel.jpg";
import imageGenaro from "../../public/imageGenaro.jpg";
import imageSantiago from "../../public/imageSantiago.jpeg";
import imageNicolas from "../../public/imageNicolas.jpg";
import imageIvan from "../../public/imageIvan.jpeg";
import Setlist from "./components/Setlist";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const musicians = [
    { name: "Eliana Furiasse", instrument: "vocals", image: imageEliana, description: "Eliana description." },
    { name: "Gabriel Rojas", instrument: "guitar", image: imageGabriel, description: "Gabriel description." },
    { name: "Genaro Russo", instrument: "bass guitar", image: imageGenaro, description: "Genaro description." },
    { name: "Nicolás Rodríguez", instrument: "vocals", image: imageNicolas, description: "Nicolás description." },
    { name: "Santiago Costas", instrument: "guitar", image: imageSantiago, description: "Santiago description." },
    { name: "Iván Scarsella", instrument: "drums", image: imageIvan, description: "Iván description." },
  ];

  const [currentMusicianIndex, setCurrentMusicianIndex] = useState(0);

  // Función para avanzar al siguiente músico automáticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMusicianIndex((prevIndex) => (prevIndex + 1) % musicians.length);
    }, 5000);

    return () => clearInterval(interval); // Limpieza del intervalo al desmontar
  }, [musicians.length]);

  // Manejar selección manual al hacer clic
  const handleMusicianClick = (index: number) => {
    setCurrentMusicianIndex(index);
  };

  const images = [
    image01,
    image02,
    image03,
    image04,
    image05,
    image06,
    image07,
    image08,
    image09,
    image10,
    image11,
    image12,
  ]

  return (
    <main className="w-full h-screen max-w-[1440px] mx-auto bg-white text-white">
      <Image src={mainImage} alt="Main Image" className="w-full top-0" />
      <div className="relative -top-96 flex flex-col items-center mx-auto">
        <p className="text-8xl">Blue Wings</p>
        <p className="text-2xl">Experience it live, get your tickets now!</p>
      </div>

      <div className="flex flex-row justify-between mt-20">
        <p className="w-2/5 text-4xl">About Band</p>
        <p className="w-3/5 text-xl">
          AC/DC es una banda de hard rock británica-australiana, formada en 1973 en Australia por los hermanos escoceses
          Malcolm Young y Angus Young y Dave Evans como vocalista. Sus álbumes se han vendido en un total estimado de
          200 millones de copias, embarcándose en giras multitudinarias por todo el mundo y sus éxitos han musicalizado
          varias producciones cinematográficas sobresalientes. Son famosas sus actuaciones en vivo, resultando
          vibrantes y exultantes espectáculos de primer orden.
        </p>
      </div>

      <p className="text-6xl mb-6 mt-20">Band Members</p>

      <div className="flex flex-row space-x-6">
        {musicians.map((musician, index) => (
          <div
            key={musician.name}
            className={`flex flex-col w-72 cursor-pointer border-8 rounded ${index === currentMusicianIndex ? " border-[#002a43] bg-[#002a43] text-white" : "border-2 border-transparent text-zinc-100"
              }`}
            onClick={() => handleMusicianClick(index)}
          >
            <Image src={musician.image} alt={musician.name} className="size-64" />
            <p className="text-xl">{musician.name}</p>
            <p className="">{musician.instrument}</p>
          </div>
        ))}
      </div>

      {/* Mostrar descripción del músico seleccionado */}
      <div className="mt-6 p-4 bg-gray-800 text-white rounded-md">
        <h2 className="text-2xl font-bold">{musicians[currentMusicianIndex].name}</h2>
        <p className="text-xl mt-2">{musicians[currentMusicianIndex].description}</p>
      </div>

      <div className="grid grid-flow-row grid-cols-6 mt-20">
        {images.map((image, index) => (
          <Image src={image} alt={'image' + index} key={index} className="size-32 m-2" />
        ))}</div>

      <Setlist />
      <Contact />
      <Footer />
    </main>
  );
}
