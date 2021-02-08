var arr = [1,2,3,4,5,3,4,2,7];

function findFirstDuplicate(arr){
  let elementSet = new Set();
  for(let i=0; i<arr.length; i++){
    if(elementSet.has(arr[i])) return arr[i];
    elementSet.add(arr[i]);
  }
  return 'No Duplicates found';
}
console.log(findFirstDuplicate(arr));
