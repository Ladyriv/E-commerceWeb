import React from 'react'
import '../styles/globals.css'
import Image from "next/image";
import SearchBar from './SearchBar';

const Hero = () => {
  return (
    <div>
      <div className="flex-1 pt-36 padding-x inset-0 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-2xl lg:text-5xl font-customBukagi [text-shadow:_0_4px_4px_rgb(0_0_0_/.25)]">
          Bienvenidos
        </h1>
        <div>
          <SearchBar />
        </div>
        <div className="relative w-full h-[calc(80vh)]">
          <Image 
              src="/banner.png"
              alt= "banner"
              layout="fill" 
              className="object-contain"
          />
        </div>        
      </div>      
    </div>
  )
}

export default Hero
