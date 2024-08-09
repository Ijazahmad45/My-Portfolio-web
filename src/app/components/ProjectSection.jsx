"use client";
import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

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

  const ProjectsData = [
    {
      id: 1,
      title: "DL Fork",
      description:
        "I collaborated with a brilliant team to develop a feature-rich website using React.js and Material UI. Our combined efforts resulted in a modern, responsive, and user-friendly interface, showcasing our expertise in front-end development and UI design.",
      image: darkMode ? "/svg/projects/DLforkDark.png" : "/svg/projects/DLforkLight.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/Ijazahmad45/DL-Fork",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "Golf Website",
      description:
        "I completed this dynamic and interactive website using HTML, CSS, and JavaScript, incorporating GSAP (GreenSock Animation Platform) for advanced animations. The result is a visually appealing and highly engaging user experience.",
      image: darkMode ? "/svg/projects/golfDark.png" : "/svg/projects/golfLight.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/Ijazahmad45/projectGolf",
      previewUrl: "/",
    },
    
  ];

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = ProjectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const dark = darkMode
    ? "text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-orange-400 to-green-600"
    : "text-transparent bg-clip-text bg-gradient-to-r from-[#A5A765] via-[#707145] to-black";

  return (
    <section id="projects">
      <h2
        className={`mb-6 pb-3 text-4xl sm:text-5xl lg:text-6xl font-bold text-center ${dark}`}
      >
        My Projects
      </h2>
      <div className="text-slate-600 flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={() => handleTagChange("All")}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Web")}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={hasAnimated ? "visible" : "initial"}
            transition={{ duration: 0.8, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tag={project}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
