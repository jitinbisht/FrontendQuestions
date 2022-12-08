var str = 'naman';

const isPalin = (str) => 
  str
  .trim()
  .toLowerCase()
  .split('')
  .reduce((result, character) => character + result) === str.trim();

console.log(isPalin(str));

==========
  
  function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}
palindrome("A man, a plan, a canal. Panama");
