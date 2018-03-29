class UserMessage {
    constructor(message) {
        this.sender = 'user',
        this.type = 'text',
        this.message = message,
        this.class_used = 'right'
    }
}


export default UserMessage;