"use client";

import { useState, useEffect } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";
import { createAppTheme } from "./theme";
import { ThemeProvider, useTheme } from "@/lib/context/ThemeContext";

// This implementation is based on the MUI documentation for Next.js App Router
function ThemeRegistry({ children }) {
  const [{ cache, flush }] = useState(() => {
    const cache = createCache({
      key: "mui-cache",
      prepend: true,
    });
    cache.compat = true;
    
    // This is the important part for SSR
    const prevInsert = cache.insert;
    let inserted = [];
    
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    
    return { cache, flush };
  });

  // This injects the critical styles on the server
  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    
    let styles = "";
    for (const name of names) {
      styles += cache.inserted[name];
    }
    
    return (
      <style
        data-emotion={`${cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ThemeProvider>
        <MuiThemeRegistryWithTheme>{children}</MuiThemeRegistryWithTheme>
      </ThemeProvider>
    </CacheProvider>
  );
}

// Inner component that uses the theme context
function MuiThemeRegistryWithTheme({ children }) {
  const { mode } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(createAppTheme('light'));
  
  // Update theme when mode changes
  useEffect(() => {
    setCurrentTheme(createAppTheme(mode));
  }, [mode]);

  return (
    <MuiThemeProvider theme={currentTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}

export default ThemeRegistry;