
/**
 * @param {(...args:any[]) => any} func
 * @param {number} wait
 * @returns {(...args:any[]) => any}
 */
function throttle(func, wait) {
    // your code here

    let running = false;
    let nextToRun = null;

    return (...args)=> {

        if(running) {
            nextToRun = () => func(...args)
        }

        else {
            running = true;
            func(args);

            setTimeout(()=> {
                if(nextToRun){
                    nextToRun()
                    nextToRun = null;
                }
                else {
                    running = false;
                }

            }, wait)
        }

    }


}

