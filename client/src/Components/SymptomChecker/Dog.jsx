// import React, { useState } from "react";
// import Image from "../../assets/SymptomChecker/Dog.avif";
// import ImageMapper from "react-image-mapper";

// const Dog = () => {
//   const [highlightedArea, setHighlightedArea] = useState(null); // State to track highlighted area


//   const sections = [
//     {
//       alt: "Tail", title: "Tail", href: "localhost:3001/Dog/Tail", shape: "polygon", coords: "481,149 494,182 506,210 515,240 521,251 536,254 557,266 570,268 584,266 607,266 614,258 608,252 586,245 567,241 542,221 520,185 503,162"
//     },
//     {
//       alt: "Ears", title: "Ears", href: "localhost:3001/Dog/Ears", shape: "polygon", coords: "118,40 123,48 126,59 126,71 121,75 123,84 125,100 131,110 138,119 144,117 151,107 163,100 173,91 178,74 176,64 174,58 158,50 148,43 132,33"
//     },
//     {
//       alt: "Belly", title: "Belly", href: "localhost:3002/SymptomChecker/Dog/Belly", shape: "polygon", coords: "402,251 381,253 349,258 304,287 286,294 249,297 252,280 256,267 263,256 308,245 355,236 394,221 410,224"
//     },
//     {
//       alt: "Back", title: "Back", href: "localhost:3002/SymptomChecker/Dog/Back", shape: "polygon", coords: "479,151 451,163 419,191 408,224 394,221 367,233 324,243 263,257 274,224 250,188 225,172 245,144 241,118 251,118 266,119 281,127 324,129 371,127 405,127 462,141"
//     },
//     {
//       alt: "Neck", title: "Neck", href: "localhost:3002/SymptomChecker/Dog/Neck", shape: "polygon", coords: "183,68 200,85 220,103 224,110 242,113 245,144 225,172 179,193 166,214 157,244 146,245 141,217 144,207 127,178 110,145 118,135 140,127 172,94"
//     },
//     {
//       alt: "Legs", title: "Legs", href: "localhost:3002/SymptomChecker/Dog/FrontLegs", shape: "polygon", coords: "236,398 207,397 207,377 205,364 211,341 204,300 197,316 197,345 190,375 184,398 160,388 163,344 158,284 147,245 155,245 166,214 176,195 225,172 249,186 274,224 263,256 250,280 245,339 240,375"
//     },
//     {
//       alt: "Face", title: "Face", href: "localhost:3001/SymptomChecker/Dog/Face", shape: "polygon", coords: "115,33 120,46 126,62 124,76 124,99 134,113 138,124 128,134 118,138 107,145 113,130 117,117 106,111 91,113 78,120 69,117 67,111 57,111 49,107 41,103 20,97 33,90 46,83 60,74 61,61 63,53 72,45 94,33"
//     },
//     {
//       alt: "Nose", title: "Nose", href: "localhost:3001/SymptomChecker/Dog/Nose", shape: "polygon", coords: "31,117 40,106 19,97 19,105 51,126 81,122 68,113 40,105 29,99"
//     },
//     {
//       alt: "Mouth", title: "Mouth", href: "localhost:3001/SymptomChecker/Dog/Mouth", shape: "polygon", coords: "41,155 52,152 82,155 95,145 107,144 117,116 91,117 74,120 55,124 43,134"
//     }
//   ];

//   const handleMouseEnter = (area, index) => {
//     setHighlightedArea(index); // Set highlighted area on mouse enter
//   };

//   const handleMouseLeave = () => {
//     setHighlightedArea(null); // Reset highlighted area on mouse leave
//   };

//   return (
//     <>
//       <div className="relative">
//         <ImageMapper
//           src={Image}
//           map={{
//             name: "image_map",
//             areas: sections.map((area, index) => ({
//               ...area,
//               onMouseEnter: () => handleMouseEnter(area, index),
//               onMouseLeave: handleMouseLeave
//             }))
//           }}


//         />
//       </div>
//     </>
//   );
// };

// export default Dog;

