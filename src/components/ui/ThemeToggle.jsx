"use client";

import { useState, useEffect } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@/lib/context/ThemeContext';

/**
 * ThemeToggle component for switching between light and dark mode
 * 
 * @returns {JSX.Element} The ThemeToggle component
 */
export const ThemeToggle = () => {
  const { mode, toggleThemeMode } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Tooltip title={mode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}>
      <IconButton
        onClick={toggleThemeMode}
        color="inherit"
        aria-label="toggle theme"
        edge="end"
        sx={{ ml: 1 }}
      >
        {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;