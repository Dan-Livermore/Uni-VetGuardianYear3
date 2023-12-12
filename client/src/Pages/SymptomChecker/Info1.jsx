import { FaDog } from "react-icons/fa";
import { FaCat } from "react-icons/fa";
import { GiRabbit } from "react-icons/gi";

import React, { useState } from 'react';

import Info2 from "./Info2";
import Symptom1 from "./Symptom1";

const Info1 = () => {
  
  const [showElement, setShowElement] = useState(false);

  const handleButtonClick = () => { 
    setShowElement(true);
  };

  return (
    <>
        <div className="grid grid-cols-3 gap-2 items-center justify-center">
          <div className="flex justify-center">
            <button onClick={handleButtonClick} type="submit" className="bg-purple-500 hover:bg-purple-700 text-white font-bold text-2xl py-6 px-8 rounded-md mt-2 flex flex-col items-center justify-center w-48 h-48">
              Dog
              <span className="mt-2"><FaDog size={40} /></span>
            </button>
          </div>
          <div className="flex justify-center">
            <button onClick={handleButtonClick} type="submit" className="bg-purple-500 hover:bg-purple-700 text-white font-bold text-2xl py-6 px-8 rounded-md mt-2 flex flex-col items-center justify-center w-48 h-48">
              Cat
              <span className="mt-2"><FaCat size={40} /></span>
            </button>
          </div>
          <div className="flex justify-center">
            <button onClick={handleButtonClick} type="submit" className="bg-purple-500 hover:bg-purple-700 text-white font-bold text-2xl py-6 px-8 rounded-md mt-2 flex flex-col items-center justify-center w-48 h-48">
              Other
              <span className="mt-2"><GiRabbit size={40} /></span>
            </button>
          </div>
        </div>
        {showElement && (
        <div>
        <Symptom1 />
        </div>
      )}
      </>
  );
};

export default Info1;