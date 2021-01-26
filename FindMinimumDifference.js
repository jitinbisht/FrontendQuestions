// minimum difference between any pair in an unsorted array.
var array = [1, 5, 3, 19, 18, 25];

function findMinDiff(array){
    array.sort((a,b) => a-b); //[1,3,5,18,19,25]
    let minDiff = Number.MAX_SAFE_INTEGER;

   for(let i = 0; i<array.length - 1; i++) {
       if(array[i+1] - array[i] < minDiff) {
           minDiff = array[i+1] - array[i];
       }
   }
   return minDiff;
}

console.log(findMinDiff(array));
