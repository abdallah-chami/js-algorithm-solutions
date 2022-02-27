// Fisher - Yates Shuffle

/**
 * @param {any[]} arr
 * @returns {void}
 */
function shuffle(arr) {

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }

    const swap = (i ,j) => {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    for(let i = arr.length; i > 0; i--){
        swap(i, getRandomInt(i));
    }

}

