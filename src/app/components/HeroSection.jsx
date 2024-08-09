"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import NavLink from "./NavLink";

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleSwitchValueChanged = () => {
      const localStorageValue = localStorage.getItem("switchValue");
      const parsedValue = localStorageValue === "true";
      setDarkMode(parsedValue);
    };

    window.addEventListener("switchValueChanged", handleSwitchValueChanged);

    handleSwitchValueChanged();

    return () => {
      window.removeEventListener(
        "switchValueChanged",
        handleSwitchValueChanged
      );
    };
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Render nothing on the first server-side render
  }

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-12"
      >
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span
              className={`${
                darkMode
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-emerald-500 to-green-600"
                  : "text-transparent bg-clip-text bg-gradient-to-r from-[#A5A765] to-black"
              }`}
            >
              Hello, I&apos;m <br />
            </span>
            <TypeAnimation
              sequence={[
                "Ijaz Ahmad",
                1000,
                "Frontend Developer",
                1000,
                "React.JS / Next.JS Dev.",
                1000,
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
              className="text-[#dd9745]"
            />
          </h1>
          <p
            className={`${
              darkMode
                ? "text-base sm:text-lg mb-6 lg:text-xl text-[#ADB7BE]"
                : "text-base sm:text-lg mb-6 lg:text-xl text-[#5e5f3ba1]"
            }`}
          >
            Dynamic React Next.js portfolio featuring projects with polished
            design, seamless navigation, responsive design and captivating
            interactivity, showcasing top-tier frontend development skills.
          </p>
          <div>
            <a
              href="https://wa.me/923303210150"
              className={`${
                darkMode
                  ? "block sm:inline-block px-6 py-3 w-full sm:w-auto rounded-full bg-gradient-to-br from-orange-500 via-emerald-500 to-green-600 mr-4 hover:bg-gradient-to-br hover:from-green-500 hover:via-emerald-500 hover:to-orange-500 text-[#E3E3D7] hover:shadow-slate-500 shadow-2xl transition duration-500 ease-in-out"
                  : "block sm:inline-block px-6 py-3 w-full sm:w-auto rounded-full bg-gradient-to-br from-[#A5A765] to-black mr-4 hover:bg-gradient-to-br hover:from-black hover:to-[#A5A765] text-[#E3E3D7] hover:shadow-black shadow-2xl transition duration-500 ease-in-out"
              }`}
            >
              Hire Me
            </a>
            <a
              href="/CV/Ijaz_CV.pdf"
              download
              style={{ padding: "0.22rem 0.22rem" }} 
              className={`${
                darkMode
                  ? "group block sm:inline-block w-full sm:w-auto rounded-full bg-gradient-to-br from-orange-500 via-emerald-500 to-green-600 hover:bg-gradient-to-br hover:from-green-500 hover:via-emerald-500 hover:to-orange-500 text-[#E3E3D7] mt-3 hover:shadow-slate-500 shadow-2xl transition duration-500 ease-in-out"
                  : "group block sm:inline-block w-full sm:w-auto rounded-full bg-[#848643] text-[#E3E3D7] mt-3 hover:shadow-black shadow-2xl transition duration-500 ease-in-out"
              }`}
            >
              <span className="block px-2 py-2 w-full rounded-full bg-[#121212] group-hover:bg-slate-700 text-[#E3E3D7]">
                Download CV
              </span>
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div>
            <Image
              src="/svg/myselfnew.png"
              alt="hero image"
              className={`${
                darkMode
                  ? "rounded-tl-full rounded-br-full rounded-tr-[40rem] rounded-bl-[40rem] shadow-[#C59A4B] shadow-2xl"
                  : "rounded-tl-full rounded-br-full rounded-tr-[40rem] rounded-bl-[40rem] shadow-[#484925] shadow-2xl"
              }`}
              priority={true}
              width={400}
              height={400}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
