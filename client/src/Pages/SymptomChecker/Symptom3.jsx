import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Result from './Result';

const Symptom3 = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [showElement, setShowElement] = useState(false); // Define showElement state

  const handleButtonClick = (id) => {
    setSelectedButton(id);
    setShowElement(true); // Set showElement to true when a button is clicked
  };

  return (
    <>
      <div className="flex ">
        <div>
          <p>Is there a sudden change in your pet's behaviour?</p>
          <Link to="/result">
            <button onClick={handleButtonClick} type="submit"
              className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xl text-center py-2 px-4 rounded-md mt-2 mr-4 w-24">
              Yes
            </button>
            <button onClick={handleButtonClick} type="submit"
              className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xl text-center py-2 px-4 rounded-md mt-2 mr-4 w-24">
              No
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Symptom3;