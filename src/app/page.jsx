import Image from "next/image";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Testimonies from "./components/Testimonies";
import AboutUs from "./components/AboutUs";
import Turn from "./components/Turn";

export default function Home() {
  return (
    <main className="flex min-h-screen w-[1440px] flex-col m-auto bg-[#FFF9FD]">
      <Nav />
      <Hero />
      <Contact/>
      <Services/>
      <Testimonies/>
      <AboutUs/>
      <Turn/>

      
    </main>
  );
}
