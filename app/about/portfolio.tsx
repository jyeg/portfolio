"use client";

import { useState, useEffect } from "react";
import Hero from "./hero";
import Experience from "./experience";
import Skills from "./skills";
import Projects from "./projects";
import Contact from "./contact";
import AboutHeader from "./aboutMe";

export default function PortfolioLanding() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "skills", "experience", "projects", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AboutHeader activeSection={activeSection} />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
