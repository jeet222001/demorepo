function addListener(event, fn) {
    this.listeners[event] = this.listeners[event] || [];
    this.listeners[event].push(fn);
    return this;
}

It takes in an event name and a callback function to be executed.

