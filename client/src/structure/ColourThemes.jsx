import React, { useState, useEffect } from 'react';

const ColourThemes = () => {
  const [colorTheme, setColorTheme] = useState('light');

  useEffect(() => {
    // Save the selected theme in local storage for persistence
    localStorage.setItem('colorTheme', colorTheme);
    // Apply selected color theme when theme changes
    applyTheme(colorTheme);
  }, [colorTheme]);

  const applyTheme = (theme) => {
    // Remove existing theme classes from body
    document.body.classList.remove('theme-light', 'theme-dark', 'theme-high-contrast');
    // Add new theme class
    document.body.classList.add(`theme-${theme}`);
  };

  const handleThemeChange = (theme) => {
    setColorTheme(theme);
  };

  return (
    <div>
      <h2>Color Options</h2>
      <button onClick={() => handleThemeChange('light')}>Light</button>
      <button onClick={() => handleThemeChange('dark')}>Dark</button>
      <button onClick={() => handleThemeChange('high-contrast')}>
        High Contrast
      </button>
    </div>
  );
};

export default ColourThemes;
