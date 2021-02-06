var arr = [1,3,5,6,8,10];

Array.prototype.myMap = function(callback) {
  let result = [];
  for(let i=0; i< this.length; i++){
    result.push(callback(this[i], i, this))
  }
}

console.log(arr.myMap(item => item * 9));
