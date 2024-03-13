import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const RestartButton = () => {
  // Wipe the current results.
    const reset = () => {
        setPrediction("");
        setImage("");
        setError("");
        setImageURL(null);
      };

  return (
    // Reload the page upon clicking the button.
    <Link to="/image-classifier">
    <button onClick={reset} className="bg-emerald-500 dark:bg-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-800 text-white dark:text-gray-300 font-bold py-2 px-4 rounded-md mt-2 mr-5">
      <FaArrowLeft style={{ marginRight: '5px' }} />
      Retry Prediction
    </button>
  </Link>
  );
};

export default RestartButton;
