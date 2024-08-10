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
    ? "text-[#4b7bff] border-[#4b7bff] bg-[#C5D9FA]"
    : "text-[#c3d7fa80] border-[#c3d7fa80] hover:bg-slate-900";
  const buttonLight = isSelected
    ? "text-[#365587] border-[#365587] bg-[#C5D9FA]"
    : "text-[#436aa893] border-[#436aa893] hover:bg-slate-500 hover:text-[#293859] hover:border-[#293859]";

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
