/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {

    intervals.sort((a, b) => a[0] - b[0]);

    return intervals.reduce((acc, interval) => {
        let prev = acc[acc.length - 1]

        if(prev && prev[1] >= interval[0]){
            prev[1] = Math.max(prev[1], interval[1])
        }
        else {
            acc.push([...interval])
        }

        return acc;

    }, [])


};