
var arr = [1,6,5,3,3,2];
var k = 3;

====1st Method======
 function rotateArray(arr, k){
  let i = 0;
  while(i<k){
    arr.unshift(arr.pop());
    i++
  }
  return arr;
} 

===2nd Method======
 function rotateArray(arr, k){
  let i = 0;
  while(i<k){
    arr.unshift(...arr.splice(-1));
    i++;
  }
  return arr;
}

 =========3nd Method=======
 function rotateArray(arr, k){
  if(arr.length > k) {
  	arr.unshift(...arr.splice(-k));
  } else {
  	let i = 0;
     while(i<k){
      arr.unshift(...arr.splice(-1));
      i++;
  }
  }
  return arr;
}
console.log(rotateArray(arr, k));
