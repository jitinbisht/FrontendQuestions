#Type 1:
function isNumber(char){
  return isNaN(char) === false;
}
function decodeString(str) {
  if(str.length === 0) return '';
  let decodedStr = '';
  let currentCount = 0;
  str.split('').forEach(char => {
    if(isNumber(char)) {
      const num = Number(char);
      currentCount = currentCount * 10 + num;
    } else {
      decodedStr += char.repeat(currentCount);
      currentCount = 0;
    }
    });
return decodedStr;
}
console.log(decodeString("4A3B2C1D2A"));

#Type 2:


function decodeString(str) {
  if(str.length === 0) return '';
  let decodedStr = '';
  let currentCount = 0;
  let currentChar = str[0];
  str.split('').splice(1).forEach(char => {
    if(isNumber(char)) {
      const num = Number(char);
      currentCount = currentCount * 10 + num;
    } else {
    if(currentChar !== char){
        decodedStr += currentChar.repeat(currentCount);
        currentCount = 0;
        currentChar = char;
    }
        
    }
    });
return decodedStr += currentChar.repeat(currentCount);
}


console.log(decodeString("A4B3C2D1A2"));
