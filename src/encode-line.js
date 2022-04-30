const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine (str) {
  if (str === "") {
    return '';
  }
  return str.match(/(.)\1*/g).map(val => val = `${val.length > 1 ? val.length : ''}${val[0]}`).join('')
}

module.exports = {
  encodeLine
};
