import { useState, useEffect } from "react";
import Link from "next/link";
import React from "react";

const NavLink = ({ href, title }) => {
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

  const textStyle = darkMode
    ? "text-[#6098F2] hover:text-[#A8C3FB] text-lg font-bold transition duration-300 ease-in-out"
    : "text-[#2F4A76] hover:text-[#6098F2] text-lg font-bold transition duration-300 ease-in-out";

  return (
    <Link href={href} legacyBehavior>
      <a className={textStyle}>{title}</a>
    </Link>
  );
};

export default NavLink;
