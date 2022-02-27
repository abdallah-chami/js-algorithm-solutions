/**
 * @param {string[][]} message
 * @return {string}
 */
function decode(message) {
    // your code here
    let decodedMessage = "";
    let x = -1;
    let y = -1;

    const nextDR = () => message[++y][++x];
    const nextUR = () => message[--y][++x];

    const hasNextDR = () =>  ((y + 1) < message.length) && ((x + 1) < message[0].length);
    const hasNextUR = () => ((y - 1) < message.length) && ((x + 1) < message[0].length) && (y - 1) >= 0;

    let next = nextDR;
    let hasNext = hasNextDR;

    const swapDirection = () => {
        (next == nextDR)? (next = nextUR): (next = nextDR);
        (hasNext == hasNextDR)? (hasNext = hasNextUR): (hasNext = hasNextDR);
    }

    while(hasNext()){
        decodedMessage += next();

        if(!hasNext()){
            swapDirection();
        }
    }

    return decodedMessage;
}



console.log(decode([
    ['I', 'B', 'C', 'A', 'L', 'K', 'A'],
    ['D', 'R', 'F', 'C', 'A', 'E', 'A'],
    ['G', 'H', 'O', 'E', 'L', 'A', 'D']
]));