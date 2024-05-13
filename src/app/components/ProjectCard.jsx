import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 hover:rounded-t-xl transition-all duration-500 gap-3">
          <Link
            href={gitUrl}
            className="w-14 h-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-orange-500 group/link"
          >
            <CodeBracketIcon className="w-10 h-10 text-[#ADB7BE] cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-orange-500" />
          </Link>
          <Link
            href={previewUrl}
            className="w-14 h-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-orange-500 group/link"
          >
            <EyeIcon className="w-10 h-10 text-[#ADB7BE] cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-orange-500" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-1 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-emerald-600  to-green-600">
          {title}
        </h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
