import React, { useState } from 'react';
import Symptom3 from "./Symptom3";

const Symptom2 = () => {
  const [showElement, setShowElement] = useState(false);

  const handleButtonClick = () => {
    setShowElement(!showElement); // Toggles the visibility state
  };
  return (
    <>
      <div className="flex">
        <div>
          <p>Is your pet pregnant?</p>
          <button onClick={handleButtonClick} type="submit"
            className="flex-1 bg-purple-500 hover:bg-purple-700 text-white font-bold text-xl text-center py-2 px-4 rounded-md mt-2 mr-4 w-24">
            Yes
          </button>
          <button onClick={handleButtonClick} type="submit"
            className="flex-1 bg-purple-500 hover:bg-purple-700 text-white font-bold text-xl text-center py-2 px-4 rounded-md mt-2 mr-4 w-24">
            No
          </button>
        </div>
        {showElement && ( // Conditionally render the element based on showElement state
        <Symptom3/>
      )}
      </div>
    </>
  );
};

export default Symptom2;