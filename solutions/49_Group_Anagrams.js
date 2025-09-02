// FIRST ATTEMPT AT GROUP ANAGRAMS. I passed 68 of the tests; trying to brute force. Going to research a better way to solve the problem than brute forcing a method.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function (strs) {
  let dummyArray = [];
  let tempArray = [];
  let usedItems = new Set();

  for (let i = 0; i < strs.length; i++) {
    let currentValue = strs[i];

    if (usedItems.has(currentValue)) {
      continue;
    } else {
      tempArray = [currentValue];
    }

    for (let j = i + 1; j < strs.length; j++) {
      let currentSecondValue = strs[j];

      if (currentValue.length == currentSecondValue.length) {
        
        // THIRD LOOP TO CHECK IF VALUES ARE ARRAY
        for (let k = 0; k < currentValue.length; k++) {
          let isAnagram = false;

          if (currentSecondValue.includes(currentValue[k])) {
            isAnagram = true;
          } else {
            isAnagram = false;
            break;
          }

          if (k + 1 == currentValue.length && isAnagram) {
            console.log("Inserting into array");
            tempArray.push(currentSecondValue);
            usedItems.add(currentSecondValue);
            console.log(tempArray);
          }
        }
      }
    }

    dummyArray.push(tempArray);
    console.log(dummyArray);
  }

  return dummyArray;
};
