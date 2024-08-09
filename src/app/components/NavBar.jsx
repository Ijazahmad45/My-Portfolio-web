"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import SwitchButton from "./SwitchBTN";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

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
    <nav
      style={{ backgroundColor: darkMode ? "#2b2929" : "#9EA157" }}
      className="fixed top-0 left-0 right-0 z-20 opacity-90"
    >
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <div>
          <Link href="/" legacyBehavior>
            <a className="text-2xl md:text-5xl text-white font-semibold drop-shadow-2xl">
              <Image
                src="/svg/ijazlogo.png"
                alt="hero image"
                className="rounded-[20px] hover:drop-shadow-2xl"
                width={60}
                height={60}
              />
            </a>
          </Link>
        </div>

        <div className="flex items-center gap-10">
          <div>
            <SwitchButton className="" />
          </div>

          <div className="mobile-menu block md:hidden ">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>

          <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default NavBar;
