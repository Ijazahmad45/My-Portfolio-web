// import Link from "next/link";

// const NavLink = ({ href, title }) => {
//   return (
//     <Link
//       href={href}
//       className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
//     >
//       {title}
//     </Link>
//   );
// };

// export default NavLink;
// NavLink.jsx
import Link from "next/link";
import React from "react";

const NavLink = ({ href, title }) => {
  return (
    <Link href={href} legacyBehavior>
      <a className="text-white hover:text-gray-300">{title}</a>
    </Link>
  );
};

export default NavLink;

