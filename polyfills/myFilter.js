var arr = [1,4,6,8,3];

//arr.filter(callback(currentValue, index, arr))
arr.filter(item => item>10)

Array.prototype.myFilter = function(callback){
  let result = [];
  for(let i = 0; i < this.length; i++){
    if(callback(this[i], i, arr)){
        result.push(this[i])
    }
  }
  return result;
}

console.log(arr.myFilter(item => item > 3));
