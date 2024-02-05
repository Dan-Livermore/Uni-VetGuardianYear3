import React from 'react'
import Image from "../../assets/SymptomChecker/DogBodyImg.png";

const Dog = () => {
  return (
    <>
    <img src={Image} useMap="#image_map" />
    <map name="image_map">
      <area alt="Tail" title="Tail" href="http://localhost:3001/SymptomChecker/Dog/Tail" coords="551,172 573,196 604,170 637,153 657,126 645,118 628,139 579,160 548,167 " shape="polygon" />
      <area alt="Nose" title="Nose" href="http://localhost:3001/SymptomChecker/Dog/Nose" coords="8,41 21,37 25,49 16,58 8,54 " shape="polygon" />
      <area alt="Ears" title="Ears" href="http://localhost:3001/SymptomChecker/Dog/Ears" coords="123,33 159,53 162,76 165,95 160,103 160,113 139,133 121,144 110,133 109,103 116,84 124,72 " shape="polygon" />
      <area alt="Head" title="Head" href="http://localhost:3001/SymptomChecker/Dog/Head" coords="12,58 28,81 48,93 81,89 97,89 109,99 121,67 124,35 159,55 170,34 154,14 126,7 97,7 75,18 66,27 39,34 23,39 25,49 " shape="polygon" />
      <area alt="Feet" title="Feet" href="http://localhost:3001/SymptomChecker/Dog/Feet" coords="625,509 633,515 647,513 656,516 674,505 674,491 650,491 631,497 " shape="polygon" />
      <area alt="Feet" title="Feet" href="http://localhost:3001/SymptomChecker/Dog/Feet" coords="588,474 599,477 609,478 626,471 629,457 603,456 586,463 583,471 592,478 " shape="polygon"/>
      <area alt="Feet" title="Feet" href="http://localhost:3001/SymptomChecker/Dog/Feet" coords="160,504 165,490 182,486 194,452 233,451 230,464 215,477 207,502 193,507 185,511 161,509 160,501 151,503 155,488 158,481 171,479 187,451 210,455 " shape="polygon"/>
      <area alt="Leg" title="Leg" href="http://localhost:3001/SymptomChecker/Dog/Leg" coords="252,109 220,109 189,124 165,167 154,210 161,232 188,272 199,394 185,443 167,448 159,459 161,466 187,468 193,463 207,462 214,435 231,419 233,337 238,285 246,278 246,244 262,214 276,175 267,129 " shape="polygon" />
    </map>
    </>
  );
};

export default Dog