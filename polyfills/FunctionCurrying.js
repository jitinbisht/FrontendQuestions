//Reference: https://medium.com/better-programming/currying-inside-javascript-a19f29600880#:~:text=Currying%20is%20an%20advanced%20technique,(s)%20to%20the%20function.

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
