'use client'
import Contact from "@/components/Contact";
import Hero from "../components/Hero";
import Project from "../components/Project";
import Skills from "../components/Skills";
import About from "@/components/About";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Home() {
  
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: 'bottom-bottom',
      offset: 160,
    });
    AOS.refresh();
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </main>
  );
}
