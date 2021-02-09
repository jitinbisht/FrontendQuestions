var arr = [1,2,4,5,6] // sort the array if it is unsorted.

function missingNum(arr){
    let n = arr.length;
    let total = ((n+1) * (n+2))/2;
    console.log(total, '===total==');
    for(let i=0; i<arr.length; i++){
        total -= arr[i]
    }
return total;
}
console.log(missingNum(arr));
o/p: 3
