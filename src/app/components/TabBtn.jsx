import React, { useEffect, useState } from "react";

const TabBtn = ({ active, selectTab, children }) => {
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

  // const dark = darkMode ? {buttonDark} : {buttonLight};
  const buttonDark = active
    ? "text-transparent bg-clip-text  bg-gradient-to-r from-orange-400 via-emerald-500 to-green-600 border-b-2 border-orange-500 "
    : "text-[#4f5457]";
  const buttonLight = active
    ? "text-transparent bg-clip-text  bg-gradient-to-r from-[#A5A765] to-black border-b-2 border-[#A5A765] "
    : "text-[#6a6b4f] ";
  const buttonhover = darkMode
    ? "cursor-pointer mr-3 font-extrabold hover:text-transparent hover:bg-clip-text  hover:bg-gradient-to-r hover:from-orange-400 hover:via-emerald-500 hover:to-green-600 transition duration-500 ease-in-out"
    : "cursor-pointer mr-3 font-extrabold hover:text-transparent hover:bg-clip-text  hover:bg-gradient-to-r hover:from-[#A5A765]  hover:to-black transition duration-500 ease-in-out";
  return (
    <button onClick={selectTab}>
      <p className={`${buttonhover} ${darkMode ? buttonDark : buttonLight}`}>
        {" "}
        {children}
      </p>
    </button>
  );
};

export default TabBtn;
