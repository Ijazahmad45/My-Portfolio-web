"use client";
import { useState, useEffect } from "react";
import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import ProjectSection from "./components/ProjectSection";
import SwitchBtn from "./components/SwitchBtn"; 

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleSwitchValueChanged = () => {
      const localStorageValue = localStorage.getItem('switchValue');
      const parsedValue = localStorageValue === 'true';
      setDarkMode(parsedValue);
    };

    window.addEventListener('switchValueChanged', handleSwitchValueChanged);

    handleSwitchValueChanged();

    return () => {
      window.removeEventListener('switchValueChanged', handleSwitchValueChanged);
    };
  }, []);

  return (
    <>
      <main
        className="flex min-h-screen flex-col bg-center bg-cover"
        style={{
          backgroundColor: darkMode ? '#121212' : '#ebd7d6', 
          backgroundImage: darkMode ? 'none' : 'url("/svg/layoutBg.jpg")', 
          transition: 'background-color 0.6s ease-in-out, background-image 0.6s ease-in-out',
        }}
      >
        <NavBar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <AboutSection />
          <ProjectSection />
          <EmailSection />
        </div>
        <Footer />
      </main>
    </>
  );
}
