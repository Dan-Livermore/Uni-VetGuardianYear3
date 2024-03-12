import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import faviconImage from "../assets/Logo.jpeg";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkTokenStatus = () => {
      const token = localStorage.getItem("token");
      if (token) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };

    // Initial check when the component mounts
    checkTokenStatus();

    // Polling interval (every half second in this case)
    const interval = setInterval(() => {
      checkTokenStatus();
    }, 500); // 500 milliseconds = 0.5 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => setClick(!click);

  const content = (
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-emerald-800 dark:bg-emerald-900 transition">
      <ul className="text-center text-2xl p-20">
        <Link to="/about">
          <li className="hover:text-zinc-400 transition my-2 py-2 border-b-0 border-emerald-600 hover:border-zinc-400 cursor-pointer">About</li>
        </Link>
        <Link to="/symptom-checker">
          <li className="hover:text-zinc-400 transition my-2 py-2 border-b-0 border-emerald-600 hover:border-zinc-400 cursor-pointer">Symptom Suggester</li>
        </Link>
        <Link to="/image-classifier">
          <li className="hover:text-zinc-400 transition my-2 py-2 border-b-0 border-emerald-600 hover:border-zinc-400 cursor-pointer">Pet Identifier</li>
        </Link>
        <Link to="/account">
        {isLoggedIn ? 
        <li className="my-2 py-2 border-b border-emerald-800 dark:border-emerald-900 hover:border-emerald-800 hover:text-zinc-400 hover:rounded cursor-pointer">Account</li>
         : 
         <li className="my-2 py-2 border-b border-emerald-800 dark:border-emerald-900 hover:border-emerald-800 hover:text-zinc-400 hover:rounded cursor-pointer">Log In</li>
         }
        </Link>
      </ul>
    </div>
  );

  return (
    <nav className="bg-emerald-900 dark:bg-emerald-950 text-white dark:text-slate-600">
      <div className="h-10vh flex justify-between z-50 lg:py-5 px-20 py-4">
        {/* Logo */}
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold items-center">
            <Link to="/about">
              <img src={faviconImage} alt="Vet Guardian Logo" className="logo-img inline-block h-8 w-auto mr-2" />
              <p className="hover:text-zinc-400 transition border-b-0 border-emerald-600 hover:border-zinc-400 cursor-pointer inline-block">
                Vet Guardian
              </p>
            </Link>
          </span>
        </div>

        {/* Desktop view */}
        <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-0 ml-auto text-xl font-bold">
              {/* links for sections */}
              <Link to="/about">
                <li className="hover:text-zinc-400 dark:hover:text-slate-500 transition border-b-0 cursor-pointer">
                  About
                </li>
              </Link>
              <Link to="/symptom-checker">
                <li className="hover:text-zinc-400 dark:hover:text-slate-500 transition border-b-0 cursor-pointer">
                  Symptom Checker
                </li>
              </Link>
              <Link to="/image-classifier">
                <li className="hover:text-zinc-400 dark:hover:text-slate-500 transition border-b-0 cursor-pointer">
                  Pet Identifier
                </li>
              </Link>
              <li className="hover:text-zinc-40  dark:hover:text-slate-500 transition border-b-0 cursor-pointer">
                <Link to="/account">
                  {isLoggedIn ? (
                    <li>Account</li>
                  ) : (
                    <li>Log In</li>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile burger */}
        <div>{click && content}</div>
        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes /> : <GiHamburgerMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
