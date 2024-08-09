import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full text-black bg-primary-gray-200 border-t font-customHenju mt-auto">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-3 sm:px-8 px-4 py-6">
        <div className="flex flex-col justify-start items-start gap-2">
          <p className="text-sm">Facatativa-Cundinamarca</p>
          <p className="text-sm">300 123456789</p>
        </div>
        <div className="flex flex-col justify-start items-start gap-2">
          <p>Envios gratis dentro del perimetro urbano</p>
        </div>
        <div className="flex items-center gap-3">
            <Image 
                src="/daviplata.svg"
                alt= "logo"
                width={60}
                height={10}
                className="object-contain"
            />
            <Image 
                src="/nequi.svg"
                alt= "logo"
                width={60}
                height={10}
                className="object-contain"
            />
            <Image 
                src="/mastercard.svg"
                alt= "logo"
                width={60}
                height={10}
                className="object-contain"
            />
            
            
        </div>
      </div>
    </footer>
  )
}

export default Footer

