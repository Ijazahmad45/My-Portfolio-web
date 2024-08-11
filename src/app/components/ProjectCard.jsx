import React, { useState, useEffect } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
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

  const darkStyle = darkMode
    ? "w-14 h-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-[#4b7bff] group/link"
    : "w-14 h-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-[#629bf7] group/link";

  const darkIcon = darkMode
    ? "w-10 h-10 text-[#ADB7BE] cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-[#4b7bff]"
    : "w-10 h-10 text-[#ADB7BE] cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-[#629bf7]";

  return (
    <div className="">  {/* Optional: Restricting the width */}
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay  items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 hover:rounded-t-xl gap-3">
          <Link href={gitUrl} className={darkStyle}>
            <CodeBracketIcon className={darkIcon} />
          </Link>
          <Link href={previewUrl} className={darkStyle}>
            <EyeIcon className={darkIcon} />
          </Link>
        </div>
      </div>
      <div
        className={`rounded-b-xl mt-1 py-6 px-4 ${
          darkMode ? "bg-[#252552]" : "bg-[#9fc4ff]"
        }`}
        style={{ height: "200px" }}  
      >
        <h5
          className={`text-xl font-extrabold mb-2 ${
            darkMode
              ? "text-transparent bg-clip-text bg-gradient-to-r from-[#4b7bff] to-[#C5D9FA]"
              : "text-transparent bg-clip-text bg-gradient-to-r from-[#629bf7] to-black"
          }`}
        >
          {title}
        </h5>
        <p
          className={`overflow-auto ${
            darkMode ? "text-[#c3d7fa80]" : "text-[#436aa893]"
          }`}
          style={{ maxHeight: "120px" }} 
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
