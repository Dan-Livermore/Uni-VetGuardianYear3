import React, { useState } from 'react';
import Yes7Paralysis from './Yes7Paralysis';
import No7Paralysis from './No7Paralysis';

function No6Jump() {
    const [selectedButton, setSelectedButton] = useState(null);
    const [showElement, setShowElement] = useState(false);
    
    const handleButtonClick = (id) => {
        setSelectedButton(id);
        setShowElement(true);
      };

    return (
      <>
        <div className="flex flex-col items-center py-4 dark:text-gray-300">
          <p className="text-center">Has the dog shown signs of incontinence or partial paralysis?</p>
          <div className="flex justify-center">
            <button
              onClick={() => handleButtonClick("Yes")}
              id="Yes"
              type="submit"
              className="bg-emerald-500 dark:bg-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-800 text-white dark:text-gray-300 font-bold text-xl text-center py-2 px-4 rounded-md mt-2 mr-4 w-24"
            >
              Yes
            </button>
            <button
              onClick={() => handleButtonClick("No")}
              id="No"
              type="submit"
              className="bg-emerald-500 dark:bg-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-800 text-white dark:text-gray-300 font-bold text-xl text-center py-2 px-4 rounded-md mt-2 w-24"
            >
              No
            </button>
          </div>
          {selectedButton && (
            <>
          <p className="text-sm pt-2 text-center">Selected: {selectedButton}</p>
            <div className="flex justify-center py-4 pb-4">
              {showElement &&
                (selectedButton === "Yes" ? (
                  <Yes7Paralysis selected={selectedButton} />
                ) : (
                  <No7Paralysis selected={selectedButton} />
                ))}
            </div>
            </>
          )}
        </div>
      </>
    );
}

export default No6Jump;