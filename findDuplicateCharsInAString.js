var str1 = "afewreociwddwjej";

function findRepeatChars(str){
  let arr = str.split('');
  let result = [];
  let hash = new Map();
  
  for(let i=0; i<str.length; i++){
    if(hash.get(arr[i]) === undefined){
      hash.set(arr[i], true);
    } else {
      let value = hash.get(arr[i]);
      if(value){
        hash.set(arr[i], !value);
      }
    }
  }
  hash.forEach((v,k) => {
    if(!v){
      result.push(k);
    }
  })
  return result;
};

console.log(...findRepeatChars(str1));
