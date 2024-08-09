// import React, { useState, useEffect } from "react";
// import { Box, Button, TextField, Typography } from "@mui/material";
// import WestIcon from "@mui/icons-material/West";
// import { satoshi } from "@/font";

// export default function TopBar({ headerTitle, headerContent, showBackBtn, backBtnClick }) {
//   const [darkMode, setdarkMode] = useState(false);

//   useEffect(() => {
//     const handleSwitchValueChanged = () => {
//       const localStorageValue = localStorage.getItem("switchValue");
//       const parsedValue = localStorageValue === "true";
//       setdarkMode(parsedValue);
//     };

//     window.addEventListener("switchValueChanged", handleSwitchValueChanged);

//     handleSwitchValueChanged();

//     return () => {
//       window.removeEventListener(
//         "switchValueChanged",
//         handleSwitchValueChanged
//       );
//     };
//   }, []);

//   return (
//     <>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           width: "100%",
//           justifyContent: "center",
//           alignItems: "center",
//           gap: "13.26px",
//           marginTop: "28px",
//           marginBottom: "20px",
//         }}
//       >
//         <Box
//           sx={{
//             position: "relative",
//             width: "100%",
//             top: 0,
//             bottom: 0,
//             margin: "auto",
//           }}
//         >
//           {showBackBtn ? (
//             <Box
//               onClick={backBtnClick}
//               sx={{
//                 width: "47.43px",
//                 height: "47.43px",
//                 borderRadius: "50%",
//                 background: `${
//                   darkMode
//                     ? "linear-gradient(111.68deg, rgba(255, 255, 255, 0.15) 7.59%, rgba(237, 237, 237, 0.3) 102.04%), linear-gradient(0deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.25))"
//                     : "#d7dff2"
//                 }`,
//                 position: "absolute",
//                 left: "80px",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 color: "white",
//                 display: "flex",
//                 border: `${
//                   darkMode ? "3px solid #FFFFFF40" : "3px solid white"
//                 }`,
//                 cursor: "pointer",
//                 "&:hover": {
//                   background: `${
//                     darkMode
//                       ? "linear-gradient(120.6deg, #5C32B6 16.21%, rgba(62, 16, 160, 0.3) 102.67%), linear-gradient(0deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.25))"
//                       : "#d7dff2"
//                   }`,
//                   border: `${
//                     darkMode ? "3px solid #FFFFFF40" : "3px solid white"
//                   }`,
//                   boxShadow: `${
//                     darkMode
//                       ? "unset"
//                       : "0px 0px 21.1299991607666px 0px #9D42B64D"
//                   }`,
//                 },
//               }}
//             >
//               <WestIcon
//                 style={{ color: `${darkMode ? "white" : "#151141"}` }}
//               />
//             </Box>
//           ) : (
//             ""
//           )}
//           <Typography
//             variant="h3"
//             color={`${darkMode ? "white" : "rgba(21, 17, 65, 1)"}`}
//             fontWeight={700}
//             fontSize={"49.74px"}
//             lineHeight={"64.66px"}
//             letterSpacing={"0.31 px"}
//             textAlign={"center"}
//             display={"block"}
//             style={{
//               ...satoshi.style,
//               padding: "0px 80px",
//               boxSizing: "border-box",
//             }}
//           >
//             <span>{headerTitle}</span>
//           </Typography>
//         </Box>
//         {headerContent == "" ? (
//           ""
//         ) : (
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               width: "auto",
//               textAlign: "center",
//               color: "white",
//               padding: "6.63px 20px",
//               borderRadius: "180px",
//               position: "relative",
//               background: darkMode
//                 ? "linear-gradient(to right, #844FFC, #FF1FF1, #04FFB1)"
//                 : "white",
//               cursor: "pointer",
//               lineHeight: "12px",
//               transition: "width 1000ms",
//               "&:after": {
//                 content: '""',
//                 position: "absolute",
//                 display: "block",
//                 borderRadius: "180px",
//                 width: "calc(100% - 2px) ",
//                 height: "calc(100% - 2px)",
//                 backgroundColor: darkMode ? "#8576b3" : "#d9d7f2",
//                 transition: "opacity 1000ms",
//                 zIndex: "2",
//                 opacity: 1,
//               },

//               "&:before": {
//                 content: '""',
//                 position: "absolute",
//                 display: "block",
//                 borderRadius: "180px",
//                 width: "calc(100% - 2px) ",
//                 height: "calc(100% - 2px)",
//                 zIndex: "1",
//                 background:
//                   "linear-gradient(90.03deg, #844FFC 0.03%, #FF1FF1 47.72%, #04FFB1 100.34%)",
//               },
//             }}
//           >
//             <span
//               className={satoshi.className}
//               style={{
//                 zIndex: "3",
//                 lineHeight: "19px",
//                 letterSpacing: "0.3100196421146393px",
//                 fontWeight: "500",
//                 fontSize: "14.92px",
//                 color: darkMode ? "white" : "rgba(21, 17, 65, 1)",
//               }}
//             >
//               {headerContent}
//             </span>
//           </Box>
//         )}
//       </Box>
//     </>
//   );
// }
