import Image from "next/image";
import Navbar from "./components/Navbar";
import mainImage from "../../public/mainImage.jpeg"
import ivanImage from "../../public/ivanImage.jpeg"
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

export default function Home() {

  const musicians = [
    { name: 'Marco Minneman', instrument: 'drums', image: ivanImage, description: 'AC/DC es una banda de hard rock británica-australiana, formada en 1973 en Australia por los hermanos escoceses Malcolm Young y Angus Young y Dave Evans como vocalista. Sus álbumes se han vendido en un total estimado de 200 millones de copias, embarcándose en giras multitudinarias por todo el mundo y sus éxitos han musicalizado varias producciones cinematográficas sobresalientes.​ Son famosas sus actuaciones en vivo, resultando vibrantes y exultantes espectáculos de primer orden.' },
    { name: 'Marco Minneman2', instrument: 'drums', image: ivanImage, description: 'AC/DC es una banda de hard rock británica-australiana, formada en 1973 en Australia por los hermanos escoceses Malcolm Young y Angus Young y Dave Evans como vocalista. Sus álbumes se han vendido en un total estimado de 200 millones de copias, embarcándose en giras multitudinarias por todo el mundo y sus éxitos han musicalizado varias producciones cinematográficas sobresalientes.​ Son famosas sus actuaciones en vivo, resultando vibrantes y exultantes espectáculos de primer orden.' },
    { name: 'Marco Minneman3', instrument: 'drums', image: ivanImage, description: 'AC/DC es una banda de hard rock británica-australiana, formada en 1973 en Australia por los hermanos escoceses Malcolm Young y Angus Young y Dave Evans como vocalista. Sus álbumes se han vendido en un total estimado de 200 millones de copias, embarcándose en giras multitudinarias por todo el mundo y sus éxitos han musicalizado varias producciones cinematográficas sobresalientes.​ Son famosas sus actuaciones en vivo, resultando vibrantes y exultantes espectáculos de primer orden.' },
    { name: 'Marco Minneman4', instrument: 'drums', image: ivanImage, description: 'AC/DC es una banda de hard rock británica-australiana, formada en 1973 en Australia por los hermanos escoceses Malcolm Young y Angus Young y Dave Evans como vocalista. Sus álbumes se han vendido en un total estimado de 200 millones de copias, embarcándose en giras multitudinarias por todo el mundo y sus éxitos han musicalizado varias producciones cinematográficas sobresalientes.​ Son famosas sus actuaciones en vivo, resultando vibrantes y exultantes espectáculos de primer orden.' },
    { name: 'Marco Minneman5', instrument: 'drums', image: ivanImage, description: 'AC/DC es una banda de hard rock británica-australiana, formada en 1973 en Australia por los hermanos escoceses Malcolm Young y Angus Young y Dave Evans como vocalista. Sus álbumes se han vendido en un total estimado de 200 millones de copias, embarcándose en giras multitudinarias por todo el mundo y sus éxitos han musicalizado varias producciones cinematográficas sobresalientes.​ Son famosas sus actuaciones en vivo, resultando vibrantes y exultantes espectáculos de primer orden.' },
    { name: 'Marco Minneman6', instrument: 'drums', image: ivanImage, description: 'AC/DC es una banda de hard rock británica-australiana, formada en 1973 en Australia por los hermanos escoceses Malcolm Young y Angus Young y Dave Evans como vocalista. Sus álbumes se han vendido en un total estimado de 200 millones de copias, embarcándose en giras multitudinarias por todo el mundo y sus éxitos han musicalizado varias producciones cinematográficas sobresalientes.​ Son famosas sus actuaciones en vivo, resultando vibrantes y exultantes espectáculos de primer orden.' },
  ]

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
      {/* <Navbar /> */}
      <Image src={mainImage} alt="Main Image" className="w-full  top-0" />
      <div className=" relative -top-96 flex flex-col items-center mx-auto">
        <p className="text-8xl">Blue Wings</p>
        <p className="text-2xl">Experience it live, get your tickets now!</p>
      </div>
      <div className="flex flex-row justify-between">
        <p className="w-2/5 text-4xl">About Band</p>
        <p className="w-3/5 text-xl">AC/DC es una banda de hard rock británica-australiana, formada en 1973 en Australia por los hermanos escoceses Malcolm Young y Angus Young y Dave Evans como vocalista. Sus álbumes se han vendido en un total estimado de 200 millones de copias, embarcándose en giras multitudinarias por todo el mundo y sus éxitos han musicalizado varias producciones cinematográficas sobresalientes. Son famosas sus actuaciones en vivo, resultando vibrantes y exultantes espectáculos de primer orden.</p>
      </div>
      <p className="text-6xl">Band Members</p>
      <div className="flex flex-row">
        {musicians.map((musician) => (
          <div className="flex flex-col w-72" key={musician.name}>
            <Image src={musician.image} alt={musician.name} className="size-48" />
            <p className="text-xl">{musician.name}</p>
            <p className="">{musician.instrument}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-flow-row grid-cols-6">
        {images.map((image, index) => (
          <Image src={image} alt={'image' + index} key={index} className="size-32" />
        ))}</div>
    </main>
  );
}
