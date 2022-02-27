



/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 * @returns {(...args: any[]) => any}
 */
function throttle(func, wait, option = {leading: true, trailing: true}) {
    // your code here

    let waiting = false;
    let nextToRun = null;

    return (...args)=> {

        if (waiting) {
            if(option.trailing) {
                nextToRun = () => func(...args);
            }
        }

        else {

            waiting = true;

            if(option.leading){
                func(...args);
            }

            else if(option.trailing){
                nextToRun = () => func(...args);
            }

            let timeout = () => setTimeout(()=> {

                if(nextToRun){
                    nextToRun();
                    nextToRun = null;
                    timeout();
                }
                else {
                    waiting = false;
                }

            }, wait);

            timeout();
        }
    }
}
