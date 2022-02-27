
/**
 * @param {number[]} arr - ascending array with duplicates
 * @param {number} target
 * @return {number}
 */
function elementBefore(arr, target){
    // your code here
    let left = 0;
    let right = arr.length - 1;

    while(left <= right){

        let mid = Math.floor((left + right)/ 2);

        if(arr[mid] >= target){
            right = mid - 1;
        }
        else{
            left = mid + 1;
        }
    }

    return arr[right]
}
