import React, { useState } from "react";
import Image from "../../assets/SymptomChecker/Dog.avif";

const Dog = () => {
  const [highlightedArea, setHighlightedArea] = useState(null);

  const handleMouseEnter = (area) => {
    setHighlightedArea(area);
  };

  const handleMouseLeave = () => {
    setHighlightedArea(null);
  };

  const areas = [
    {
      alt: "Tail",
      title: "Tail",
      href: "localhost:3001/Dog/Tail",
      coords: "481,149 494,182 506,210 515,240 521,251 536,254 557,266 570,268 584,266 607,266 614,258 608,252 586,245 567,241 542,221 520,185 503,162 ",
      shape: "polygon"
    },
    // Define other areas similarly
  ];

  return (
    <>
      <div className="relative">
        <img src={Image} useMap="#image_map" />
        <map name="image_map">
          {areas.map((area, index) => (
            <area
              key={index}
              alt={area.alt}
              title={area.title}
              href={area.href}
              coords={area.coords}
              shape={area.shape}
              fillcolor={'red'}
              onMouseEnter={() => handleMouseEnter(area)}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </map>

        {highlightedArea && (
          <div
            className="absolute inset-0"
            style={{
              clipPath: `polygon(${highlightedArea.coords})`,
              backgroundColor: 'rgba(255, 0, 0, 0.5)',
            }}
          />
        )}
      </div>
    </>
  );
};

export default Dog;
