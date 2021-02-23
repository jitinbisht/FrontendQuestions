#Find Minimum in Rotated Sorted Array II. (with Duplicate values in an array)
//https://www.youtube.com/watch?v=j3187M1P2Xg

var findMin = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    mid = Math.floor((start + end)/2);
    
    while(start < end){
        if(nums[mid] > nums[end]) {
            start = mid + 1;
        } else if(nums[mid] < nums[end]) {
            end = mid;
        } else {
           end--
        }
    }
    return nums[start];
};
