"use client";
import Link from "next/link";
import Image from "next/image";
import { useContext, useState } from "react";
import { CartContext } from "@/context/CartContext";
//import { useCart } from "@/context/CartContext";


const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-10 bg-primary-black-default shadow">
      <nav className="max-w-[1440px] mx-auto flex justify-between  items-center sm:px-8 px-4 py-2 xs:px-6 lg:px-8">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/LogoBlanco.png"
            alt="logo"
            width={90}
            height={10}
            priority={true}
            className="object-contain w-[100px] md:w-auto"
          />
        </Link>
        <div className="md:hidden flex items-center">
          <button
            className="p-2 text-primary-yellow-300 rounded-md outline-none focus:border-yellow-400 filter invert sepia-[1] saturate-[10000%] hue-rotate-[10deg] brightness-[1] contrast-[1]"
            onClick={() => setIsNavbarOpen(!isNavbarOpen)}
          >
            <Image
              src={isNavbarOpen ? "/close-bar.svg" : "/menu-bar.svg"}
              width={30}
              height={30}
              alt={isNavbarOpen ? "close menu" : "open menu"}
            />
          </button>
        </div>

        <div className="hidden md:flex md:items-center md:space-x-4 text-[20px] font-customHenju text-primary-yellow-default">
          <ul className="md:flex md:space-x-4 w-full md:w-auto">
            <li className="mb-2 md:mb-0">
              <Link href="/beer" className="block px-2 py-1 text-primary-yellow-default hover:text-white transition duration-300 ease-in-out">
                Cervezas
              </Link>
            </li>
            <li>
              <Link href="/vodka" className="block px-2 py-1 text-primary-yellow-default hover:text-white transition duration-300 ease-in-out">
                Vodkas
              </Link>
            </li>
            <li>
              <Link href="/others" className="block px-2 py-1 text-primary-yellow-default hover:text-white transition duration-300 ease-in-out">
                Otros
              </Link>
            </li>
            <li>
              <Link href="/cart" className="block px-2 py-1 text-primary-yellow-default">
                <Image 
                  src="/carrito-de-compras.svg"
                  alt= "logo"
                  width={30}
                  height={10}
                  className="object-contain custom-icon"
                />
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {isNavbarOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-primary-black-default flex flex-col items-center justify-center z-20">
          <div className="absolute top-4 right-4 ">
            <button
              className="p-2 text-primary-yellow-300 rounded-md outline-none focus:border-yellow-400 filter invert sepia-[1] saturate-[10000%] hue-rotate-[10deg] brightness-[1] contrast-[1]"
              onClick={() => setIsNavbarOpen(false)}
            >
              <Image src="/close-bar.svg" width={30} height={30} alt="close menu" />
            </button>
          </div>
          <ul className="space-y-4 text-[24px] font-customHenju text-primary-yellow-default">
            <li className="mb-2 md:mb-0 hover:text-white transition duration-300 ease-in-out">
              <Link href="/beer" className="block px-2 py-1" onClick={() => setIsNavbarOpen(false)}>
                Cervezas
              </Link>
            </li>
            <li className="mb-2 md:mb-0 hover:text-white transition duration-300 ease-in-out">
              <Link href="/vodka" className="block px-2 py-1" onClick={() => setIsNavbarOpen(false)}>
                Vodkas
              </Link>
            </li>
            <li className="mb-2 md:mb-0 hover:text-white transition duration-300 ease-in-out">
              <Link href="/others" className="block px-2 py-1" onClick={() => setIsNavbarOpen(false)}>
                Otros
              </Link>
            </li>
            <li className="mb-2 md:mb-0">
              <Link href="/cart" className="block px-2 py-1" onClick={() => setIsNavbarOpen(false)}>
                Carrito
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;

