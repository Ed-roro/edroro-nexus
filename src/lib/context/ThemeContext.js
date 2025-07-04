"use client";

import { createContext, useContext, useState, useEffect } from 'react';

// Create the context
export const ThemeContext = createContext({
  mode: 'light',
  toggleThemeMode: () => {},
});

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

// Theme provider component
export const ThemeProvider = ({ children }) => {
  // Initialize state from localStorage if available, otherwise default to 'light'
  const [mode, setMode] = useState('light');
  
  // Effect to load theme preference from localStorage on mount
  useEffect(() => {
    const savedMode = localStorage.getItem('themeMode');
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  // Toggle between light and dark mode
  const toggleThemeMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('themeMode', newMode);
  };

  // Context value
  const value = {
    mode,
    toggleThemeMode,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};