import React, { useState, useEffect } from 'react';

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
    <div className="flex bg-white dark:bg-gray-900 min-h-screen items-center justify-center">
    <button onClick={toggleTheme} className='bg-emerald-500 dark:bg-emerald-900 rounded-lg text-white dark:text-gray-300 h-10 w-40'>
      Toggle Theme
    </button>
    </div>
  );
};

export default ThemeSwitcher;