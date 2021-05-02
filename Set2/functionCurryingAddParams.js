//https://www.youtube.com/watch?v=D5ENjfSkHY4&list=PLlasXeu85E9eV5xUEgrWUB8NAUvNZGsK0&index=3

let sum = a => b => b ? sum(a+b) : a;

console.log(sum(10)(3)(4)(3)())
