class BrowserHistory {

    /**
     * @param {string} url
     * if url is set, it means new tab with url
     * otherwise, it is empty new tab
     */
    constructor(url) {
        this.index = -1;
        this.history = []
        if(url) {
            this.visit(url);
            this.initial = url;
        }

    }
    /**
     * @param { string } url
     */
    visit(url) {
        this.history.splice(this.index + 1);
        this.history.push(url);
        this.index++;
    }

    /**
     * @return {string} current url
     */
    get current() {
        return this.history[this.index]?? this.initial;
    }

    // go to previous entry
    goBack() {
        if(this.index > -1) this.index--;
    }

    // go to next visited url
    forward() {
        if(this.index < (this.history.length - 1)) this.index++;
    }
}