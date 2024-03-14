import React, { createContext, useContext, useState, useEffect } from 'react';

const DarkModeTheme = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check if a theme preference is stored in localStorage
    const storedTheme = localStorage.getItem('theme');
    // If a theme preference is stored, use it; otherwise, default to "light"
    return storedTheme ? storedTheme : 'light';
  });

  useEffect(() => {
    // Update the class on the document element based on the theme
    document.documentElement.classList.toggle('dark', theme === 'dark');
    // Save the theme preference to local storage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    // Toggle between "light" and "dark" themes
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <DarkModeTheme.Provider value={{ theme, toggleTheme }}>
      {children}
    </DarkModeTheme.Provider>
  );
};

export const useTheme = () => useContext(DarkModeTheme);