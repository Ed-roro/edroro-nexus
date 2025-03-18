/**
 * Utility functions for date formatting and manipulation
 */

/**
 * Format a date into a readable string
 * @param {Date|string|number} date - The date to format
 * @param {Object} options - Formatting options
 * @param {string} options.format - Format style: 'short', 'medium', 'long', or 'full'
 * @param {boolean} options.includeTime - Whether to include the time
 * @returns {string} Formatted date string
 */
export function formatDate(date, { format = 'medium', includeTime = false } = {}) {
  const dateObj = date instanceof Date ? date : new Date(date);
  
  // Handle invalid dates
  if (isNaN(dateObj.getTime())) {
    return 'Invalid date';
  }
  
  // Format options
  const options = {
    short: { year: 'numeric', month: 'numeric', day: 'numeric' },
    medium: { year: 'numeric', month: 'short', day: 'numeric' },
    long: { year: 'numeric', month: 'long', day: 'numeric' },
    full: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  };
  
  // Add time if requested
  if (includeTime) {
    options[format].hour = 'numeric';
    options[format].minute = 'numeric';
  }
  
  return dateObj.toLocaleDateString(undefined, options[format]);
}

/**
 * Get a relative time string (e.g., "2 days ago", "in 3 hours")
 * @param {Date|string|number} date - The date to format
 * @returns {string} Relative time string
 */
export function getRelativeTimeString(date) {
  const dateObj = date instanceof Date ? date : new Date(date);
  
  // Handle invalid dates
  if (isNaN(dateObj.getTime())) {
    return 'Invalid date';
  }
  
  const now = new Date();
  const diffInMs = dateObj.getTime() - now.getTime();
  const diffInSecs = Math.round(diffInMs / 1000);
  const diffInMins = Math.round(diffInSecs / 60);
  const diffInHours = Math.round(diffInMins / 60);
  const diffInDays = Math.round(diffInHours / 24);
  
  if (Math.abs(diffInSecs) < 60) {
    return diffInSecs >= 0 ? 'just now' : 'just now';
  } else if (Math.abs(diffInMins) < 60) {
    return diffInMins >= 0 
      ? `in ${diffInMins} minute${diffInMins === 1 ? '' : 's'}`
      : `${Math.abs(diffInMins)} minute${Math.abs(diffInMins) === 1 ? '' : 's'} ago`;
  } else if (Math.abs(diffInHours) < 24) {
    return diffInHours >= 0
      ? `in ${diffInHours} hour${diffInHours === 1 ? '' : 's'}`
      : `${Math.abs(diffInHours)} hour${Math.abs(diffInHours) === 1 ? '' : 's'} ago`;
  } else if (Math.abs(diffInDays) < 30) {
    return diffInDays >= 0
      ? `in ${diffInDays} day${diffInDays === 1 ? '' : 's'}`
      : `${Math.abs(diffInDays)} day${Math.abs(diffInDays) === 1 ? '' : 's'} ago`;
  } else {
    return formatDate(dateObj);
  }
}