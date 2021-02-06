var arr = [1,5,6]

// arr.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)

Array.prototype.myReduce = function(callback, initialValue){
  let accumulator = initialValue;
  
  for(let i = 0; i < this.length; i++){
    accumulator = callback(accumulator,this[i], i, arr);
  }
return accumulator;
}

console.log(arr.myReduce((acc,curr) => {
  return acc + curr;
}, 10))
