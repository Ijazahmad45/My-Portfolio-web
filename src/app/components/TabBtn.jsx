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
    ? "text-transparent bg-clip-text  bg-gradient-to-r from-[#4b7bff] to-[#C5D9FA] border-b-2 border-[#4b7bff] "
    : "text-[#4f5457]";
  const buttonLight = active
    ? "text-transparent bg-clip-text  bg-gradient-to-r from-[#629bf7] to-black border-b-2 border-[#629bf7] "
    : "text-[#6a6b4f] ";
  const buttonhover = darkMode
    ? "cursor-pointer mr-3 font-extrabold hover:text-transparent hover:bg-clip-text  hover:bg-gradient-to-r hover:from-[#4b7bff] hover:to-[#C5D9FA] transition duration-500 ease-in-out"
    : "cursor-pointer mr-3 font-extrabold hover:text-transparent hover:bg-clip-text  hover:bg-gradient-to-r hover:from-[#629bf7]  hover:to-black transition duration-500 ease-in-out";
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
