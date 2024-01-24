import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const PasswordRequestSent = () => {
  return (
    <div className="flex items-center justify-center bg-emerald-50 min-h-screen">
      <div className="bg-white shadow-md rounded-md p-6 max-w-md w-full mt-1 md:mt-0">
        <h2 className="text-2xl font-bold mb-4">Password Request Sent!</h2>
        <p className="text-gray-700 mb-4">
          An email with instructions to reset your password has been sent to
          your email address.
        </p>
        <p className="text-gray-700">
          If you don't receive an email within a few minutes, please check your
          spam folder.
        </p>
        <br />
        <Link to="/log-in">
          <button class="w-full py-3 font-medium text-white bg-emerald-500 hover:bg-emerald-600 rounded-lg hover:shadow inline-flex space-x-2 items-center justify-center">
            <span>Log In</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PasswordRequestSent;
