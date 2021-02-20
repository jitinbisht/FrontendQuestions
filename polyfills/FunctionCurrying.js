//Reference: https://medium.com/better-programming/currying-inside-javascript-a19f29600880#:~:text=Currying%20is%20an%20advanced%20technique,(s)%20to%20the%20function.
// Currying is the process of taking in a function that accepts multiple parameters as input and returning a function that accepts a single argument.
//Currying is a process in functional programming in which we can transform a function with multiple arguments into a sequence of nesting functions. It returns a new function that expects the next argument inline.
function curry(fn){
  return function curried(...args){
    const done = args.length >= fn.length;
    if(done) {
      return fn.apply(this, args);
    } else {
      return (...args2) => curried.apply(this, [...args, ...args2])
    }
  }
}

const sum = (x,y,z) => x+y+z;

const result = curry(sum);
console.log(result(1,2)(3)) //6
console.log(result(1)(2)(3)) //6
