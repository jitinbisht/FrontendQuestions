

const func = (a,b) => console.log("HI", a, b,)
const a = 10;
const b = 20;
const debounce = (timeout = 500, func) => {
  let timer;
  return (...args) => {
    let context = this;
    let args1 = args;
    clearTimeout(timer);
     timer = setTimeout(()=>{
      func.apply(context,args1);
    },timeout)
  }
}

console.log(debounce(500, func)(a,b))



//https://codeburst.io/throttling-and-debouncing-in-javascript-b01cad5c8edf
// const debounce = (func, delay) => {
//   let inDebounce
//   return function() {
//     const context = this
//     const args = arguments
//     clearTimeout(inDebounce)
//     inDebounce = setTimeout(() => func.apply(context, args), delay)
//   }
// }

// function add(a, b) {
//   console.log(a + b);
// }
// const debounceCheck = debounce(add, 1000);
// debounceCheck(3, 4); //=> 7
