import React, { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    console.log('New theme:', newTheme);
    setTheme(newTheme);
  };
  

  return (
    <div className="Index">
    <button onClick={toggleTheme}>
      Toggle Theme
    </button>
    </div>
  );
};

export default ThemeSwitcher;