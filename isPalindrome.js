var str = 'naman';

const isPalin = (str) => 
  str
  .trim()
  .toLowerCase()
  .split('')
  .reduce((result, character) => character + result) === str.trim();

console.log(isPalin(str));
