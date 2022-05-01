const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {

  if (typeof(arr) == 'number' || arr == undefined || arr == null || arr == false || Array.isArray(arr) == false ) {
    return false
   }
   
   let newArr = arr.filter(el => typeof(el) == 'string')
   console.log(newArr)
    
   let emptyArr = []
   
   for (let index = 0; index < newArr.length; index++){
       let str = newArr[index].trim().toUpperCase()
       emptyArr.push(str)
   }
   
   emptyArr.sort()
   
   let res = ''
   
   for(let a = 0; a < emptyArr.length; a++){
       let char = Array.from(emptyArr[a])[0]
       res = res + char
   }
   return res





}

module.exports = {
  createDreamTeam
};
