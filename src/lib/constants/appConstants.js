/**
 * Application-wide constants
 */

// Site information
export const SITE_NAME = 'EdRoro Nexus';
export const SITE_DESCRIPTION = 'Personal brand website for Digital and Content Creation, using 3D Animation, Video Game Development, and Music Production';
export const SITE_URL = 'https://edroro.com';

// Social media links
export const SOCIAL_LINKS = {
  YOUTUBE: 'https://youtube.com/@edroro',
  TWITTER: 'https://twitter.com/edroro',
  INSTAGRAM: 'https://instagram.com/edroro',
  GITHUB: 'https://github.com/Ed-roro',
  LINKEDIN: 'https://linkedin.com/in/edroro',
};

// Navigation
export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: '3D Animation', path: '/animation' },
  { name: 'Game Dev', path: '/games' },
  { name: 'Music', path: '/music' },
  { name: 'Videos', path: '/videos' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

// Portfolio categories
export const PORTFOLIO_CATEGORIES = [
  { id: 'animation', name: '3D Animation' },
  { id: 'games', name: 'Game Development' },
  { id: 'music', name: 'Music Production' },
  { id: 'videos', name: 'YouTube Videos' },
  { id: 'all', name: 'All Projects' },
];

// Animation options
export const ANIMATION_VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  },
  slideUp: {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  },
  staggerChildren: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  },
};

// Media breakpoints (in pixels)
export const BREAKPOINTS = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};