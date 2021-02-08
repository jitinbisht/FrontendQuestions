var str = 'abcd';

function findSubstrings(str){
  for(let i=0; i<str.length; i++){
    for(let j=1; j<str.length; j++){
      console.log(str.substring(i,j));
    }
  }
};
findSubstrings(str);
