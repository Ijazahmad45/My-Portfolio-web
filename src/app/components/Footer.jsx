import React, { useEffect, useState } from "react";
import Image from "next/image";
const Footer = () => {
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

  return (
    <footer
      className={`${
        darkMode
          ? "footer mt-[4.5rem] bg-[#141432] border z-10 border-t-[#c3d7fa80] border-l-transparent border-r-transparent border-b-transparent  text-[#c3d7fa80]"
          : "footer mt-[4.5rem] bg-[#C5D9FA] border z-10 border-t-[#436aa893] border-l-transparent border-r-transparent border-b-transparent  text-[#436aa893]"
      }}`}
    >
      <div className="container p-1 flex justify-between items-center">
        <span>
          <Image
            src="/svg/ijazlogo.png"
            alt="hero image"
            className="rounded-[20px]"
            width={40}
            height={40}
          />
        </span>
        <p className={`${darkMode ? "text-[#c3d7fa80]" : "text-[#436aa893]"}`}>All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
