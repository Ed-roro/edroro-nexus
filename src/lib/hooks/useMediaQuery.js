"use client";

import { useEffect, useState } from 'react';

/**
 * Custom hook for responsive design
 * 
 * This hook safely handles media queries in Next.js, accounting for
 * Server-Side Rendering (SSR). In SSR, the 'window' object isn't available
 * since code runs on the server, so we need to check for its existence.
 * 
 * @param {string} query - CSS media query string
 * @returns {boolean} - Whether the media query matches
 * 
 * @example
 * // Usage
 * const isMobile = useMediaQuery('(max-width: 768px)');
 * const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
 * const isDesktop = useMediaQuery('(min-width: 1025px)');
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Check if window is defined (needed because Next.js renders on the server first)
    // During server rendering, window is not available
    if (typeof window === 'undefined') {
      return;
    }

    const media = window.matchMedia(query);
    
    // Initial check
    setMatches(media.matches);
    
    // Update matches when the media query changes
    const listener = (event) => {
      setMatches(event.matches);
    };
    
    // Add event listener
    media.addEventListener('change', listener);
    
    // Clean up
    return () => {
      media.removeEventListener('change', listener);
    };
  }, [query]);

  return matches;
}