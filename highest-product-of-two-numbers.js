//Brute Force
const twoSum = (arr) => {
  let maxProduct = 0;
  for (let i=0; i<arr.length; i++) {
    for (let j=i+1; j<arr.length; j++) { // i+1 here!
      let product = arr[j] * arr[i];
      if (product > maxProduct) {
        maxProduct = product;
      }
    }
  }
  return maxProduct;
}
===============================================
//Sorting

// O(n log n) time
const twoSum = (arr) => {
  let sortedArr = arr.sort();
  return sortedArr[arr.length - 1] * sortedArr[arr.length - 2];
}

=================================================

const twoSum = (arr) => {
  let highestInt = 0;
  let nextHighestInt = 0;
  for (let i=0; i<arr.length; i++) {
    if (arr[i] > highestInt) {
      nextHighestInt = highestInt;
      highestInt = arr[i];
    } else if (arr[i] > nextHighestInt) {
      nextHighestInt = arr[i];
    } else {
      continue;
    }
  }
  return highestInt * nextHighestInt;
}
=========================================
