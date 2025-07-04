"use client";

import { createTheme } from '@mui/material/styles';
import { red, blue, grey } from '@mui/material/colors';
import { poppins500, inter } from './index';

// Create theme based on mode (light or dark)
export const createAppTheme = (mode) => {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: '#556cd6',
        light: '#8596e0',
        dark: '#2a45c2',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#19857b',
        light: '#4cb5ab',
        dark: '#105850',
        contrastText: '#ffffff',
      },
      error: {
        main: red.A400,
      },
      background: {
        default: mode === 'light' ? '#ffffff' : '#121212',
        paper: mode === 'light' ? '#f5f5f5' : '#1e1e1e',
        transparent: mode === 'light'
          ? 'rgba(255, 255, 255, 0.85)'
          : 'rgba(18, 18, 18, 0.85)',
      },
      text: {
        primary: mode === 'light' ? '#333333' : '#f5f5f5',
        secondary: mode === 'light' ? '#666666' : '#aaaaaa',
      },
    },
    typography: {
      fontFamily: inter.style.fontFamily,
      h1: {
        fontFamily: poppins500.style.fontFamily,
        fontWeight: 500,
      },
      h2: {
        fontFamily: poppins500.style.fontFamily,
        fontWeight: 500,
      },
      h3: {
        fontFamily: poppins500.style.fontFamily,
        fontWeight: 500,
      },
      h4: {
        fontFamily: poppins500.style.fontFamily,
        fontWeight: 500,
      },
      h5: {
        fontFamily: poppins500.style.fontFamily,
        fontWeight: 500,
      },
      h6: {
        fontFamily: poppins500.style.fontFamily,
        fontWeight: 500,
      },
      button: {
        textTransform: 'none',
      },
    },
    shape: {
      borderRadius: 4,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 4,
            textTransform: 'none',
            fontWeight: 500,
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: mode === 'light'
              ? '0px 4px 8px rgba(0, 0, 0, 0.05)'
              : '0px 4px 8px rgba(0, 0, 0, 0.15)',
            borderRadius: 8,
          },
        },
      },
    },
  });
};

// Default theme (light mode)
const theme = createAppTheme('light');

export default theme;