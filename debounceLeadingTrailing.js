



/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 * @returns {(...args: any[]) => any}
 */
function debounce(func, wait, option = {leading: false, trailing: true}) {
    // your code here
    // your code here
    let nextToRun = null;
    let timeout = null;

    return (...args) => {

        if(option.leading && !timeout) {
            func(...args);
        }
        else if (option.trailing) {
            nextToRun = () => func(...args);
        }

        if(timeout){
            clearTimeout(timeout);
        }

        timeout = setTimeout(()=> {

            if(nextToRun){
                nextToRun();
                nextToRun = null;
            }

            timeout = null;

        }, wait)
    }
}


