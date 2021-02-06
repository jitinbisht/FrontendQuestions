var arr = [1,0,3,5,4]

//arr.find(callback(currentValue, currentIndex, arr))

Array.prototype.myFind = function(callback){
  for(let i=0; i<this.length; i++){
    if(callback(this[i], i, this)){
      return this[i]
    }
  }
}

console.log(arr.myFind(item => item > 3))
