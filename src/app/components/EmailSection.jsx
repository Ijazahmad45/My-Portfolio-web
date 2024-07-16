import React from "react";
import GithubIcon from "../../../public/svg/social/github3.svg";
import LinkedinIcon from "../../../public/svg/social/linkedin1.svg";
import WhatsappIcon from "../../../public/svg/social/whatsapp1.svg";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10 ">
        <h5 className="text-3xl font-extrabold mb-6 my-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-emerald-500 to-green-600">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-6 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. whether you have a question or just want to say hi, i&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <a href="https://github.com/Ijazahmad45">
            <Image src={GithubIcon} alt="Github Icon" width={40} height={40} />
          </a>
          <a href="https://www.linkedin.com/in/ijaz-ahmad45">
            <Image
              src={LinkedinIcon}
              alt="LinkedIn Icon"
              width={40}
              height={40}
            />
          </a>
          <a href="https://wa.me/923303210150">
            <Image
              src={WhatsappIcon}
              alt="Whatsapp Icon"
              width={40}
              height={40}
            />
          </a>
        </div>
      </div>
      <div>
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-[#ADB7BE] block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder:text-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
              placeholder="Enter your Email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-[#ADB7BE] block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder:text-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
              placeholder="Just saying hi..."
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-[#ADB7BE] block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder:text-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
              placeholder="Let's talk about..."
            />
          </div>
          <button className=" font-medium py-2.5 px-5 w-full rounded-lg bg-gradient-to-br from-orange-500 via-emerald-500 to-green-600 mr-4 bg-white hover:bg-gradient-to-br hover:from-green-500 hover:via-emerald-500 hover:to-orange-500 text-white">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
