import Link from "next/link";
import Image from "next/image";
import { useState } from "react"



const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
        <nav className="max-w-[1440] mx-auto flex justify-between items-center sm:px-8 px-4 py-2 xs:px-6 lg:px-8 bg-primary-black-default">
            <Link href="/" className="flex justify-center items-center">
                <Image 
                    src="/LogoBlanco.png"
                    alt= "logo"
                    width={90}
                    height={10}
                    className="object-contain w-[100px] md:w-auto"
                />
            </Link>
        </nav>

    </header>
  )
}

export default Navbar