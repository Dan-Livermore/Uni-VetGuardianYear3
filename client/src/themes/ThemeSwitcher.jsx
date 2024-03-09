import React, { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log("new theme = ", theme);
  }

  return (
    <div className=" bg-white dark:bg-black">
    <button onClick={handleTheme} className='bg-emerald-500 dark:bg-emerald-900'>
      Toggle Theme
    </button>
    </div>
  );
};

export default ThemeSwitcher;