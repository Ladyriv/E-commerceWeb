import React from 'react'
import '../styles/globals.css'
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className="flex-1 pt-36 padding-x inset-0 flex flex-col justify-center items-center text-center">
        <h1 className="sm:text-[54px] text-[20px] font-customBukagi [text-shadow:_0_4px_4px_rgb(0_0_0_/.25)]">
          Encuentra estos productos
        </h1>
        <div className="relative w-full h-[calc(100vh)]">
          <Image 
              src="/banner.png"
              alt= "banner"
              layout="fill" 
              className="object-contain"
          />
        </div>
        <p>
          mira estos productos
        </p>
      </div>      
    </div>
  )
}

export default Hero
