import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Symptom3 = () => {
    const [showElement, setShowElement] = useState(false);
  
    const handleButtonClick = () => {
      setShowElement(!showElement); // Toggles the visibility state
    };
  return (
    <>
    <div className="flex">
        <div>
            <p>Is your pet in pain? (They may be hunched over or more grumpy than usual)</p>
            <Link to="/result">
            <button onClick={handleButtonClick} type="submit"
                className="flex-1 bg-purple-500 hover:bg-purple-700 text-white font-bold text-xl text-center py-2 px-4 rounded-md mt-2 mr-4 w-24">
                Yes
            </button>
            <button onClick={handleButtonClick} type="submit"
                className="flex-1 bg-purple-500 hover:bg-purple-700 text-white font-bold text-xl text-center py-2 px-4 rounded-md mt-2 mr-4 w-24">
                No
                </button>
                </Link>
        </div>
        {showElement && ( // Conditionally render the element based on showElement state
        <Result/>
        )}
  </div>
    </>
  );
};

export default Symptom3