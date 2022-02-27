

/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @returns {(...args: any[]) => any}
 */
function debounce(func, wait) {
    // your code here
    let nextToRun = null;
    let timeout = null;


    return (...args) => {

        nextToRun = () => func(...args);

        if(timeout){
            clearTimeout(timeout);
        }

        timeout = setTimeout(()=> {

            if(nextToRun){
                nextToRun();
                nextToRun = null;
            }

            waiting = false;

        }, wait)
    }
}

