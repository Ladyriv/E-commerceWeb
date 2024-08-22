"use client";

import { useState, useEffect } from 'react';
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import VerificationModal from "@/components/Modal";


export default function Home() {
  const [showModal, setShowModal] = useState(true); //  El modal se renderiza condicionalmente en función de showModal

  useEffect(() => {      // Asegura de que el modal solo se muestre en la página de inicio
    if (window.location.pathname !== '/') {
      setShowModal(false);
    }
  }, []);

  const handleAccept = () => {
    setShowModal(false);
  };


  return (
    <main className="overflow-hidden items-center">  
      <Navbar />
      {showModal && <VerificationModal onAccept={handleAccept} />}
      <Hero />
      <div className="mt-12 padding-x padding-y max-width">
        <div className="home_text-container mb-10">
          <h1 className="text-3xl md:text-2xl lg:text-4xl font-extrabold"></h1>
        </div>
      </div>
      <div className="home_filter w-full px-6 md:px-12 lg:px-24 max-w-screen-xl">
        <div className="home_filter-container">
        </div>
      </div>
    </main>
  );
}
