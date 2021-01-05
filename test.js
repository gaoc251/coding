class Event {
    constructor () {
        this.events= []
    }

    on (eventName, callback) {
        if (this.events[eventName]) {
            this.events.push(callBack)
        } else {
            this.events[eventName] = callback
        }
    }

    emit (eventName, param) {
        if (this.events[eventName]) {
            this.events.forEach(callBack => {
                callback(param)
            })
        }
    }
}