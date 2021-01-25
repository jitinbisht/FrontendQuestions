#Balanced Paranthesis

function balancedParanthesis(string){
  const resultArr = [];
  const complimentArr = {')':'(', '}':'{', ']': '['};
  for(let i=0; i< string.length - 1; i++){
    const letter = string[i];
    switch(letter) {
    case '{': case '(': case '[':{
        resultArr.push(letter);
        break;
      }
    case '}': case ']': case ')':{
        const compliment = complimentArr[letter];
        if(resultArr.length === 0){
          return false;
        } else if(resultArr[resultArr.length - 1] === compliment){
          resultArr.pop();
        } else {
        return false;
        }
        break;
      }  
    }
  }
  return resultArr.length === 0;
}
balancedParanthesis("([])(){}(())()()");
