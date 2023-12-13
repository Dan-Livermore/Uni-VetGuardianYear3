import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const PasswordRequestSent = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-100">
      <div className="bg-white shadow-md rounded-md p-6 max-w-md w-full mt-1 md:mt-0">
        <h2 className="text-2xl font-bold mb-4">Password Request Sent!</h2>
        <p className="text-gray-700 mb-4">
          An email with instructions to reset your password has been sent to your email address.
        </p>
        <p className="text-gray-700">
          If you don't receive an email within a few minutes, please check your spam folder.
        </p>
        <br />
        <Link to="/accounts">
        <button class="w-full py-3 font-medium text-white bg-fuchsia-600 hover:bg-fuchsia-500 rounded-lg border-fuchsia-500 hover:shadow inline-flex space-x-2 items-center justify-center">         
                <span>Log In?</span>
              </button>
        </Link>
      </div>
    </div>
  );
};

export default PasswordRequestSent;