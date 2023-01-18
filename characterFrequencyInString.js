//ES5 and for loop
function getFrequency(str) {
  let freq = {};
  for(let i = 0; i<str.length; i++) {
    let currentChar = str.charAt(i);
    if(freq[currentChar]){
      freq[currentChar]++;
    } else {
      freq[currentChar] = 1;
    }
  }
  
  return freq;
}

console.log(getFrequency('aaabbbbccccdd'));

o/p: 
{
  a: 3,
  b: 4,
  c: 3,
  d: 2
}

//ES6 and forEach
let str = 'aaabbcde';
const findChars1 = (str) => {
	let freq={};
    str.split('').forEach((char, i) => {
  	 freq[char] ? freq[char]++ : freq[char] = 1
  });
  return freq;
}

console.log(findChars1(str))

====
const str = 'CoNgratulations';

const letters = {};
for (let char of str.toLowerCase()) {
    letters[char] = letters[char] + 1 || 1;
}

console.log(letters);
