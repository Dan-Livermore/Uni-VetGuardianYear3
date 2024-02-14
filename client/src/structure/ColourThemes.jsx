import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = (darkMode) => {
  return darkMode ? 'dark' : 'light';
};

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
