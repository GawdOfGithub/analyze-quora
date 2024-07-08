"use client"
import GlareCard from "./components/GlareCard";
import Image from "next/image";
import { Playfair_Display_SC } from 'next/font/google'
import { cn } from "../../utils/cn";
import Link from "next/link";
  const roboto = Playfair_Display_SC({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  })
export default function GlareCardDemo() {

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-sm:mt-10 max-sm:ml-10">
      <Link href="https://quora-data.vercel.app/Tarangini.html">
           <GlareCard className="flex flex-col items-center justify-center">
          
        <Image
          className="h-full w-full absolute inset-0 object-cover"
          src="/Tarangani.png"
          alt="hello"
          height={500}
          width={500}
        />
       
        <p className={cn("font-normal text-4xl text-white mt-16 absolute",roboto.className)}>
          Tarangani Singh
        </p>
      </GlareCard>
      </Link>
      <Link href="https://quora-data.vercel.app/Manu.html">
      <GlareCard className="flex flex-col items-center justify-center">
        <Image
          className="h-full w-full absolute inset-0 object-cover"
          src="/manu.png"
          alt="hello"
          height={500}
          width={500}

        />

<p className={cn("font-extrabold text-4xl text-black mt- absolute",roboto.className)}>
          Manu Bhardwaj
        </p>
      </GlareCard>
      </Link>
    
    </div>
  );
}
//ok