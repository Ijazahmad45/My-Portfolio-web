import React, { useEffect, useState } from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
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

  const buttonDark = isSelected
    ? "text-orange-500 border-orange-500"
    : "text-slate-600 border-slate-600 hover:bg-slate-900";
  const buttonLight = isSelected
    ? "text-[#4f5457] border-[#4f5457] bg-[#A5A764]"
    : "text-[#93937d] border-[#93937d] hover:bg-slate-500";

  return (
    <button
      className={`rounded-full border-2 px-6 py-3 text-xl cursor-pointer ${
        darkMode ? buttonDark : buttonLight
      }`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
