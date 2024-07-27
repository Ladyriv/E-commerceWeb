import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black mt-5 bg-primary-gray-200 border-t font-customHenju ">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px6 py-14">
        <div className="flex flex-col justify-start items-start gap-6">
          <p>Facatativa-Cundinamarca</p>
          <p>300 31245678</p>
        </div>
        <div className="flex flex-col justify-start items-start gap-6">
          <p>Envios gratis dentro del perimetro urbano</p>
        </div>
        <div>
            <Image 
                src="/daviplata.svg"
                alt= "logo"
                width={80}
                height={10}
                className="object-contain"
            />
            <Image 
                src="/nequi.svg"
                alt= "logo"
                width={80}
                height={10}
                className="object-contain"
            />
            <Image 
                src="/mastercard.svg"
                alt= "logo"
                width={80}
                height={10}
                className="object-contain"
            />
            
            
        </div>
      </div>
    </footer>
  )
}

export default Footer

