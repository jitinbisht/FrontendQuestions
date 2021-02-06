let arr = [1,3,5,7,8];
let newArr=[];

//arr.forEach(callbackFunction(currentValue, index, array));

Array.prototype.myForEach = function(callback){
  for(let i=0; i<this.length; i++){
    callback(this[i], i, this)
  }
}
console.log(arr.myForEach(item => newArr.push(item+10)));
