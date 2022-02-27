/**
 type IsBad = (version: number) => boolean
 */

/**
 * @param {IsBad} isBad
 */
function firstBadVersion(isBad) {
    // firstBadVersion receive a check function isBad
    // and should return a closure which accepts a version number(integer)
    return (version) => {
        // write your code to return the first bad version
        // if none found, return -1

        let start = 0;
        let end = version;

        while(start < end) {

            let mid = Math.floor((end + start)/2);

            if(isBad(mid)){
                end = mid;
            }
            else {
                start = mid + 1;
            }
        }

        return isBad(start)? start: -1;
    }
}


