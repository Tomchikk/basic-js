const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain(str) {
    
    
    let arrStr = str.split('') 
    let arrSabaki = [] 

    arrSabaki = Array.from(arrStr.entries()).filter(i => i[1] == '@').map(i => i[0])
  
    
    let lastChar = arrSabaki[arrSabaki.length-1] 
    
  
    let result = str.slice(lastChar + 1) 
    return result
}


module.exports = {
  getEmailDomain
};
