import Image from "next/image";
import Hero from "@/components/Hero";
//import SearchBar from "@/components/SearchBar";
import CustomFilter from "@/components/CustomFilter";
import Navbar from "@/components/Navbar";
//import { ProductBeer } from "@/components/Index";



export default function Home() {
  return (
    <main className="overflow-hidden items-center">  
      <Navbar />
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
