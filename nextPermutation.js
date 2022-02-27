/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let toSwap = nums.length - 2;

    while(toSwap >= 0 && nums[toSwap] >= nums[toSwap + 1]){
        toSwap--;
    }

    if(toSwap >= 0) {
        let swapFor = nums.length - 1;;

        while(nums[toSwap] >= nums[swapFor]){
            swapFor--;
        }

        [nums[toSwap], nums[swapFor]] = [nums[swapFor], nums[toSwap]]
    }

    reverse(nums, toSwap + 1);

};

let reverse = (arr, start) => {
    let end = arr.length - 1;

    while(start < end){
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start++;
        end--;
    }
}