
// interface Laziness {
//   sleep: (time: number) => Laziness
//   sleepFirst: (time: number) => Laziness
//   eat: (food: string) => Laziness
// }

/**
 * @param {string} name
 * @param {(log: string) => void} logFn
 * @returns {Laziness}
 */
function LazyMan(name, logFn) {
    // your code here

    regTasks = [];
    urgentTasks = [];

    this.regTasks.push({type: 'greet', name})

    this.setTimeout(() => {
        runNext();
    }, 0)

    const res = {
        eat: (food) => {
            this.regTasks.push({type: 'eat', food})
            return res;
        },

        sleep: (time) => {
            this.regTasks.push({type: 'sleep', time})
            return res;
        },

        sleepFirst: (time) => {
            this.urgentTasks.push({type: 'sleep', time})
            return res;
        }
    }

    const runNext = () => {
        if(urgentTasks.length){
            runTask(urgentTasks.shift());
        }
        else if(regTasks.length){
            runTask(regTasks.shift())
        }
    }

    const runTask = (task) => {
        if(task.type === 'greet'){
            logFn("Hi, I'm " + task.name + ".")
            runNext();
        }
        if(task.type === 'sleep'){
            setTimeout(()=> {
                logFn("Wake up after " + task.time + " second" + (task.time === 1? "": "s") + ".");
                runNext();
            }, task.time*1000)
        }
        if(task.type === 'eat'){
            logFn("Eat " + task.food + ".");
            runNext();
        }
    }

    return res;
}