import React, { useState } from 'react';
import Symptom3 from './Symptom3';

const Symptom2 = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [showElement, setShowElement] = useState(false);

  const handleButtonClick = (id) => {
    setSelectedButton(id);
    setShowElement(true);
  };

  return (
    <>
      <div className="flex p-4">
        <div>
          <p>Has your pet had a change in energy levels?</p>
          <button onClick={() => handleButtonClick('Yes')} id="Yes" type="submit"
            className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xl text-center py-2 px-4 rounded-md mt-2 mr-4 w-24">
            Yes
          </button>
          <button onClick={() => handleButtonClick('No')} id="No" type="submit"
            className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xl text-center py-2 px-4 rounded-md mt-2 mr-4 w-24">
            No
          </button>
        
        {selectedButton && (
          <div className="py-4 pr-4 pb-4">
            {showElement && <Symptom3 selected={selectedButton} />}
          </div>
        )}
        </div>
      </div>
    </>
  );
};

export default Symptom2;
