import { FaDog } from "react-icons/fa";
import { FaCat } from "react-icons/fa";
import { GiSnail } from "react-icons/gi";

import React, { useState } from 'react';

import Dog from "../../components/SymptomChecker/Dog";
import Symptom1 from "./Symptom1";
import Mapper from "../../components/SymptomChecker/Mapper";

const Info1 = () => {
const [selectedButton, setSelectedButton] = useState(null);

const handleButtonClick = (id) => {
  setSelectedButton(id);
};

return (
  <>
    <div className="grid grid-cols-3 gap-2 items-center justify-center">
      <div className="flex justify-center">
        <button
          onClick={() => handleButtonClick('Dog')}
          id="Dog"
          type="submit"
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-2xl py-6 px-8 rounded-md mt-2 flex flex-col items-center justify-center w-48 h-48"
        >
          Dog
          <span className="mt-2"><FaDog size={40} /></span>
        </button>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => handleButtonClick('Cat')}
          id="Cat"
          type="submit"
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-2xl py-6 px-8 rounded-md mt-2 flex flex-col items-center justify-center w-48 h-48"
        >
          Cat
          <span className="mt-2"><FaCat size={40} /></span>
        </button>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => handleButtonClick('Other')}
          id="Other"
          type="submit"
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-2xl py-6 px-8 rounded-md mt-2 flex flex-col items-center justify-center w-48 h-48"
        >
          Other
          <span className="mt-2"><GiSnail size={50} /></span>
        </button>
      </div>
    </div>
    {selectedButton && (
      <div>
        <p className="py-8 pr-4 pb-4">Now, where does the problem occur from?</p>
        <Dog />
        {/* <Symptom1 selected={selectedButton} /> */}
      </div>
    )}
  </>
);
};

export default Info1;