"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import NavLink from "./NavLink";

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Render nothing on the first server-side render
  }

  const handleHireMeClick = () => {
    // Handle navigation logic here
    // For example, navigate to '/email'
    window.location.href = '#contact';
  };

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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-emerald-500 to-green-600">
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
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Dynamic React Next.js portfolio featuring projects with polished
            design, seamless navigation, responsive design and captivating interactivity,
            showcasing top-tier frontend development skills.
          </p>
          <div>
            {/* Using NavLink for the Hire Me button */}
            
              <button
                onClick={handleHireMeClick}
                className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-orange-500 via-emerald-500 to-green-600 mr-4 hover:bg-gradient-to-br hover:from-green-500 hover:via-emerald-500 hover:to-orange-500 text-white"
              ><NavLink href="/email"></NavLink>
                Hire Me
              </button>
            
            <a href="/CV/Ijaz_CV.pdf" download className="block sm:inline-block px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-orange-500 via-emerald-500 to-green-600 hover:bg-gradient-to-br hover:from-green-500 hover:via-emerald-500 hover:to-orange-500 text-white mt-3">
              <span className="block px-2 py-2 w-full rounded-full bg-[#121212] hover:bg-slate-700 text-white "> Download CV</span>
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div>
            <Image
              src="/svg/myselfnew.png"
              alt="hero image"
              className="rounded-tl-full rounded-br-full rounded-tr-[40rem] rounded-bl-[40rem]"
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
