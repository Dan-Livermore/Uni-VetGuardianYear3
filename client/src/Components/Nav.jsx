import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import SymptomChecker from "../Pages/SymptomChecker";
import Accounts from "../Pages/Accounts";
import PageNotFound from "../Pages/PageNotFound";

// Navbar
const Nav = () => {
  // To allow dynamic navbar
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // Mobile view
  const content = (
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-purple-500 transition">
      <ul className="text-center text-xl p-20">
        {/* Links for sections*/}
        <Link spy={true} smooth={true} to="/about">
          <li className="my-4 py-4 border-b border-purple-500 hover:bg-purple-500 hover:text-zinc-400 hover:rounded cursor-pointer spy={true} smooth={true}">About</li>
        </Link>
        <Link spy={true} smooth={true} to="/symptom-checker">
          <li className="my-4 py-4 border-b border-purple-500 hover:bg-purple-500 hover:text-zinc-400 hover:rounded cursor-pointer spy={true} smooth={true}">Symptom Checker</li>
        </Link>
        <Link spy={true} smooth={true} to="/accounts">
          <li className="my-4 py-4 border-b border-purple-500 hover:bg-purple-500 hover:text-zinc-400 hover:rounded cursor-pointer spy={true} smooth={true}">Log In</li>
        </Link>
      </ul>
    </div>
  );

  // Return JSX for the navbar
  return (
    <nav className="bg-purple-600">
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
        {/* Logo */}
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold items-center">
            <Link spy={true} smooth={true} to="/">
              <img src="../favicon.ico" alt="Vet Guardian" className="logo-img inline-block h-8 w-auto mr-2" />
              <p className="hover:text-zinc-400 transition border-b-0 border-purple-600 hover:border-zinc-400 cursor-pointer inline-block">Vet Guardian</p>
            </Link>
          </span>
        </div>
        
        {/* Desktop view */}
        <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-0 ml-auto text-[18px]">
              {/* links for sections */}
              <Link spy={true} smooth={true} to="/about">
                <li className="hover:text-zinc-400 transition border-b-0 border-purple-600 hover:border-zinc-400 cursor-pointer">About</li>
              </Link>
              <Link spy={true} smooth={true} to="/symptom-checker">
                <li className="hover:text-zinc-400 transition border-b-0 border-purple-600 hover:border-zinc-400 cursor-pointer">Symptom Checker</li>
              </Link>
              <Link spy={true} smooth={true} to="/accounts">
                <li className="hover:text-zinc-400 transition border-b-0 border-purple-600 hover:border-zinc-400 cursor-pointer">Log In</li>
              </Link>
            </ul>
          </div>
        </div>

        {/* Mobile burger */}
        <div>
          {click && content}
        </div>
        <button className="block sm:hidden transition" onClick={handleClick}>
          {/* Hamburger icons*/}
          { click ? <FaTimes /> : <GiHamburgerMenu /> }
        </button>
      </div>
    </nav>
  );
}

export default Nav;