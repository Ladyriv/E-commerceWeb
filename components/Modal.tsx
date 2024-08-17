import React, { useState } from 'react';
import Image from "next/image";

const VerificationModal =  ({ onAccept }: { onAccept: () => void }) => {
  const [isChecked, setIsChecked] = useState<string | null>(null);

  const handleAccept = () => {
    if (isChecked === 'yes') {
      onAccept();
    } else if (isChecked === 'no') {
      alert("No puedes entrar a la página.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-70 backdrop-blur-md">
      <div className="bg-primary-gray-500 p-6 rounded-lg shadow-lg text-center w-11/12 max-w-md">
      <h2 className="text-2xl">Bienvenidos, somos</h2>
          <Image
            src="/LogoBlanco.png"
            alt="logo"
            width={100}
            height={30}
            priority={true}
            className="mx-auto object-contain w-[100px] mb-10 md:w-auto"
          />
        <h2 className="text-2xl mb-4">¿Eres mayor de edad?</h2>
        <div className="mb-4 space-x-4">
          <label className="items-center space-x-4">
            <input
              type="radio"
              name="ageCheck"
              value="yes"
              onChange={() => setIsChecked('yes')}
            />
            Sí
          </label>
          <label className="items-center space-x-2">
            <input
              type="radio"
              name="ageCheck"
              value="no"
              onChange={() => setIsChecked('no')}
            />
            No
          </label>
        </div>
        <button
          onClick={handleAccept}
          className="px-4 py-2 bg-primary-yellow-200 text-black rounded-lg"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default VerificationModal;
