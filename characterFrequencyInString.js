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
