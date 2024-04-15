import React, { useState } from 'react';

import { FaDog } from "react-icons/fa";
import { FaCat } from "react-icons/fa";
import { GiSnail } from "react-icons/gi";

import Dog from "../../Components/SymptomChecker/Dog";

const AnimalSelector = () => {
const [selectedButton, setSelectedButton] = useState(null);

const handleButtonClick = (id) => {
  setSelectedButton(id);
};

return (
  <>
  {/* Display icons for 3 animals */}
    <div className="grid grid-cols-3 gap-2 items-center justify-center">
      <div className="flex justify-center">
        <button
          onClick={() => handleButtonClick('Dog')}
          id="Dog"
          type="submit"
          className="bg-emerald-500 dark:bg-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-800 text-white dark:text-gray-300 font-bold text-2xl py-6 px-8 rounded-md mt-2 flex flex-col items-center justify-center w-48 h-48"
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
          disabled
          className="bg-slate-500 text-white font-bold text-2xl py-6 px-8 rounded-md mt-2 flex flex-col items-center justify-center w-48 h-48"
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
          disabled
          className="bg-slate-500 text-white font-bold text-2xl py-6 px-8 rounded-md mt-2 flex flex-col items-center justify-center w-48 h-48"
        >
          Other
          <span className="mt-2"><GiSnail size={50} /></span>
        </button>
      </div>
    </div>
    {selectedButton && (
      <>
        <p className="py-8 pr-4 pb-4 dark:text-gray-300">Now, where does the problem occur from?</p>
        <Dog />
      </>
    )}
  </>
);
};

export default AnimalSelector;