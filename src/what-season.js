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
function getSeason(season) {
  if (getSeason()) {
    return 'Unable to determine the time of year!'
   }

   if (typeof(season) == 'number' || season == undefined || season == null || season == false  || typeof(season) === 'function') {
    return 'Invalid date!'
   }

   season.getMonth()
   let month = now.getMonth() + 1;
   let year = now.getFullYear();

   throw new Error ('Invalid date!')
   
   if (month >= 3 && month <= 5) {
    result = 'Spring'
   }
   if (month >= 6 && month <=8) {
    result = 'Summer'
   }
   if (month >= 9 && month <= 11) {
    result = 'Fall'
   } else {
    result = 'Winter'
   }

}

return season

module.exports = {
  getSeason
};
