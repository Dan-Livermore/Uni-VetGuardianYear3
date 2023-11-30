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
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-teal-500 transition">
      <ul className="text-center text-xl p-20">
        {/* Links for sections*/}
        <Link spy={true} smooth={true} to="/about">
          <li className="my-4 py-4 border-b border-teal-500 hover:bg-teal-500 hover:text-zinc-400 hover:rounded cursor-pointer spy={true} smooth={true}">About</li>
        </Link>
        <Link spy={true} smooth={true} to="/symptomchecker">
          <li className="my-4 py-4 border-b border-teal-500 hover:bg-teal-500 hover:text-zinc-400 hover:rounded cursor-pointer spy={true} smooth={true}">Symptom Checker</li>
        </Link>
        <Link spy={true} smooth={true} to="/accounts">
          <li className="my-4 py-4 border-b border-teal-500 hover:bg-teal-500 hover:text-zinc-400 hover:rounded cursor-pointer spy={true} smooth={true}">Accounts</li>
        </Link>
      </ul>
    </div>
  );

  // Return JSX for the navbar
  return (
    <Router>
    <nav className="bg-teal-600">
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
        {/* Logo */}
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold items-center">
            <Link spy={true} smooth={true} to="/">
              <img src="../favicon.ico" alt="Vet Guardian" className="logo-img inline-block h-8 w-auto mr-2" />
              <p className="hover:text-zinc-400 transition border-b-0 border-teal-600 hover:border-zinc-400 cursor-pointer inline-block">Vet Guardian</p>
            </Link>
          </span>
        </div>
        
        {/* Desktop view */}
        <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-0 ml-auto text-[18px]">
              {/* links for sections */}
              <Link spy={true} smooth={true} to="/about">
                <li className="hover:text-zinc-400 transition border-b-0 border-teal-600 hover:border-zinc-400 cursor-pointer">About</li>
              </Link>
              <Link spy={true} smooth={true} to="/symptomchecker">
                <li className="hover:text-zinc-400 transition border-b-0 border-teal-600 hover:border-zinc-400 cursor-pointer">Symptom Checker</li>
              </Link>
              <Link spy={true} smooth={true} to="/accounts">
                <li className="hover:text-zinc-400 transition border-b-0 border-teal-600 hover:border-zinc-400 cursor-pointer">Accounts</li>
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
    
    {/*Creates routing on navabar*/}
   <Routes>
   <Route path="/" exact Component={Home} />
   <Route path="/about" exact Component={About} />
   <Route path="/symptomchecker" exact Component={SymptomChecker} />
   <Route path="/accounts" exact Component={Accounts} />
   <Route path="*" exact Component={PageNotFound} />
   </Routes>
 </Router>
  );
}

export default Nav;