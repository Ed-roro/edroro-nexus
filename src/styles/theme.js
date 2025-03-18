"use client";

import { createTheme } from '@mui/material/styles';
import { red, blue, grey } from '@mui/material/colors';
import { poppins500, inter } from './index';

// Create a theme instance
const theme = createTheme({
  palette: {
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
      default: '#ffffff',
      paper: '#f5f5f5',
      transparent: 'rgba(255, 255, 255, 0.85)',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
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
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;