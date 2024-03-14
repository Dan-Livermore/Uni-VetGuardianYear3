import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(() => {
    // Check if a theme  is stored in localStorage.
    const storedTheme = localStorage.getItem('theme');
    // If there is a theme use it, otherwise use the default theme.
    return storedTheme ? storedTheme : 'light';
  });

  useEffect(() => {
    // If there is a theme add it to globally.
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    // Update the class on the document element based on the theme.
    document.documentElement.classList.toggle('dark', theme === 'dark');
    // Save the theme to local storage.
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    // Toggle between both themes.
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
  <div className='lg:flex md:flex lg:flex-1 items-center justify-end font-normal'>
    <div className="flex items-center justify-center">
      <button onClick={toggleTheme} className='bg-emerald-800 dark:bg-emerald-900 border-emerald-800 rounded-lg text-white dark:text-gray-300 h-10 flex items-center justify-center px-4'>
        <div className="flex items-center justify-center">
          <FaSun className={`w-6 h-6 text-${theme === 'light' ? 'white' : 'gray'}-500 mr-2`} />
          <p className='pr-2'>/</p>
          <FaMoon className={`w-6 h-6 text-${theme === 'dark' ? 'white' : 'gray'}-500`} />
        </div>
      </button>
    </div>
  </div>
  );
};

export default ThemeSwitcher;