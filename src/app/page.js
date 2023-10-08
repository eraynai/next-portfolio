import Hero from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import About from "@/components/AboutSection";
import Projects from "@/components/Projects";
import Email from "@/components/Email";
import Footer from "@/components/Footer";
import Achievements from "@/components/Achievements";
import { allBlogs } from "contentlayer/generated";

export default function Home() {
  console.log(allBlogs);
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <container className="container mt-24 mx-auto px-12 py-4">
        <Hero />
        <Achievements />
        <About />
        <Projects />
        <Email />
      </container>
      <Footer />
    </main>
  );
}
