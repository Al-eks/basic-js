const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  const catsArray = matrix.flat();
  let count = 0;
  for( i = 0; i < catsArray.length; i++) {
    if (catsArray[i] === '^^') {
      count++;
    };
  };
  return count;
};