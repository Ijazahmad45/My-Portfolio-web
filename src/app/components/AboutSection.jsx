'use client';

import React, { useEffect, useState, useTransition } from 'react';
import Image from 'next/image';
import TabBtn from './TabBtn';

const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();
  const [darkMode, setDarkMode] = useState(false);

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  useEffect(() => {
    const handleSwitchValueChanged = () => {
      const localStorageValue = localStorage.getItem('switchValue');
      const parsedValue = localStorageValue === 'true';
      setDarkMode(parsedValue);
    };

    window.addEventListener('switchValueChanged', handleSwitchValueChanged);

    handleSwitchValueChanged();

    return () => {
      window.removeEventListener(
        'switchValueChanged',
        handleSwitchValueChanged
      );
    };
  }, []);

  const dark = darkMode ? 'text-[#c3d7fa80]' : 'text-[#436aa893]';

  const Tab_Data = [
    {
      id: 'skills',
      title: 'Skills',
      content: (
        <ul className={`list-disc pl-2 ${dark}`} >
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
      id: 'education',
      title: 'Education',
      content: (
        <ul className={`list-disc pl-2 ${dark}`}>
          <li>
            BS Computer Science from
            <br />
            Kohat University of Science and Technology (2019-2023).
          </li>
        </ul>
      ),
    },
    {
      id: 'experience',
      title: 'Experience',
      content: (
        <ul className={`pl-2 ${dark}`}>
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

  return (
    <section id="about" className={`${dark}`}>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16">
        <Image
          src="/svg/about.png"
          alt="about image"
          className="rounded-3xl"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className={`${
                darkMode
                  ? "mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4b7bff] to-[#C5D9FA]"
                  : "mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#365587] to-black "
              }`}>
            About Me
          </h2>
          <p className={`text-base sm:text-lg mb-6 lg:text-xl ${dark}`}>
            Passionate Javascript, React, Next.js developer specializing in
            crafting immersive user experiences. Proficient in creating dynamic,
            responsive web applications with clean, maintainable code. Dedicated
            to continuous learning and innovation, delivering solutions that
            exceed expectations. Let&apos;s collaborate to bring your ideas to
            life and elevate your digital presence.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabBtn
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >
              Skills
            </TabBtn>
            <TabBtn
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}
            >
              Education
            </TabBtn>
            <TabBtn
              selectTab={() => handleTabChange('experience')}
              active={tab === 'experience'}
            >
              Experience
            </TabBtn>
          </div>
          <div className="mt-5">
            {Tab_Data.find((data) => data.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
