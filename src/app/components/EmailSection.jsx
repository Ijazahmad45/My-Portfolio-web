import { useEffect, useState } from "react";
import GithubIcon from "../../../public/svg/social/githubDark.svg";
import GithubIconLight from "../../../public/svg/social/githubLight.svg";
import LinkedinIcon from "../../../public/svg/social/linkedinDark.svg";
import LinkedinIconLight from "../../../public/svg/social/linkedinLight.svg";
import WhatsappIcon from "../../../public/svg/social/whatsappDark.svg";
import WhatsappIconLIght from "../../../public/svg/social/whatsappLight.svg";
import Image from "next/image";

const EmailSection = () => {
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

  const darkModeText = darkMode
    ? "block mb-2 text-sm font-medium text-[#c3d7fa80]"
    : "block mb-2 text-sm font-medium text-[#436aa893]";

  const darkModeInput = darkMode
    ? "bg-[#141432] border border-[#c3d7fa80] placeholder:text-[#c3d7fa80] text-gray-300 text-sm rounded-lg block w-full p-2.5"
    : "bg-[#C5D9FA] border border-[#436aa893] placeholder:text-[#436aa893] text-gray-800 text-sm rounded-lg block w-full p-2.5";
 
    // const svgDarkMode = darkMode
    // ? GithubIcon
    // : GithubIconLight;
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div
        className={`${
          darkMode
            ? " bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#4b7bff] to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"
            : "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#629bf7] to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"
        }`}
      ></div>
      <div className="z-10 ">
        <h5
          className={
            darkMode
              ? "text-3xl font-extrabold mb-6 my-2 text-transparent bg-clip-text bg-gradient-to-r from-[#4b7bff] to-[#C5D9FA]"
              : "text-3xl font-extrabold mb-6 my-2 text-transparent bg-clip-text bg-gradient-to-r from-[#629bf7] to-black "
          }
        >
          Let&apos;s Connect
        </h5>
        <p className={` mb-6 max-w-md ${darkModeText}`}>
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. whether you have a question or just want to say hi, i&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-4">
          <a href="https://github.com/Ijazahmad45" className="group">
            <Image
              src={darkMode ? GithubIcon : GithubIconLight}
              alt="Github Icon"
              width={40}
              height={40}
              className="transition-all duration-300 group-hover:w-11 group-hover:h-11"
            />
          </a>
          <a href="https://www.linkedin.com/in/ijaz-ahmad45" className="group">
            <Image
              src={darkMode ? LinkedinIcon : LinkedinIconLight}
              alt="LinkedIn Icon"
              width={40}
              height={40}
              className="transition-all duration-300 group-hover:w-11 group-hover:h-11"
            />
          </a>
          <a href="https://wa.me/923303210150" className="group">
            <Image
              src={darkMode ? WhatsappIcon : WhatsappIconLIght}
              alt="Whatsapp Icon"
              width={40}
              height={40}
              className="transition-all duration-300 group-hover:w-11 group-hover:h-11"
            />
          </a>
        </div>
      </div>
      <div>
        <form className="flex flex-col">
          <div className="mb-6">
            <label htmlFor="email" className={darkModeText}>
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              className={darkModeInput}
              placeholder="Enter your Email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className={darkModeText}>
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className={darkModeInput}
              placeholder="Just saying hi..."
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className={darkModeText}>
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className={darkModeInput}
              placeholder="Let's talk about..."
            />
          </div>
          <button
            className={
              darkMode
                ? "font-medium py-2.5 px-5 w-full rounded-lg bg-gradient-to-br from-[#4b7bff] to-[#C5D9FA] mr-4 bg-white hover:bg-gradient-to-br  hover:from-[#C5D9FA] hover:to-[#4b7bff] text-[#E3E3D7"
                : "font-medium py-2.5 px-5 w-full rounded-lg bg-gradient-to-br from-[#629bf7] to-black  mr-4  hover:bg-gradient-to-br hover:from-black hover:to-[#629bf7] text-[#E3E3D7]"
            }
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
