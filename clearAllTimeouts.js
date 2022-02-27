const clearAllTimeouts = () => {
    let id = window.setTimeout(function() {}, 0);

    while (id--) {
        window.clearTimeout(id); // will do nothing if no timeout with id is present
    }
}


// online solution, overrides

const {setTimeout: _setTimeout, clearTimeout: _clearTimeout} = window

window.timerIds = new Set()

window.setTimeout = function(fn, delay, ...args) {
    let timerId
    let callback = () => {
        fn.apply(args)
        window.timerIds.delete(timerId)
    }
    timerId = _setTimeout(callback, delay)
    window.timerIds.add(timerId)
    return timerId
}

window.clearTimeout = function(timerId) {
    window.timerIds.delete(timerId)
    _clearTimeout(timerId)
}


function clearAllTimeout() {
    for(let timerId of window.timerIds) {
        clearTimeout(timerId)
    }
}