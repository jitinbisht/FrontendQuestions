let largestSubarraySum = (array) => {
    let currentSum = 0
    let largestSum = 0

    for(let number of array){
        currentSum = Math.max(0, (currentSum + number))
        largestSum = Math.max(largestSum, currentSum)
    }
    
    return largestSum
  
}

largestSubarraySum([1, 100, 4, 15, 9, 30]).  // 159
console.log(largestSubarraySum([2, 1, -3, 4, -1, 2, 1, -5, 4]));  // 6
