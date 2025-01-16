"use client";

import image01 from "../../public/image01.jpeg";
import image02 from "../../public/image02.jpeg";
import image03 from "../../public/image03.jpeg";
import image04 from "../../public/image04.jpeg";
import image05 from "../../public/image05.jpeg";
import image06 from "../../public/image06.jpeg";
import image07 from "../../public/image07.jpeg";
import image08 from "../../public/image08.jpeg";
import image09 from "../../public/image09.jpeg";
import image10 from "../../public/image10.jpeg";
import image11 from "../../public/image11.jpeg";
import image12 from "../../public/image12.jpeg";
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
    { name: "Eliana Furiasse", instrument: "Vocals", image: imageEliana, description: "Lead vocalist with an electrifying presence." },
    { name: "Gabriel Rojas", instrument: "Guitar", image: imageGabriel, description: "Master of riffs and soulful solos." },
    { name: "Genaro Russo", instrument: "Bass Guitar", image: imageGenaro, description: "The groove master with unmatched rhythm." },
    { name: "Nicolás Rodríguez", instrument: "Vocals", image: imageNicolas, description: "Powerful voice with a captivating range." },
    { name: "Santiago Costas", instrument: "Guitar", image: imageSantiago, description: "A wizard of intricate melodies." },
    { name: "Iván Scarsella", instrument: "Drums", image: imageIvan, description: "Dynamic beats driving the soul of the band." },
  ];

  const [currentMusicianIndex, setCurrentMusicianIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMusicianIndex((prevIndex) => (prevIndex + 1) % musicians.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [musicians.length]);

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
  ];

  return (
    <main className="w-full max-w-screen-2xl mx-auto bg-gradient-to-b from-black to-gray-900 text-white">
      <Image
        src={mainImage}
        alt="Main Image"
        className="w-full object-cover h-[70vh] brightness-75"
      />
      <div className="absolute top-[40%] w-full text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-wide">Blue Wings</h1>
        <p className="text-xl md:text-2xl mt-4">Experience it live, get your tickets now!</p>
      </div>

      <section className="mt-10 px-6 md:px-16">
        <div className="flex flex-col xl:flex-row justify-between items-start">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 xl:mb-0 xl:w-full">About the Band</h2>
          <p className="text-lg md:text-xl text-gray-300">
            Blue Wings is more than a band; it’s an experience. With electrifying performances, they’ve captured hearts
            worldwide. Their music transcends boundaries, bringing fans together with melodies that resonate deeply.
          </p>
        </div>
      </section>

      <section className="mt-16 px-6 md:px-16">
        <h2 className="text-4xl font-semibold text-center mb-8">Band Members</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {musicians.map((musician, index) => (
            <div
              key={musician.name}
              className={`flex flex-col items-center text-center p-4 border rounded-lg shadow-md ${index === currentMusicianIndex
                ? "bg-blue-800 border-blue-500 text-white"
                : "bg-gray-800 border-gray-700 text-gray-300 hover:shadow-lg"
                }`}
              onClick={() => handleMusicianClick(index)}
            >
              <Image
                src={musician.image}
                alt={musician.name}
                className="w-32 h-32 rounded-full object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold">{musician.name}</h3>
              <p className="text-sm uppercase tracking-wide">{musician.instrument}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-gray-700 rounded-lg">
          <h3 className="text-2xl font-bold">{musicians[currentMusicianIndex].name}</h3>
          <p className="mt-2">{musicians[currentMusicianIndex].description}</p>
        </div>
      </section>

      <section className="mt-16 px-6 md:px-16">
        <h2 className="text-4xl font-semibold text-center mb-8">Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="rounded-lg hover:scale-105 transition-transform duration-200"
            />
          ))}
        </div>
      </section>

      <Setlist />
      <Contact />
      <Footer />
    </main>
  );
}
