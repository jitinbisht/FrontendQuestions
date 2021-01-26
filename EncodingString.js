const encodeString = (str) => {
  if(str.length === 0) return '';
  let currentChar = str[0];
  let encodedStr = '';
  let count = 1;
  
  for(let i=1; i<str.length; i++) {
    const char = str[i];
    if(currentChar === char) count++;
    else {
      encodedStr += currentChar + count;
      count = 1;
      currentChar = char;
    }
  }
  return encodedStr += currentChar + count;
}

console.log(encodeString("aaabbbccccd")); // o/p: a3b3c4d1
