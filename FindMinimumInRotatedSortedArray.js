#Find Minimum in Rotated Sorted Array

var findMin = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    while(start < end) {
        let mid = Math.floor((start + end)/2);
        if(nums[mid] > nums[end]) start = mid + 1;
        else end = mid;
    }
    return nums[start];
};
console.log(findMin([3,4,5,1,2]));
