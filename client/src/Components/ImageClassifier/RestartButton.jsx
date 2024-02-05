import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const RestartButton = () => {
    const reset = () => {
        setPrediction("");
        setImage("");
        setError("");
        setImageURL(null);
      };

  return (
    <Link to="/image-classifier">
    <button onClick={reset} className="flex items-center bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-md mt-2 mr-5">
      <FaArrowLeft style={{ marginRight: '5px' }} />
      Retry Prediction
    </button>
  </Link>
  );
};

export default RestartButton;
