//Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
function findLongestSubstring(str){

let longestSubStr = '',
maxLength = 0,
tempStr='',
posIndex;

for(let i = 0; i<str.length; i++){
	tempStr = str[i];
  posIndex = longestSubStr.indexOf(tempStr);
  if(posIndex > -1){
  	longestSubStr = longestSubStr.substring(posIndex + 1);
  }
  longestSubStr += tempStr;
  maxLength = Math.max(maxLength, longestSubStr.length)
}
return maxLength
}

console.log(findLongestSubstring('rithmschool'))
// 7
