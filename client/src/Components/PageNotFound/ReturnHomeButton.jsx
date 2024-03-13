import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const ReturnHomeButton = () => {
  return (
    // Return to the home page upon clicking the button.
    <Link to="/">
      <button
        type="submit"
        className="bg-emerald-500 dark:bg-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-800 text-white dark:text-gray-300 font-bold text-2xl py-2 px-4 rounded-md mt-2"
      >
        Return Home
      </button>
    </Link>
  );
};

export default ReturnHomeButton;