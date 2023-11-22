import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 flex-1">
      <div className="flex items-center flex-1">
        <span className="text-3xl font-bold">Vet Guardian</span>
      </div>
      <div className="lg:hidden md:hidden lf:hidden items-center">
        <div className="cursor-pointer" onClick={toggleMenu}>
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              className={`${showMenu ? 'hidden' : 'block'}`}
              d="M3 12h18M3 6h18M3 18h18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className={`${showMenu ? 'block' : 'hidden'}`}
              d="M21 12l-9-9M21 12l-9 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className={`lg:flex md:flex lf:flex-1 items-center justify-end font-normal hidden ${showMenu ? 'block' : 'hidden'}`}>
        {/* Your menu items */}
        <div className="flex-10">
          <ul className="flex flex-col lg:flex-row md:flex-row lf:flex-col gap-8 mr-16 text-[18px]">
            <Link to="/About">
              <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>About</li>
            </Link>
            <Link to="/SymptomChecker">
              <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Symptom Checker</li>
            </Link>
            <Link to="/Accounts">
              <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Accounts</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;