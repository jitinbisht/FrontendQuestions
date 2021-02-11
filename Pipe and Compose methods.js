// Reference
https://www.freecodecamp.org/news/pipe-and-compose-in-javascript-5b04004ac937/

// 1. PIPE method (left to right method execution)
const addTen = (num) => num + 10;
const multiply30 = (num) => num * 30;

function pipe(...functions){
  return function(value){
    return functions.reduce((currentValue, currentFunction) => {
      return currentFunction(currentValue)
    }, value)
  }
}
console.log(pipe(addTen,multiply)(20))
//O/P: 900

============================================

2. COMPOSE

const addTen = (num) => num + 10;
const multiply30 = (num) => num * 30;

function compose(...functions){
  return function(value){
    return functions.reduceRight((currentValue, currentFunction) => {
      return currentFunction(currentValue)
    }, value)
  }
}
console.log(compose(addTen,multiply)(20))
//o/p: 610
