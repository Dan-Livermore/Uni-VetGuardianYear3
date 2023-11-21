import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 flex-1">
      <div className="flex items-center flex-1">
        <span className="text-3xl font-bold">Logo</span>
      </div>
      <div className="lg:flex md:flex lf:flex-1 items-center justify-end font-normal hidden">
        <div className="flex-10">
          <ul className="flex gap-8 mr-16 text-[18px]">
            <Link to="/SymptomChecker">
              <li>Symptom Checker</li>
            </Link>
            <Link to="/Accounts">
              <li>Accounts?</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;