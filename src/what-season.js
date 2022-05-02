const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  try {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if  (isNaN(date.getTime())) {
    throw new Error('Invalid date!')
  }

  let month = date.getMonth();

  if  (1 < month &&  month < 5) {
    return 'spring'
  }
  if  (4 < month &&  month < 8) {
    return 'summer'
  }
  if  (7 < month &&  month < 11) {
    return 'autumn'
  }
  if  (10 < month ||  month < 2) {
    return 'winter'
  }
  } catch {throw new Error('Invalid date!')}
}

module.exports = {
  getSeason
};
