import type { StaticImageData } from "next/image";
import Image from "next/image";

interface HeroProps {
  imgData: StaticImageData;
  alt: string;
  title: string;
}

export default function Hero({ imgData, alt, title }: HeroProps) {
  return (
    <div className="relative h-screen">

      <div className="absolute -z-10 inset-0">
        <Image
          src={imgData}
          alt={alt}
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800"></div>
      </div>
      <div className="pt-48 flex justify-center items-center">
        <h1 className="text-5xl text-white">{title}</h1>
      </div>
    </div>
  );
}