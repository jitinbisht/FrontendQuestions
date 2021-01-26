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
