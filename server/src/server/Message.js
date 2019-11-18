class Message {
    constructor(status = 0, message = '', data = null) {
        this.status = status;
        this.message = message;
        this.data = data;
    }
}

module.exports = Message;