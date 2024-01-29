import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const ReturnHomeButton = () => {
  return (
    <Link to="/">
      <button
        type="submit"
        className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold text-2xl py-2 px-4 rounded-md mt-2"
      >
        Return Home
      </button>
    </Link>
  );
};

export default ReturnHomeButton;