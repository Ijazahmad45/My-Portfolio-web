"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabBtn from "./TabBtn";

const Tab_Data = [
  {
    id: "skills",
    title: "Skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Javascript</li>
        <li>React</li>
        <li>Next.JS</li>
        <li>Tailwind</li>
        <li>Material UI</li>
        <li>Bootstrap</li>
        <li>Git</li>
        <li>SCSS</li>
      </ul>
    ),
  },
  {
    id: "education",
    title: "Education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          BS Computer Science from 
          <br />Kohat University of Science and Technology
          (2019-2023).
        </li>
      </ul>
    ),
  },
  {
    id: "experience",
    title: "Experience",
    content: (
      <ul className=" pl-2">
        <p>
          Seasoned frontend React Next.js developer with nearly 5 months of
          remote experience, contributing to 4-5 projects. Proficient in
          crafting captivating user interfaces and ensuring seamless
          functionality. Dedicated to delivering high-quality solutions that
          exceed client expectations and drive success.
        </p>
      </ul>
    ),
  },
];
const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16">
        <Image
          src="/svg/about.png"
          alt="about image"
          className="  "
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className=" mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-emerald-500 to-green-600">
            About Me
          </h2>
          <p className="text-[#ADB7BE]  text-base sm:text-lg mb-6 lg:text-xl ">
            Passionate Javascript, React, Next.js developer specializing in
            crafting immersive user experiences. Proficient in creating dynamic,
            responsive web applications with clean, maintainable code. Dedicated
            to continuous learning and innovation, delivering solutions that
            exceed expectations. Let&apos;s collaborate to bring your ideas to
            life and elevate your digital presence.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabBtn
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabBtn>
            <TabBtn
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Eduction
            </TabBtn>
            <TabBtn
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabBtn>
          </div>
          <div className="mt-5">{Tab_Data.find((data) => data.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
