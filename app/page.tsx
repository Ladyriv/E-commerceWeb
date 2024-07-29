import Image from "next/image";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import CustomFilter from "@/components/CustomFilter";
import Navbar from "@/components/Navbar";
//import { ProductBeer } from "@/components/Index";



export default function Home() {
  return (
    <main className="overflow-hidden">  
      <Navbar />
      <Hero />
      <div className="mt-12 padding-x padding-y max-width">
        <div className="home_text-container">
          <h1 className="text-3xl font-extrabold"></h1>
        </div>
      </div>
      <div className="home_filter">
        <SearchBar />
        <div className="home_filter-container">
          <CustomFilter title="beer"/>
        </div>
      </div>
    </main>
  );
}
