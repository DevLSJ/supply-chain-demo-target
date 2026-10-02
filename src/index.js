'use strict';

/** Capitalize the first character of a string. */
function capitalize(s) {
  if (typeof s !== 'string' || s.length === 0) return s;
  return s[0].toUpperCase() + s.slice(1);
}

/** Convert a string to kebab-case. */
function kebabCase(s) {
  return String(s)
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

/** Truncate a string to a maximum length, appending an ellipsis. */
function truncate(s, max = 20) {
  const str = String(s);
  return str.length <= max ? str : str.slice(0, max - 1) + '…';
}

module.exports = { capitalize, kebabCase, truncate };
