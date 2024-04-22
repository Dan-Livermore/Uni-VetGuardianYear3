import React, { useState } from 'react';
import ImageMapper from 'react-img-mapper';
import IMGURL from "../../assets/SymptomChecker/Dog.avif";
import Back from "./Dog/Back/Back"
import Belly from "./Dog/Belly/Belly";
import Ear from "./Dog/Ear/Ear";
import Face from "./Dog/Face/Face";
import Feet from "./Dog/Feet/Feet";
import Legs from "./Dog/Legs/Legs";
import Mouth from "./Dog/Mouth/Mouth";
import Neck from "./Dog/Neck/Neck";
import Nose from "./Dog/Nose/Nose";
import Tail from "./Dog/Tail/Tail";


const Dog = () => {
    const [hoveredArea, setHoveredArea] = useState(null);
    const [selectedArea, setSelectedArea] = useState(null);

    const MAP = {
        name: "my-map",
        areas: [
        { name: "Back", shape: "poly", coords: [479,151,451,163,419,191,408,224,394,221,367,233,324,243,263,257,274,224,250,188,225,172,245,144,241,118,251,118,266,119,281,127,324,129,371,127,405,127,462,141], fillColor: "green"  },
        { name: "Belly", shape: "poly",  coords: [402,251 ,381,253 ,349,258 ,304,287 ,286,294 ,249,297 ,252,280 ,256,267 ,263,256 ,308,245 ,355,236 ,394,221 ,410,224], fillColor: "green"  },
        { name: "Ear", shape: "poly",  coords: [118,40, 123,48, 126,59, 126,71, 121,75, 123,84, 125,100, 131,110, 138,119, 144,117, 151,107, 163,100, 173,91, 178,74, 176,64, 174,58, 158,50, 148,43, 132,33], fillColor: "green"  },
        { name: "Face", shape: "poly",  coords: [115,33,120,46,126,62,124,76,124,99,134,113,138,124,128,134,118,138,107,145,113,130,117,117,106,111,91,113,78,120,69,117,67,111,57,111,49,107,41,103,20,97,33,90,46,83,60,74,61,61,63,53,72,45,94,33], fillColor: "green"  },
        { name: "Feet", shape: "poly",  coords: [479,443,492,440,500,431,506,407,486,400,479,417,459,427,458,437,468,443,404,415,402,426,415,434,421,429,432,431,443,422,446,399,426,396,418,407,404,415,434,429,467,441,],fillColor: "green"  },
        { name: "Feet", shape: "poly",  coords: [160,389,149,403,130,410,133,426,152,426,160,428,175,422,182,405,186,392,239,399,232,417,224,431,219,443,196,443,182,440,178,434,184,423,197,416,205,401,206,394],fillColor: "green"  },
        { name: "Leg", shape: "poly",  coords: [236,398,207,397,207,377,205,364,211,341,204,300,197,316,197,345,190,375,184,398,160,388,163,344,158,284,147,245,155,245,166,214,176,195,225,172,249,186,274,224,263,256,250,280,245,339,240,375],fillColor: "green"  },
        { name: "Leg", shape: "poly",  coords: [479,153,455,162,441,195,428,213,406,242,405,252,385,253,370,256,375,293,383,304,397,327,423,352,429,384,426,396,448,401,455,364,461,340,486,400,506,407,516,356,506,336,496,304,498,256,504,209,492,168,484,151 ],fillColor: "green"  },
        { name: "Mouth", shape: "poly",  coords: [41,155,52,152,82,155,95,145,107,144,117,116,91,117,74,120,55,124,43,134 ], fillColor: "green"  },
        { name: "Neck", shape: "poly",  coords: [183,68,200,85,220,103,224,110,242,113,245,144,225,172,179,193,166,214,157,244,146,245,141,217,144,207,127,178,110,145,118,135,140,127,172,94], fillColor: "green"  },
        { name: "Nose", shape: "poly",  coords: [31,117,40,106,19,97,19,105,51,126,81,122,68,113,40,105,29,99], fillColor: "green"  },
        { name: "Tail", shape: "poly",  coords: [617,257, 594,247, 569,240, 541,221, 522,191, 507,168, 496,154, 481,150, 490,168, 500,196, 507,212, 512,237, 519,247, 531,256, 540,256, 555,264, 563,265, 570,266, 578,266, 591,266, 604,266], fillColor: "green"  },
        
      
      ]
    };

const enterArea = area => {
  // If the mouse is hovering over that section display it red.
    if (selectedArea != null && !selectedArea.includes(area.name)) {
        setHoveredArea(area);
        }
    };


const leaveArea = () => {
  // Remove fill when not hovered or clicked off.
    if (!selectedArea == null){
        setHoveredArea(null);
        }
    };

    // Fill when selected.
    const selectArea = (area) => {
      if (selectedArea === area) {
        setSelectedArea(null);
      } else {
        setSelectedArea(area);
        setHoveredArea(area);
      }
    };


    // Need to find how to keep the fill colour when not hovered

  return (
<div className='flex'>
  <ImageMapper
    src={IMGURL}
    map={MAP}
    width={626}
    onMouseEnter={enterArea}
    onMouseLeave={leaveArea}
    onClick={selectArea}
  />
  {hoveredArea && ( 
    <div className="flex-1 text-center"> 
      <h1 className='text-3xl font-bold'>{hoveredArea.name} Related Issues</h1>
      {(() => {
        switch (hoveredArea.name) {
          case "Back":
            return <Back />;
          case "Belly":
            return <Belly />;
          case "Ear":
            return <Ear />;
          case "Face":
            return <Face />;
          case "Feet":
            return <Feet />;
          case "Leg":
            return <Legs />;
          case "Mouth":
            return <Mouth />;
          case "Neck":
            return <Neck />;
          case "Nose":
            return <Nose />;
          case "Tail":
            return <Tail />;
          default:
            return null;
        }
      })()}
    </div>
  )}
</div>

  );
};

export default Dog;