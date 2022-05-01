const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = 0;
  let temp = n;
  const digits = [];
  while (temp) {
    digits.push(temp % 10);
    temp = Math.floor(temp / 10);
  }
  for (let digit = 0; digit < digits.length; digit += 1) {
    let j = 0;
    for (let i = digits.length - 1; i >= 0; i -= 1) {
      if (i !== digit) j = j * 10 + digits[i];
    }
    result = Math.max(j, result);
  }
  return result;
}

module.exports = {
  deleteDigit
};