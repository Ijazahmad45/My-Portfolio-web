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
    ? "text-[#dd9745] hover:text-[#85512e] text-lg font-bold transition duration-300 ease-in-out"
    : "text-[#000000] hover:text-[#484933] text-lg font-bold transition duration-300 ease-in-out";

  return (
    <Link href={href} legacyBehavior>
      <a className={textStyle}>{title}</a>
    </Link>
  );
};

export default NavLink;
