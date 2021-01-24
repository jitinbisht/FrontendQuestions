#Two Number Sum

1st Method:

const twoNumberSum = (array, targetSum) => {
    let result = new Map();
    for(i=0; i<array.length; i++){
        let currentNum = array[i];
        let compliment = targetSum - currentNum;
        if(result.has(compliment)){
            return [currentNum, compliment];
        } else {
            result.set(currentNum, i);
        }
    }
}
twoNumberSum([3,5,-4,8, 11,1,-1,6], 10);

2nd Method:

const twoNumberSum = (array, targetSum) => {
  array.sort((a,b)=> a-b);
  let left = 0;
  let right = array.length - 1;
  while(left < right) {
    if(array[left] + array[right] === targetSum){
      return [array[left], array[right]];
    } else if(array[left] + array[right] < targetSum) {
      left++;
    } else {
      right++;
    }
  }
}
twoNumberSum([3,5,-4,8, 11,1,-1,6], 10);

