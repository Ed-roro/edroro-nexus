"use client";

import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";
import theme from "./theme";

// This implementation is based on the MUI documentation for Next.js App Router
export default function ThemeRegistry({ children }) {
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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}