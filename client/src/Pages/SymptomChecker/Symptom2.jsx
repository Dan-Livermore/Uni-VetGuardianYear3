import React from "react";

const Symptom2 = () => {
  const handleButtonClick = () => { 
    setShowElement(true);
  };
  return (
    <>
    <p>Is your pet pregnant?</p>
      <div className="flex">
        <div>
            <button onClick={handleButtonClick} type="submit"
              className="flex-1 bg-purple-500 hover:bg-purple-700 text-white font-bold text-xl text-center py-2 px-4 rounded-md mt-2 mr-4 w-24">
              Yes
            </button>
            <button onClick={handleButtonClick} type="submit"
              className="flex-1 bg-purple-500 hover:bg-purple-700 text-white font-bold text-xl text-center py-2 px-4 rounded-md mt-2 mr-4 w-24">
              No
            </button>
        </div>
      </div>
    </>
  );
};

export default Symptom2;
