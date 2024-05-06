import React from "react";

const TabBtn = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-transparent bg-clip-text  bg-gradient-to-r from-orange-400 via-emerald-500 to-green-600 border-b-2 border-orange-500 border-b-2 border-orange-500"
    : "text-[#4f5457]";
  return (
    <button onClick={selectTab}>
      <p
        className={`cursor-pointer mr-3 font-bold hover:text-transparent hover:bg-clip-text  hover:bg-gradient-to-r hover:from-orange-400 hover:via-emerald-500 hover:to-green-600 ${buttonClasses}`}
      >
        {" "}
        {children}
      </p>
    </button>
  );
};

export default TabBtn;
