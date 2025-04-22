// "use client";
// import React, { useState } from "react";
// import HoverEffect from "./HoverEffect";

// // Basic SVG Icons (Adjust size to w-6 h-6)
// const EditIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     strokeWidth={1.5}
//     stroke="currentColor"
//     className="w-6 h-6" // Updated size
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
//     />
//   </svg>
// );

// const DeleteIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     strokeWidth={1.5}
//     stroke="currentColor"
//     className="w-6 h-6" // Updated size
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
//     />
//   </svg>
// );

// interface EventCardProps {
//   title: string;
//   date: string;
//   location: string;
//   price: string;
//   host: string;
//   image: string;
//   hostImage: string;
// }

// export default function EventCard({
//   title,
//   date,
//   location,
//   price,
//   host,
//   image,
//   hostImage,
// }: EventCardProps) {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <section
//       className="inline-flex justify-start items-start gap-4"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div
//         className={`w-[640px] bg-gray-200/10 rounded-lg inline-flex justify-start items-start overflow-hidden transition-all duration-200 ease-in-out ${
//           isHovered
//             ? "bg-gray-200/20 shadow-[0px_4px_24px_0px_rgba(202,202,202,0.20)]"
//             : ""
//         }`}
//       >
//         <div
//           data-black-overlay="true"
//           data-shape="square"
//           data-size="md"
//           className="w-48 h-48 flex-shrink-0 justify-center items-center overflow-hidden relative"
//         >
//           <img className="w-full h-full object-cover" src={image} alt={title} />
//           {isHovered && <HoverEffect />}
//         </div>
//         <div className="flex-1 self-stretch px-4 py-2 inline-flex flex-col justify-between items-start">
//           <div className="self-stretch text-white text-xl font-medium font-['Poppins'] leading-loose tracking-tight mb-1 line-clamp-2">
//             {title}
//           </div>
//           <div className="self-stretch inline-flex justify-start items-center gap-2 text-white">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 16 16"
//               fill="currentColor"
//               className="w-4 h-4 flex-shrink-0"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M4 1.75a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 .75.75V3h1.75A1.75 1.75 0 0 1 15.5 4.75v8.5A1.75 1.75 0 0 1 13.75 15H2.25A1.75 1.75 0 0 1 .5 13.25v-8.5A1.75 1.75 0 0 1 2.25 3H4V1.75ZM2 6.5v6.75c0 .14.11.25.25.25h11.5a.25.25 0 0 0 .25-.25V6.5H2Zm11.5-2H2.25a.25.25 0 0 0-.25.25V5h11.5V4.75a.25.25 0 0 0-.25-.25ZM7.75 8a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5A.75.75 0 0 1 7.75 8Z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             <div className="flex-1 text-sm font-normal font-['Poppins'] leading-normal tracking-tight truncate">
//               {date}
//             </div>
//           </div>
//           <div className="self-stretch inline-flex justify-start items-center gap-2 text-white">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 16 16"
//               fill="currentColor"
//               className="w-4 h-4 flex-shrink-0"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="m7.53 1.74-.53.53-.53-.53a4.5 4.5 0 0 1 7.002 0l-.53.53-.531-.53a3 3 0 0 0-4.88 0ZM6.5 7.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
//                 clipRule="evenodd"
//               />
//               <path
//                 fillRule="evenodd"
//                 d="M2.058 7.466a5.99 5.99 0 0 1 10.386-.002L8 13.898l-5.942-6.433ZM8 15l6.942-7.534a6.016 6.016 0 0 0-1.02-1.448 7.5 7.5 0 0 0-11.844 0A6.014 6.014 0 0 0 1.058 7.466L8 15Z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             <div className="flex-1 text-sm font-normal font-['Poppins'] leading-normal tracking-tight truncate">
//               {location}
//             </div>
//           </div>
//           <div className="inline-flex justify-start items-center gap-2 text-white">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 16 16"
//               fill="currentColor"
//               className="w-4 h-4 flex-shrink-0"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M2 4.75A2.75 2.75 0 0 1 4.75 2h4.161a3.52 3.52 0 0 1 1.96.583l3.5 2.5a.75.75 0 0 1 0 1.134l-3.5 2.5a3.52 3.52 0 0 1-1.96.583H4.75A2.75 2.75 0 0 1 2 7.25V4.75Zm2.75-.25a1.25 1.25 0 0 0-1.25 1.25v2.5c0 .69.56 1.25 1.25 1.25h4.161a2.02 2.02 0 0 0 1.12-.333l3.5-2.5a.25.25 0 0 0 0-.368l-3.5-2.5a2.02 2.02 0 0 0-1.12-.333H4.75ZM6.5 5.75a.75.75 0 0 1 .75-.75A.75.75 0 0 1 8 5.75v.5A.75.75 0 0 1 7.25 7 .75.75 0 0 1 6.5 6.25v-.5Z"
//                 clipRule="evenodd"
//               />
//             </svg>
//             <div className="text-sm font-normal font-['Poppins'] leading-normal tracking-tight">
//               {price}
//             </div>
//           </div>
//           <div className="inline-flex justify-start items-center gap-2 text-white mt-1">
//             <div
//               data-shape="square"
//               data-size="16"
//               className="w-4 h-4 relative rounded-sm overflow-hidden flex-shrink-0"
//             >
//               <img
//                 className="w-full h-full object-cover"
//                 src={hostImage}
//                 alt={host}
//               />
//             </div>
//             <div className="text-sm font-normal font-['Poppins'] leading-normal tracking-tight truncate">
//               {host}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div
//         className={`py-2 flex flex-col justify-start items-center gap-6 transition-opacity duration-200 ease-in-out ${
//           isHovered ? "opacity-100 flex" : "opacity-0 hidden"
//         }`}
//       >
//         <button
//           className="p-1 rounded text-white hover:bg-black/30 transition-colors"
//           aria-label="Edit Event"
//         >
//           <EditIcon />
//         </button>
//         <button
//           className="p-1 rounded text-white hover:bg-black/30 transition-colors"
//           aria-label="Delete Event"
//         >
//           <DeleteIcon />
//         </button>
//       </div>
//     </section>
//   );
// }
